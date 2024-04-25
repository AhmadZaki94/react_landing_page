import { Avatar, Box, CardContent, Grid, Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import GroupsIcon from '@mui/icons-material/Groups';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import React from 'react';

const featureData = [
    {
        title: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, architecto?, Lorem ipsum',
        icon: <MailOutlineIcon sx={{ fontSize:'50px'}} />
    },
    {
        title: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, architecto?, Lorem ipsum',
        icon: <VolumeDownIcon sx={{ fontSize:'50px'}} />
    },
    {
        title: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, architecto?, Lorem ipsum',
        icon: <GroupsIcon sx={{ fontSize:'50px'}} />
    },
    {
        title: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, architecto?, Lorem ipsum',
        icon: <AutoFixHighIcon sx={{ fontSize:'50px'}} />
    }
]

export const Features = () => {
    
  return (
    <Box sx={{ background: '#d9d9e0'}}>
        <Typography variant='h2' sx={{ textAlign: 'center', fontWeight: 'bolder'}}>Features</Typography>
        <Box sx={{ mt: '50px', padding: '15px', textAlign: 'center'}}>
            <Grid container spacing={2}>
                {featureData.map((elem, ind) => (
                    <Grid key={ind} item xs={12} sm={6} md={3}>
                        {/* <Card sx={{ border: 'none'}}> */}
                            <CardContent sx={{ background: '#d9d9e0', width: '100%', height: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Avatar className='avatar' sx={{ background: 'linear-gradient(to right, #1976d2, #4b99f2)', width: '100px', height: '100px', textAlign: 'center'}}>
                                    {elem.icon}
                                </Avatar>
                                <Typography variant='h4' sx={{ fontSize: '20px', mt: '30px'}}>
                                    {elem.title}
                                </Typography>
                                <Typography variant="p" component="p" sx={{ mt: '10px'}}>
                                    {elem.text}
                                </Typography>
                            </CardContent>
                        {/* </Card> */}
                    </Grid>
                ))}
            </Grid>
            {/* <CardContent sx={{ width: '300px', height: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Avatar className='avatar' sx={{ background: 'linear-gradient(to right, #1976d2, #4b99f2)', width: '100px', height: '100px', textAlign: 'center'}}>
                    <MailOutlineIcon sx={{ fontSize:'50px'}} />
                </Avatar>
                <Typography variant='h4' sx={{ fontSize: '20px', mt: '30px'}}>
                    Lorem ipsum
                </Typography>
                <Typography variant="p" component="p" sx={{ mt: '10px'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, architecto?, Lorem ipsum
                </Typography>
            </CardContent>
            <CardContent sx={{ width: '300px', height: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Avatar sx={{ background: 'linear-gradient(to right, #1976d2, #4b99f2)', width: '100px', height: '100px', textAlign: 'center'}}>
                    <VolumeDownIcon sx={{ fontSize:'50px'}} />
                </Avatar>
                <Typography variant='h4' sx={{ fontSize: '20px', mt: '30px'}}>
                    Lorem ipsum
                </Typography>
                <Typography variant="p" component="p" sx={{ mt: '10px'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, architecto?, Lorem ipsum
                </Typography>
            </CardContent>
            <CardContent sx={{ width: '300px', height: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Avatar className='avatar' sx={{ background: 'linear-gradient(to right, #1976d2, #4b99f2)', width: '100px', height: '100px', textAlign: 'center'}}>
                    <GroupsIcon sx={{ fontSize:'50px'}} />
                </Avatar>
                <Typography variant='h4' sx={{ fontSize: '20px', mt: '30px'}}>
                    Lorem ipsum
                </Typography>
                <Typography variant="p" component="p" sx={{ mt: '10px'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, architecto?, Lorem ipsum
                </Typography>
            </CardContent>
            <CardContent sx={{ width: '300px', height: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Avatar className='avatar' sx={{ background: 'linear-gradient(to right, #1976d2, #4b99f2)',  width: '100px', height: '100px', textAlign: 'center'}}>
                    <AutoFixHighIcon sx={{ fontSize:'50px'}} />
                </Avatar>
                <Typography variant='h4' sx={{ fontSize: '20px', mt: '30px'}}>
                    Lorem ipsum
                </Typography>
                <Typography variant="p" component="p" sx={{ mt: '10px'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, architecto?, Lorem ipsum
                </Typography>
            </CardContent> */}
        </Box>
    </Box>
  )
}
