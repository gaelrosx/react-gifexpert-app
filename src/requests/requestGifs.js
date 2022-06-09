export const requestGifs = async(category) => {
    const apyKey = 'vfeK6iGgWzBFTqS837f3B0qYIzPMZnMy'
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=30&api_key=${apyKey}`
    const response =  await fetch(url)
    const {data} = await response.json()

    
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs

}