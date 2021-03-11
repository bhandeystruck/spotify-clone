export const initialState = {
     user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
    // token: "BQAhGvlDHHzZr-wqOlPIOoaHY9oJqQYEaf9oytJE0aF9ewFt3kktF6-n6byLw-dFcCVr9_pzqyTBpuXmIx7gzIuDJpP_NIphuOtxLqcDiHOUSOVba2p_dyW8MXqFOAhm3tFq3KqGYPLKgjZvFuT8il4Nw2qacpfmTX4rfkIdFneLs-EjghW8"
};


const reducer = (state, action) =>{
    console.log(action);

    switch(action.type)
    {
        case 'SET_USER':
            return{
                //keeps whats in the users state
                ...state,
                user:action.user
            }

        case 'SET_TOKEN':
            return{
                //keeps whats in the users state
                ...state,
                token: action.token,
            }

        case 'SET_PLAYLISTS':
            return{
                //keeps whats in the users state
                ...state,
                playlists: action.playlists,
            };

        case "SET_PLAYING":
            return {
            ...state,
             playing: action.playing,
            };

        case "SET_ITEM":
            return {
            ...state,
            item: action.item,
            };

        case "SET_DISCOVER_WEEKLY":
            return {
            ...state,
            discover_weekly: action.discover_weekly,
             };

        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };
        
            
        case "SET_SPOTIFY":
            return {
            ...state,
            spotify: action.spotify,
            };



        default:
            return state
    }


}

export default reducer;