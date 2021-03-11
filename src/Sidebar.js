import React from 'react';
import "./Sidebar.css";
import SidebarOptions from './SidebarOptions';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import {useDataLayerValue} from "./DataLayer";
function Sidebar() {

    const[{playlists}, dispatch] = useDataLayerValue();



    return (
        <div className="sidebar">
            <img className="sidebar__image" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spo-img"></img>

            <SidebarOptions icon={HomeIcon} title="Home"/>
            <SidebarOptions icon={SearchIcon} title="Search"/>
            <SidebarOptions icon={LibraryMusicIcon} title="Your Library"/>

            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr/>

            {playlists?.items?.map((playlist) => (
            <SidebarOptions title={playlist.name} /> ))}
            
        </div>
    )
}

export default Sidebar
