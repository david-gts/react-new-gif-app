import React, { useEffect, useState } from 'react'
import { getGif } from '../helpers/getGifs'
import { GifItem } from './GifItem'
import { Card, ImageList, Typography } from '@mui/material'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {
  const{images, isLoading} = useFetchGifs(category) 
  
  
  return (
    <Card>
      <Typography variant="h4" component="h2">{category}</Typography>
      <ImageList sx={{ height: '100vh' }} cols={4} >
      {
        images.map(i => (
          <GifItem 
            key={i.id}
            item={i}
          />
        ))
      }
      </ImageList>
    </Card>
    
  )
}
