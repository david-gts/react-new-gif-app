import React, { useEffect, useState } from 'react'
import { getGif } from '../helpers/getGifs'

export const useFetchGifs = (category) => {

  const [images, setimages] = useState([])
  const [isLoading, setisLoading] = useState(true)

  const getImg = async() => {
    const newImg = await getGif(category)
    setimages(newImg);
    setisLoading(false);
  }

  useEffect(() => {
    getImg()
  }, [])

  return {
    images,
    isLoading
  }
}
