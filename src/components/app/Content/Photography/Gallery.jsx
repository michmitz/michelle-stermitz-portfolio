/* eslint-disable max-len */
import React from 'react';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import { horizontalImages } from './images/horizontalImages.js';
import { verticalImages } from './images/verticalImages.js';
import { squareImages } from './images/squareImages.js';
import { shuffleArray } from '../../../../utils/shuffleArray.js';
import photographyStyles from '../../../../styles/photographyStyles.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const Gallery = ({ scrollPosition }) => {
  const images = horizontalImages.concat(verticalImages, squareImages);
  const shuffledImages = shuffleArray(images);

  return (
    <div className={photographyStyles.photoGallery}>
      {shuffledImages.map((image) =>
        <div className={photographyStyles.imageDiv} key={image.alt}>
          <LazyLoadImage
            key={image.alt}
            className={photographyStyles.image}
            alt={image.alt}
            effect="opacity"
            src={image.src}
            placeholderSrc={image.src} />
          <span className={photographyStyles.caption}>{image.caption}</span>
        </div>
      )}
    </div>
  );
};

export default trackWindowScroll(Gallery);
