import './App.css';
import React, {useEffect} from 'react';
import Login from './Login';
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import {useDataLayerValue} from "./DataLayer";

//super object for spotify
const spotify = new SpotifyWebApi();

function App() {

  //state to save the token
  //DataLayer
  const [{token}, dispatch] = useDataLayerValue();


  useEffect(() => {

    //we get the token and save it here
    const hash = getTokenFromResponse();
    window.location.hash ="";

    const _token = hash.access_token;

    if(_token)
    {
     dispatch({
       type: "SET_TOKEN",
       token: _token,
     })
      //we give the access token to spotify api
      //so we can talk back with react and website
      spotify.setAccessToken(_token);

      //get users account and returns a promise
      spotify.getMe().then(user => {
        
        //pop user to data layer
        dispatch({
          type: 'SET_USER',
          user:  user,
        })

      });

      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type: "SET_PLAYLISTS",
          playlists:playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcC4OKqfnGsXw").then((response) =>
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      }));

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });


    }
 
  }, [token, dispatch]);

 

  return (
    <div className="app">
      {
        //if we have a token display logged in 
        token ?

         (<Player spotify={spotify}/>) : (<Login/>)

      }

    </div>
  );
}

export default App;
