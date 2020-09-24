import React from 'react'
import { DonutLarge, Chat, MoreVert, SearchOutlined } from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core'
import './sidebar.styles.css';

import SidebarChat from '../SidebarChat/SidebarChat'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar_header">
        <Avatar src='https://avatars1.githubusercontent.com/u/46394345?s=400&u=c571ff3f6c0277dad4e0d85f6721042ca7fdddf4&v=4' />
        <div className="sidebar_header_right">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start a new chat" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  )
}

export default Sidebar
