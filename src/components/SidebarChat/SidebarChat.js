import React from 'react'
import './sidebarchat.styles.css';
import { Avatar } from '@material-ui/core';

function SidebarChat() {
  return (
    <div className='sidebarChat'>
      <Avatar />
      <div className="sidebarChat_info">
        <h2>Room name</h2>
        <p>This would be the last msg.</p>
      </div>
    </div>
  )
}

export default SidebarChat
