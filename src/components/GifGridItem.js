import React from 'react'


const GifGridItem = ({ title,urlGif }) => {
  return (
    <div className='card animate__animated animate__fadeIn'>
        <img src={ urlGif } alt={ title } />
        <p> { title } </p>
    </div>
  )
}
export default GifGridItem;