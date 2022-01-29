import React from 'react';
import VideoJS from '../VideoJS/VideoJS'; // point to where the functional component is stored

const VideoCompMain = () => {
   const playerRef = React.useRef(null);

   const videoJsOptions = {
      // lookup the options in the docs for more options
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
         {
            src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
            type: 'video/mp4',
         },
         {
            src: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
            type: 'video/mp4',
         },
      ],
   };

   const handlePlayerReady = (player) => {
      playerRef.current = player;

      // you can handle player events here
      player.on('waiting', () => {
         console.log('player is waiting');
      });

      player.on('dispose', () => {
         console.log('player will dispose');
      });
   };

   // const changePlayerOptions = () => {
   //   // you can update the player through the Video.js player instance
   //   if (!playerRef.current) {
   //     return;
   //   }
   //   // [update player through instance's api]
   //   playerRef.current.src([{src: 'http://ex.com/video.mp4', type: 'video/mp4'}]);
   //   playerRef.current.autoplay(false);
   // };

   return (
      <>
         <div>Rest of app here</div>

         <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />

         <div>Rest of app here</div>
      </>
   );
};

export default VideoCompMain;
