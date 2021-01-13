/* eslint-disable max-len */
import React from 'react';
import useSound from 'use-sound';
import fire from '../../../../public/assets/sounds/Fire-sound-effect.mp3';
import stream from '../../../../public/assets/sounds/water-stream-sound-effect.mp3';
import rain from '../../../../public/assets/sounds/summer-rain-and-thunder-storm-sounds.mp3';
import birds from '../../../../public/assets/sounds/Birds-chirping-sound-effect.mp3';
import waves from '../../../../public/assets/sounds/calming-sea-sounds.mp3';
import sidebarStyles from '../../../styles/sidebarStyles.css';

  
export default function Sounds() {
  const options = {
    loop: true,
    volume: 0.5
  };

  const [playFire, fireOptions] = useSound(fire, options);
  const [playStream, streamOptions] = useSound(stream, options);
  const [playRain, rainOptions] = useSound(rain, options);
  const [playBirds, birdOptions] = useSound(birds, options);
  const [playWaves, waveOptions] = useSound(waves, options);

  const soundOptions = [
    fireOptions,
    streamOptions,
    rainOptions,
    birdOptions,
    waveOptions
  ];

  const handleClick = (e) => {
    const selectedSound = e.target.value;

    soundOptions.forEach(sound => {
      sound.stop();
    });

    if(selectedSound === 'fire') {
      playFire();
    } else if(selectedSound === 'stream') {
      playStream();
    } else if(selectedSound === 'rain') {
      playRain();
    } else if(selectedSound === 'birds') {
      playBirds();
    } else if(selectedSound === 'waves') {
      playWaves();
    }
  };

  const handleMute = () => {
    soundOptions.forEach(sound => {
      sound.stop();
    });
  };

  return (
    <div className={sidebarStyles.soundsDiv}>
      <h2>Relax with a sound.</h2>

      <label>
        <input
          type="radio"
          name="sound" 
          value="fire"
          onClick={handleClick} />
            fire
      </label>

      <label>
        <input
          type="radio"
          name="sound" 
          value="stream"
          onClick={handleClick} />
            stream
      </label>

      <label>
        <input 
          type="radio"
          name="sound" 
          value="rain"
          onClick={handleClick} />
            rain
      </label>

      <label>
        <input  
          type="radio"
          name="sound" 
          value="birds"
          onClick={handleClick} />
            birds
      </label>

      <label>
        <input
          type="radio"
          name="sound" 
          value="waves"
          onClick={handleClick} />
            waves
      </label>

      <label className={sidebarStyles.muteLabel}>
        <button
          className={sidebarStyles.muteButton}
          name="mute" 
          value="mute"
          onClick={handleMute} />
            mute
      </label>
    </div>
  );
}
