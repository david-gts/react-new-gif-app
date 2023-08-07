export const getGif = async(category) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=kdb18mWjx8ZMF4we87UAIhclXHI04MGO&q=${category}&limit=12`;
  const response = await fetch(url);
  const {data} = await response.json();
 
  const gifs = data.map(i => ({
    id: i.id,
    title: i.title,
    url: i.images.downsized_medium.url,
  }))

  return gifs;

}