import React from 'react';
import PropTypes from "prop-types";
import { useFetchGifs } from '../hooks/useFetchGifs';
//import React, { useState, useEffect } from 'react'
import {GifGridItem} from "./GifGridItem";



export const GifGrid = ({ category }) => {

    const {data, loading} = useFetchGifs(category);
    

  return (
    <>
        <h3 className='animate__animated animate__fadeIn'> { category } </h3>

        { loading && <p className='animate__animated animate__flash'>Loading...</p> }

        <div className='card-grid'>
            

                {
                    data.map(imagen => {
                        return <GifGridItem 
                        key={imagen.id}
                        {...imagen}
                        />
                    })
                }
                
            </div>
    </>
  )
}
GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}