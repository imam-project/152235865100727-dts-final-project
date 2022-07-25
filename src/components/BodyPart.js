import React from 'react';
import { Stack, Typography } from '@mui/material';

import icon from '../assets/icon2.png';




const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className='bodyPart-card'
        sx={{
            borderTop: bodyPart === item ? '4px solid #30475E' : '',
            backgroundColor: '#ffff',
            borderBottomLeftRadius: '20px',
            width: '270px',
            height: '280px',
            cursor: 'pointer',
            gap: '47px',
        }}
        onClick={() => {
            setBodyPart(item);
            window.scrollTo({top: 1000, behavior: 'smooth'})
        }}
    >
        <img src={icon} alt="icon" style={{
            width: '40px', height: '40px',
        }}/>
        <Typography fontSize='24px' fontWeight="bold" color='#30475E' textTransform="capitalize">
            {item}
        </Typography>


    </Stack>
  )
}

export default BodyPart