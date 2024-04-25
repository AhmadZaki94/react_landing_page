import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import './hero.css';

export const Hero = () => {
  return (
    <>
      <Box id="container_box">
        <Box id="typo_box">
          <Typography variant='h1' id="hypertext" >
            WE ARE A LANDING PAGE
          </Typography>
          <Typography variant='p' sx={{ fontSize: '22px', color: 'white', mt: '15px'}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum magnam rem iure accusamus odit id error suscipit.
          </Typography>

          <Button id='lrm_btn'>LEARN MORE</Button>
        </Box>
      </Box>
    </>
  )
}
