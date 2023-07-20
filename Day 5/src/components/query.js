
import React from 'react'
import './query.css'
import { Avatar,Button } from '@mui/material'

function Query() {
  return (
    <div className='query'>
      <form>
        <div className='query_input'>
          <Avatar src='https://tse2.mm.bing.net/th?id=OIP.KCRJ_lo3SlaxaKd6rQwujwHaHa&pid=Api&P=0&h=180'
          />
          <input type="text" placeholder="enter comment"/>
           
         </div>
         <input
           className='query_imageInput'
           placeholder='option:enter post url'/>
           <Button className='querybutton'>Comment</Button>
      </form>
    </div>
  )
}

export default Query
