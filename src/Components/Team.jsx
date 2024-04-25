import React from 'react';
import { Typography, Box, Grid, Card, Avatar } from '@mui/material';


export const Team = () => {
  const iconColor = "black";
  const imgstyles = {
    width: '100%',
    height: '30vh',
    objectFit: 'contain',
    borderRadius: 0
  };

  const teamMembers = [
    {
      img: 'https://react-landing-page-template-93ne.vercel.app/img/team/01.jpg',
      name: "Jhon Doe",
      description: "Lorem ipsum dolor sit amet."
    },
    {
      img: 'https://react-landing-page-template-93ne.vercel.app/img/team/02.jpg',
      name: "Mike Doe",
      description: "Lorem ipsum dolor sit amet."
    },
    {
      img: 'https://react-landing-page-template-93ne.vercel.app/img/team/03.jpg',
      name: "Jane Doe",
      description: "Lorem ipsum dolor sit amet consectetur."
    },
    {
      img: 'https://react-landing-page-template-93ne.vercel.app/img/team/04.jpg',
      name: "Karen Doe",
      description: "Lorem ipsum dolor sit."
    }
  ];

  return (
    <Box id='team' textAlign="center" sx={{ boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px", padding: "2vw" }} >
      <Typography variant="h4" gutterBottom color={iconColor}>
        MEET THE TEAM
      </Typography>
      <Typography variant="body1" gutterBottom color={iconColor}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum accusantium doloribus?
      </Typography>
      <Grid container spacing={3} justifyContent="center" marginTop={4}>
        {teamMembers.map((member, index) => (
          <Grid key={index} item xs={6} sm={3}>
            <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
              <Avatar width="200px" height="200px"  src={member.img} alt={member.name} sx={{ ...imgstyles ,marginBottom:2}} className="centered-avatar" />
              <Box>
                <Typography mb={1} variant="subtitle1" color="black">{member.name}</Typography>
                <Typography variant="body2" color="black">{member.description}</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}