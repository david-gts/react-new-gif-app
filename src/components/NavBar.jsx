import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const NavBar = () => {
  return (
    <div >
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h5" color="inherit" component="div">
            GifApp
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
