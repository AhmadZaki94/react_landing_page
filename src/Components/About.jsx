import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const listData = [
    {
        text: 'lorem Ipsum',
        icon: <CheckCircleOutlineIcon sx={{ color: 'green'}} />
    },
    {
        text: 'lorem Ipsum',
        icon: <CheckCircleOutlineIcon sx={{ color: 'green'}} />
    },
    {
        text: 'lorem Ipsum',
        icon: <CheckCircleOutlineIcon sx={{ color: 'green'}} />
    },
    {
        text: 'lorem Ipsum',
        icon: <CheckCircleOutlineIcon sx={{ color: 'green'}} />
    }
]

export const About = () => {
  return (
    <Box sx={{ p: '15px', width: '100%'}}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={{ textAlign: 'center'}}>
                <img src="https://react-landing-page-template-93ne.vercel.app/img/about.jpg" alt="aboutus" />
            </Grid>
            <Grid item xs={12} md={6} sx={{ margin: 'auto'}}>
                <Typography variant='h4' sx={{ fontWeight: 'bold'}}>ABOUT US</Typography>
                <Typography component='p' sx={{ mt: '25px'}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quod nulla quibusdam? Reiciendis dolor alias facilis ut adipisci earum tenetur quis temporibus ducimus nihil consequatur cupiditate architecto nam voluptatum neque asperiores quo, cumque esse. Harum nulla natus debitis officiis. Natus eveniet hic, optio eligendi rem. lorem5
                </Typography>
                <Typography variant="h6" component='p' sx={{ mt:'25px', mb: '15px'}}>Why Choose Us?</Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'column', lg: 'row'}}}>
                    <Box>
                        {listData.map((data, i) => (
                            <List sx={{ mb: '-25px'}}>
                                <ListItem>
                                    <ListItemIcon>
                                        {data.icon}
                                    </ListItemIcon>
                                <ListItemText primary={data.text} />
                            </ListItem>
                            </List>
                        ))}
                    </Box>
                    <Box>
                        {listData.map((data, i) => (
                            <List sx={{ mb: '-25px'}}>
                                <ListItem>
                                    <ListItemIcon>
                                        {data.icon}
                                    </ListItemIcon>
                                <ListItemText primary={data.text} />
                            </ListItem>
                            </List>
                        ))}
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}
