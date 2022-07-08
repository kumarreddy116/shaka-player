import React from 'react';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';

function App() {
  return <ShakaPlayer  autoPlay={true} src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" />;
}

export default App;
