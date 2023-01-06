import React from 'react';
import css from './ImageGallery.module.css';

import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ images, ...otherProps }) => {
  return (
    <ul className={css.imageGallery}>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        console.log({ webformatURL });
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            {...otherProps}
          />
        );
      })}
    </ul>
  );
};