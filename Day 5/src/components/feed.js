import React from 'react'
import './feed.css'
import Query from './query'
import Post from './post'

function Feed() {
  return (
    <div className ="feed">
     <div className='feed_header'>
        <h2>Home</h2>
        </div>  
        <Query/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      
    </div>
  )
}

export default Feed
