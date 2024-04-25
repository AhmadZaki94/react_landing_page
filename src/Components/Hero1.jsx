import { Box, Button, Typography } from '@mui/material'
import React from 'react';
import img from './images/back_image.jpg';

export const Hero1 = () => {
  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      height: '100vh',
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      // marginBottom:'5vw'
    },
    text: {
      textAlign: 'center',
      color: '#f8f9fa',
      marginBottom: '2rem',
    },
    button: {
      marginTop: '15px',
      marginBottom: '2rem',
      background: 'linear-gradient(to right, black, grey)',
      padding: '1vw 2vw',
      '&:hover': {
        backgroundColor: '#212529',
      },
    },
  };

  return (
    <Box sx={styles.container} id='home'>
      <Box sx={styles.text}>
        <Typography sx={{ color: "white", fontWeight: 400 }} variant="h1">WE ARE A LANDING PAGE</Typography>
        <Typography sx={{ color: "white", fontWeight: 400 }} variant="h3" component='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas perspiciatis iure, quo vitae temporibus fugiat consequuntur nihil.</Typography>
      </Box>
      <Button variant="contained" sx={styles.button}>Learn More</Button>
  </Box>
  )
}
