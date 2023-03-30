import ImageGalleryIteam from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = props => {
  const { images, handleClick } = props;

  return (
    <ul
      className="gallery"
      onClick={handleClick}
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '20px auto',
        gap: '15px',
        flexWrap: 'wrap',
        maxWidth: '1000px',
      }}
    >
      <ImageGalleryIteam images={images} />
    </ul>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.array,
  handleClick: PropTypes.func,
};
export default ImageGallery;
