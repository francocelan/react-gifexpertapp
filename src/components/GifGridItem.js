import React from 'react';
import PropTypes from "prop-types";


export const GifGridItem = ({ title,urlGif }) => {
  return (
    <div className='card animate__animated animate__fadeIn'>
        <img src={ urlGif } alt={ title } />
        <p> { title } </p>
    </div>
  )
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  urlGif: PropTypes.string.isRequired,
}

// export default GifGridItem;
