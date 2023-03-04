import React from 'react';
import YouTube from 'react-youtube';

// Import necessary dependencies

function Treatmentvid ({vid}) {

  // Set the options for displaying the YouTube video
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  // Render the YouTube component with the specified video ID and options
  return <YouTube videoId={vid} opts={opts} />;
}

// Export the Treatmentvid component
export default Treatmentvid;