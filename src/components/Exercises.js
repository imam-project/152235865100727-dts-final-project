import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../fetch/fetchData';
import ExerciseCard from './ExerciseCard';


const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercises = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercises - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise, indexOfLastExercises
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1000, behavior: 'smooth'})
  }

  useEffect(() => {
    const fetchExersicesData = async () =>{
      let exercisesData = [];

      if(bodyPart === 'all'){
        exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    }

      fetchExersicesData();
  },[bodyPart, setExercises])

  return (
    <Box id="exercises"
      sx={{mt: {lg: '110px'}}}
      mt='50px'
      p='20px'
    >
      <Typography variant="h3" mb="46px" fontFamily="Poppins">
        Results
      </Typography>
      <Stack direction="row" sx={{ gap: {lg: '110px', xs: '50px'}}}
      flexWrap='wrap' justifyContent='center'>
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
          {exercises.length > 9 && (
            <Pagination
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"

            />
          )}
      </Stack>
    </Box>
  )
}

export default Exercises