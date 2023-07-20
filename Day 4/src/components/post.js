import React from 'react'
import './post.css'
import { Avatar} from '@mui/material'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CommentIcon from '@mui/icons-material/Comment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
function Post() {

  return (
    <div className='post'>
        <div className='post_avatar'>
          <Avatar src="https://tse2.mm.bing.net/th?id=OIP.pQktO-tEBqV5H-heSAJMVAHaHa&pid=Api&P=0&h=180"
          />

     </div>
     <div className='post_body'>
        <div className='post_head'>
            <div className='post_headtext'>
              <h3>DisplayName
              <span className='post_headsp'>
                <VerifiedUserIcon className='post_badge'/>
              </span>@username
              </h3>
            </div>
            <div className='post_hederdesc'>
               <p>users caption</p>
            </div>
          </div>
          <img src='https://tse3.mm.bing.net/th?id=OIP.EmR-Ci768-N2zQSafRPxCwAAAA&pid=Api&P=0&h=180'
               alt=""
               />
          <div className='post_footer'>
            <CommentIcon fontSize='small'/>
            <FavoriteBorderIcon  fontSize='small'/>
            <SendIcon fontSize='small'/>

            </div>
     </div>
     
    </div>
  )
}

export default Post
