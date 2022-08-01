import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import icon1 from '../assets/DetailIcon/icon1.png';
import icon2 from '../assets/DetailIcon/icon2.png';
import icon4 from '../assets/DetailIcon/icon4.png';


const Detail = ({exerciseDetail}) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    const extraDetail = [
        {
            icon: icon2,
            name: bodyPart,
        },
        {
            icon: icon1,
            name: target,
        },
        {
            icon: icon4,
            name: equipment,
        },
    ]

  return (
    <Stack gap="60px" sx={{flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center'}} key="">
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <Stack sx={{ gap: {lg: '35px', xs: '20px'}}}>
            <Typography variant="h2" fontFamily="Poppins" fontWeight="bolder">
                {name}
            </Typography>
            <Typography variant="h6" fontFamily="Poppins">
                Make your body Healty and Strong,
                by doing <span style={{color: '#F05454'}}>{name}</span> {` `}, will  make your <span style={{color: '#F05454'}}>{target}</span> good. And get the Strong and Healty body.
            </Typography>
            {extraDetail.map((item) => (
                <Stack key={item.name} direction="row" gap="24px" alignItems="center" >
                    <Button sx={{background: '#F05454', width:"50px", height: '50px'}}>
                        <img src={item.icon} style={{width: '40px', height: '40px'}} alt={bodyPart}/>
                    </Button>
                    <Typography textTransform="capitalize" variant="h5" fontFamily="Poppins" fontWeight="bold">
                        {item.name}
                    </Typography>

                </Stack>
            ))}
        </Stack>

    </Stack>
  )
}

export default Detail