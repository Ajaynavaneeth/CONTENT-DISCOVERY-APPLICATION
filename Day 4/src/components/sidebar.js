import './sidebar.css';
import React from 'react';
import Sidebaroption from './sidebaroption';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MessageIcon from '@material-ui/icons/Message';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Button} from '@material-ui/core'
import { Link } from 'react-router-dom';
import Logo from "./logo.jpeg";




function Sidebar(){
    return(
        
        <div className='sidebar'>
         <img src={Logo}
             className='sicon'
            />
             <Link to='/homepage'> <Sidebaroption
              
              Icon={HomeSharpIcon}
              text="Home"/>
              </Link>
             
              <Link to='/explore'> <Sidebaroption
              Icon={SearchIcon}
              text="Explore"/></Link>
              
              <Link to='/notification'><Sidebaroption
               Icon={NotificationsNoneIcon}
              text="Notification"/></Link>

             <Link to='/message'> <Sidebaroption
              Icon={MessageIcon}
              text="Message"/>
              </Link>

              <Link to='/bookmark'><Sidebaroption
              Icon={BookmarksIcon}
              text="Bookmark"/>
              </Link>
              <Link to='/profile'> <Sidebaroption
              Icon={AccountCircleIcon}
              text="Profile"/>
              </Link>
              <Button className='sidebart'
              variant="outlined">Query</Button>
              
        </div>
    )
}
export default Sidebar;