import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
    return (
        <li className={css.imageGalleryItem}>
  <img className={css.imageGalleryItem_image} src={webformatURL} alt="" />
</li>
    )
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
}
