import React from "react"
import ReactPlayer from "react-player"
import "./responsive-player.css"

const ResponsivePlayer = (props) => {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            controls
            className='react-player'
            url={props.url}
            width= "90%"
            height= "78%"           
          />
        </div>
      )
    }
  
export default ResponsivePlayer