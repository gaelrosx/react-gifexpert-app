//import React, { useEffect, useState } from 'react'
import GifGridItem from './GifGridItem'
//import { requestGifs } from '../request/requestGifs'

import { useFetchGifs } from "../hooks/useFetchGifs"


const GiffGrid = ({category}) => {
    // const [gifs, setGifs] = useState([])
    
    const { data: images, loading } = useFetchGifs(category);
  
    const renderGifs = () =>  {
        return images.map( ( img ) => {
            return <GifGridItem key={img.id} {...img} />  
        })
    }

  
    return (
       <>
            <h3 className="animate__animated animate__fadeInDown">{ category }</h3>

            { loading && <p className="animate__animated animate__flash">Loading Gifs...</p>}
            
            <div className='card-grid'>
                {renderGifs()}
            </div>
       </>
    )
}

export default GiffGrid