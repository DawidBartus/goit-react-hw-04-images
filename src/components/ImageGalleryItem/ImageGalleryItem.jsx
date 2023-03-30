import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryIteam = props => {
  const { images } = props;
  const galleryItemStyle = {
    listStyle: 'none',
    width: '300px',
    display: 'flex',
    alignItems: 'flex-end',
  };
  const imageStyle = {
    width: '300px',
    height: '200px',
    objectFit: 'fill',
  };
  return (
    <>
      {images.length > 0 &&
        images.map(({ id, largeImageURL, previewURL, type, tags }) => {
          return (
            <li className="gallery-item" key={id} style={galleryItemStyle}>
              <img
                style={imageStyle}
                dataid={largeImageURL}
                src={previewURL}
                alt={tags + type}
              />
            </li>
          );
        })}
    </>
  );
};
ImageGalleryIteam.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      largeImageURL: PropTypes.string,
      previewURL: PropTypes.string,
      type: PropTypes.string,
      tags: PropTypes.string,
    })
  ),
};
export default ImageGalleryIteam;
