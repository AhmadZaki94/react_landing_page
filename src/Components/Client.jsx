import { Avatar, Box, Card, Grid, Typography } from '@mui/material';
import React from 'react';
const ClientData = [
    {
      avatar: 'https://react-landing-page-template-93ne.vercel.app/img/testimonials/01.jpg',
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem",
      author: "- John Doe"
    },
    {
      avatar: 'https://react-landing-page-template-93ne.vercel.app/img/testimonials/02.jpg',
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem",
      author: "- Serento Toredo"
    },
    {
      avatar: 'https://react-landing-page-template-93ne.vercel.app/img/testimonials/04.jpg',
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem",
      author: "- Mila Kunis"
    },
    {
      avatar: 'https://react-landing-page-template-93ne.vercel.app/img/testimonials/05.jpg',
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem",
      author: "- Scarelet Jhon"
    },
    {
      avatar: 'https://react-landing-page-template-93ne.vercel.app/img/testimonials/06.jpg',
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem",
      author: "- Chris Evan"
    },
    {
      avatar: 'https://react-landing-page-template-93ne.vercel.app/img/testimonials/03.jpg',
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem",
      author: "- The Rock"
    }
  ];

export const Client = () => {
  return (
    <Box id='testimonials' textAlign="center" sx={{ padding: "2vw" }} mb={3} mt={3}>
      <Typography variant="h3" gutterBottom color="black" mb={3}>
        WHAT OUR CLIENTS SAY
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {ClientData.map((ele, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: 'transparent' }}>
              <Box sx={{ display: 'flex', alignItems: 'initial', padding: '20px' }}>
                <Avatar src={ele.avatar} sx={{ margin: '20px 0' }} />
                <Box sx={{ textAlign: 'initial', marginLeft: '20px' }}>
                  <Typography  variant="subtitle1" color="black" sx={{ marginTop: '10px' , fontStyle:'italic'}}>
                    {ele.text}
                  </Typography>
                  <Typography variant="h6" color="black">{ele.author}</Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
