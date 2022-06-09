import React, { useEffect, useState } from 'react'
import GifGridItem from './GifGridItem'
import { requestGifs } from '../request/requestGifs'

import { useFetchGifs } from "../hooks/useFetchGifs"


const GiffGrid = ({category}) => {
    const [gifs, setGifs] = useState([])
    useEffect(() => {
        requestGifs( category).then(setGifs)
    }, [ category ]) //se paspor si la categoria cambia vuelva a hacer la peticion
   
    const renderGifs = () =>  {
        return gifs.map( ( img ) => {
            return <GifGridItem key={img.id} {...img} />  
        })
    }

    return (
       <>
            <h3>{ category }</h3>
            
            <div className='card-grid'>
                {renderGifs()}
            </div>
       </>
    )
}

export default GiffGrid