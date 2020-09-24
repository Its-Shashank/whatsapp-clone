import React from 'react'
import './chat.styles.css'
import {Avatar, IconButton} from '@material-ui/core'
import { AttachFile, SearchOutlined, MoreVert, InsertEmoticon, Mic } from '@material-ui/icons'

function Chat() {
  return (
    <div className='chat'>
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className='chat_message'>
          <span className='chat_name'>Hanu</span>
          <span>This is a message.</span>
          <span className='chat_timestamp'>
            {new Date().toUTCString()}
          </span>
        </p>
        <p className='chat_message chat_receiver'>
          <span className='chat_name'>Hanu</span>
          <span>This is a message.</span>
          <span className='chat_timestamp'>
            {new Date().toUTCString()}
          </span>
        </p>
        <p className='chat_message'>
          <span className='chat_name'>Hanu</span>
          <span>This is a message.</span>
          <span className='chat_timestamp'>
            {new Date().toUTCString()}
          </span>
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input type="text" placeholder="Type a message."/>
          <button type="submit">Send a message</button>
        </form>
        <Mic />
      </div>
    </div>
  )
}

export default Chat
