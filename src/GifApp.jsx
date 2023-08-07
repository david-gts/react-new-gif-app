import { Autocomplete, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
import { NavBar } from './components/NavBar'

export const GifApp = () => {

  const [categories, setCategories] = useState(['the avengers', 'interestelar'])

  const handleAddCategory = (newVal) => {

    if(categories.includes(newVal)) return; 
    setCategories([newVal,...categories]);
  }


  return (
    <>
      <NavBar />

      <AddCategory 
        onNewVal={handleAddCategory}
      />

      {categories.map(i => (
          <GifGrid 
            key={i} 
            category={i}
          />
        ))
      }
    </>
  )
}
