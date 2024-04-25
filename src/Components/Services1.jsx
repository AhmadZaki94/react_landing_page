import { Avatar, Box, CardContent, Grid, Typography } from '@mui/material'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import GTranslateRoundedIcon from '@mui/icons-material/GTranslateRounded';
import CloudDownloadRoundedIcon from '@mui/icons-material/CloudDownloadRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import PieChartIcon from '@mui/icons-material/PieChart';
import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded';

const data = [
    {
        icon: <FacebookRoundedIcon sx={{ fontSize:'50px'}} />,
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, architecto?, Lorem ipsum'
    },
    {
        icon: <ShoppingCartRoundedIcon sx={{ fontSize:'50px'}} />,
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, architecto?, Lorem ipsum'
    },
    {
        icon: <GTranslateRoundedIcon sx={{ fontSize:'50px'}} />,
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, architecto?, Lorem ipsum'
    },
    {
        icon: <CloudDownloadRoundedIcon sx={{ fontSize:'50px'}} />,
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, architecto?, Lorem ipsum'
    },
    {
        icon: <PieChartIcon sx={{ fontSize:'50px'}} />,
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, architecto?, Lorem ipsum'
    },
    {
        icon: <AirplanemodeActiveRoundedIcon sx={{ fontSize:'50px'}} />,
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, architecto?, Lorem ipsum'
    },
]

export const Services1 = () => {
  return (
    <Box sx={{ background: 'linear-gradient(to right, #1976d2, #4b99f2)'}}>
        <Typography variant='h2' sx={{ color: 'white', fontWeight: '400', textAlign: 'center', mt:'25px'}}>
            OUR SERVICES
        </Typography>
        <Typography sx={{ textAlign: 'center', mt: '15px', color: 'white'}}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum ut fugit ipsum. 
        </Typography>
        <Box sx={{ flexGrow: 1, textAlign:'center', width: '80%', m:'auto', mt: '25px'}}>
            <Grid container spacing={2}>
                {data.map((el,ind) => (
                    <Grid key={ind} item xs={12} sm={6} md={4}>
                         <CardContent sx={{ width: '100%', height: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Avatar className='avatar' sx={{ background: 'linear-gradient(to right, #1976d2, #4b99f2)', width: '100px', height: '100px', textAlign: 'center'}}>
                                {el.icon}
                            </Avatar>
                            <Typography variant='h4' sx={{color: 'white', fontSize: '20px', mt: '30px'}}>
                                {el.title}
                            </Typography>
                            <Typography variant="p" component="p" sx={{color: 'white', mt: '10px'}}>
                                {el.text}
                            </Typography>
                        </CardContent>
                    </Grid>
                ))}
            </Grid>
        </Box>
    </Box>
  )
}
