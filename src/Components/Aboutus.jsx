import React from 'react';
import { Box, Typography } from '@mui/material';

export const Aboutus = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: "25px", mt: '25px'}}>
        <Box>
            <img src="https://react-landing-page-template-93ne.vercel.app/img/about.jpg" alt="aboutus" />
        </Box>
        <Box sx={{ p:'5px', width: '585px', height: '388px'}}>
            <Typography variant='h4' sx={{ fontWeight: 'bold'}}>ABOUT US</Typography>
            <Typography component='p' sx={{ mt: '25px'}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quod nulla quibusdam? Reiciendis dolor alias facilis ut adipisci earum tenetur quis temporibus ducimus nihil consequatur cupiditate architecto nam voluptatum neque asperiores quo, cumque esse. Harum nulla natus debitis officiis. Natus eveniet hic, optio eligendi rem. lorem5
            </Typography>
            <Typography variant="h6" component='p' sx={{ mt:'55px'}}>Why Choose Us?</Typography>
            <Box sx={{ display: 'flex', p: '25px', gap: '125px'}}>
                <ul>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                </ul>
                <ul>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                </ul>
            </Box>
        </Box>
    </Box>
  )
}
