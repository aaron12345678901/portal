import React from 'react';
import YouTube from 'react-youtube';


function Treatmentvid ({vid}) {

    const opts = {
        
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    return <YouTube videoId={vid} opts={opts}  />;


}

export default Treatmentvid