export const getGifts = async(category)  => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=HsNSNNIuvobfOj1Ff3j1CWQJEfvr2mMi`;
    const respuesta = await fetch( url );
    const {data} = await respuesta.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            urlGif: img.images.downsized_medium.url,
        }
    })

    return gifs;

}