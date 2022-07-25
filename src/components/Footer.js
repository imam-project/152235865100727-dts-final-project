import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/footerLogo.png'

const Footer = () => {
  return (
    <Box mt="8px" bgcolor="#F05454" sx={{ height:"200px", mt: '30px' }} >
      <Stack gap="10px" alignItems="center" px="40px" >
        <img src={Logo} alt="logo" width="100px" height="100px" />
      <Typography fontWeight="bold">
        &copy;DTS-PRO2022.REA2
      </Typography>
      <Typography fontWeight="bold">
        Bagas Imam Mahardika .W
      </Typography>

      </Stack>
    </Box>
  )
}

export default Footer