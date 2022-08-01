import React from 'react';
import { Box, Stack, Typography } from '@mui/material';


import Logo from '../assets/footerLogo.png'

const Footer = () => {


  return (
    <Box mt="8px" bgcolor="#30475E" sx={{ height:"200px", mt: '30px' }} >
      <Stack gap="10px" alignItems="center" px="40px" >
       
        <img src={Logo} alt="logo" width="100px" height="100px" />

      <Typography fontWeight="bold" color="#ffff">
        &copy;DTS-PRO2022.REA2
      </Typography>
      <Typography fontWeight="bold" color="#ffff">
        Bagas Imam Mahardika .W
      </Typography>

      </Stack>
    </Box>
  )
}

export default Footer