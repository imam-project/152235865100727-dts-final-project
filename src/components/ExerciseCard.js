import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
	return (
		<Link className="exercise-card" to={`/exercise/${exercise.id}`}>
			<img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
		<Stack direction='row'>
            <Button sx={{ml: '21px', color: '#ffff', background: '#F05454', fontSize: '14px', borderRadius: '20px', textTransform:'capitalize'}}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{ml: '21px', color: '#ffff', background: '#30475E', fontSize: '14px', borderRadius: '20px', textTransform:'capitalize'}}>
                {exercise.target}
            </Button>
        </Stack>
        <Typography ml="21px" mt="11px" pb="10px" color="#000" textTransform="capitalize" fontWeight="bold" fontSize="18px" sx={{ fontSize: { lg: '20px', xs: '20px' }  }} fontFamily="Poppins" >
            {exercise.name}
        </Typography>
        
        </Link>
	);
};

export default ExerciseCard;
