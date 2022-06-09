import { useState, useEffect } from "react"
import { requestGifs } from "../requests/requestGifs"

export const useFetchGifs = (category) => {
  
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        requestGifs( category).then( imgs => {
            setState({ 
                data: imgs,
                loading: false
            })
        })
    }, [ category ]) 
   

    return state;
}
