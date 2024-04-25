import { Avatar, Box, CardContent, Grid, Typography } from '@mui/material'
import React from 'react';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import GTranslateRoundedIcon from '@mui/icons-material/GTranslateRounded';
import CloudDownloadRoundedIcon from '@mui/icons-material/CloudDownloadRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import PieChartIcon from '@mui/icons-material/PieChart';
import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded';

export const Services = () => {
  return (
    <Box sx={{background: 'linear-gradient(to right, #1976d2, #4b99f2)', border:'1px solid', width: '100%', height: '990px', mt:'75px'}}>
        <Box>
            <Typography variant='h2' sx={{ color: 'white', fontWeight: '400', textAlign: 'center', mt:'75px'}}>
                OUR SERVICES
            </Typography>
            <Typography sx={{ textAlign: 'center', mt: '25px', color: 'white'}}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum ut fugit ipsum. 
            </Typography>
            <Box id="services_box" sx={{ flexGrow: 1, textAlign:'center', width: '80%', m:'auto', mt: '25px'}}>
                <Grid container spacing={2}>
                    <Grid item md={4} xs={2}>
                        <CardContent sx={{ width: '300px', height: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Avatar className='avatar' sx={{ background: 'linear-gradient(to right, #1976d2, #4b99f2)', width: '100px', height: '100px', textAlign: 'center'}}>
                                <FacebookRoundedIcon sx={{ fontSize:'50px'}} />
                            </Avatar>
                            <Typography variant='h4' sx={{color: 'white', fontSize: '20px', mt: '30px'}}>
                                Lorem ipsum
                            </Typography>
                            <Typography variant="p" component="p" sx={{color: 'white', mt: '10px'}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, architecto?, Lorem ipsum
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item md={4} xs={2}>
                        <CardContent sx={{ width: '300px', height: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Avatar sx={{ background: 'linear-gradient(to right, #1976d2, #4b99f2)', width: '100px', height: '100px', textAlign: 'center'}}>
                                <ShoppingCartRoundedIcon sx={{ fontSize:'50px'}} />
                            </Avatar>
                            <Typography variant='h4' sx={{color: 'white', fontSize: '20px', mt: '30px'}}>
                                Lorem ipsum
                            </Typography>
                            <Typography variant="p" component="p" sx={{ color: 'white', mt: '10px'}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, architecto?, Lorem ipsum
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item md={4} xs={2}>
                        <CardContent sx={{ width: '300px', height: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Avatar className='avatar' sx={{ background: 'linear-gradient(to right, #1976d2, #4b99f2)', width: '100px', height: '100px', textAlign: 'center'}}>
                                <CloudDownloadRoundedIcon sx={{ fontSize:'50px'}} />
                            </Avatar>
                            <Typography variant='h4' sx={{ color: 'white', fontSize: '20px', mt: '30px'}}>
                                Lorem ipsum
                            </Typography>
                            <Typography variant="p" component="p" sx={{color: 'white', mt: '10px'}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, architecto?, Lorem ipsum
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item md={4} xs={2}>
                        <CardContent sx={{ width: '300px', height: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Avatar className='avatar' sx={{ background: 'linear-gradient(to right, #1976d2, #4b99f2)',  width: '100px', height: '100px', textAlign: 'center'}}>
                                <GTranslateRoundedIcon sx={{ fontSize:'50px'}} />
                            </Avatar>
                            <Typography variant='h4' sx={{ color: 'white', fontSize: '20px', mt: '30px'}}>
                                Lorem ipsum
                            </Typography>
                            <Typography variant="p" component="p" sx={{color: 'white',  mt: '10px'}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, architecto?, Lorem ipsum
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item md={4} xs={2}>
                        <CardContent sx={{ width: '300px', height: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Avatar className='avatar' sx={{ background: 'linear-gradient(to right, #1976d2, #4b99f2)',  width: '100px', height: '100px', textAlign: 'center'}}>
                                <PieChartIcon sx={{ fontSize:'50px'}} />
                            </Avatar>
                            <Typography variant='h4' sx={{ color: 'white', fontSize: '20px', mt: '30px'}}>
                                Lorem ipsum
                            </Typography>
                            <Typography variant="p" component="p" sx={{ color: 'white', mt: '10px'}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, architecto?, Lorem ipsum
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item md={4} xs={2}>
                        <CardContent sx={{ width: '300px', height: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Avatar className='avatar' sx={{ background: 'linear-gradient(to right, #1976d2, #4b99f2)',  width: '100px', height: '100px', textAlign: 'center'}}>
                                <AirplanemodeActiveRoundedIcon sx={{ fontSize:'50px'}} />
                            </Avatar>
                            <Typography variant='h4' sx={{color: 'white', fontSize: '20px', mt: '30px'}}>
                                Lorem ipsum
                            </Typography>
                            <Typography variant="p" component="p" sx={{ color: 'white', mt: '10px'}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, architecto?, Lorem ipsum
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
        </Box>
        </Box>
    </Box>
  )
}
