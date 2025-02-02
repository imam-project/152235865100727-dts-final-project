import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({exerciseVideos, name}) => {
    if (!exerciseVideos.length) return <Loader />;
  return (
    <Box sx={{marginTop: { lg: '200px', xs: '20px'},  }} p="15px" >
       <Typography variant="h3" mb="35px" fontWeight="bold" sx= {{ fontSize: {xs: '32px'}}}>
           <span style={{color: '#F05454', textTransform: 'capitalize'}}>{name}</span> exercise videos
        </Typography>
        <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center'
        sx={{
            flexDirection: {lg: 'row'},
            gap: { lg: '110px', xs: '0'}
        }}
        >
            {exerciseVideos?.slice(0, 4)?.map((item, index) => (
              <a key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
              >
                <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                <Box>
                    <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000" fontFamily="Poppins">
                        {item.video.title}
                    </Typography>
                    <Typography fontSize="14px" color="#000" fontFamily="Poppins">
                        {item.video.channelName}
                    </Typography>
                </Box>
              </a>  
            ))}
        </Stack>

    </Box>
  )
}

export default ExerciseVideos