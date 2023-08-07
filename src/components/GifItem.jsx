import { ImageListItem, ImageListItemBar } from '@mui/material'
import React from 'react'

export const GifItem = ({item}) => {
  return (
    <ImageListItem>
      <img
        src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
        alt={item.title}
        loading="lazy"
      />
      <ImageListItemBar
        title={item.title}
        position="below"
      />
    </ImageListItem>
  )
}
