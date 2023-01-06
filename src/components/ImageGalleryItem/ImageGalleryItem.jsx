import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
    return (
        <li className={css.imageGalleryItem}>
  <img className={css.imageGalleryItem_image} src={webformatURL} alt="" />
</li>
    )
}