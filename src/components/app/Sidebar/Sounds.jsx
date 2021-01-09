/* eslint-disable max-len */
import React from 'react';
import useSound from 'use-sound';
import birds from '../../../../public/assets/sounds/Birds-chirping-sound-effect.mp3';
import sidebarStyles from '../../../styles/sidebarStyles.css';

  
export default function Sounds() {
  const [play] = useSound(birds);

  return (
    <div className={sidebarStyles.soundsDiv}>
      <h2>Relax.</h2>

      <label>
        <input 
          type="radio" 
          name="sound" 
          value="fireplace"
          onChange={play}  />
            fireplace
      </label>

      <label>
        <input 
          type="radio" 
          name="sound" 
          value="stream" />
            stream
      </label>

      <label>
        <input 
          type="radio" 
          name="sound" 
          value="snow" />
            snow
      </label>

      <label>
        <input 
          type="radio" 
          name="sound" 
          value="rain" />
            rain
      </label>

      <label>
        <input 
          type="radio" 
          name="sound" 
          value="birds" />
            birds
      </label>

      <label>
        <input 
          type="radio" 
          name="sound" 
          value="ocean" />
            ocean
      </label>
    </div>
  );
}
