import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../fetch/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import Navbar from '../components/Navbar'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const {id} = useParams();
  useEffect(() => {
        const fetchExercisesData = async () =>{
          const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
          const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
          window.scrollTo({top: 0, behavior: 'smooth'})

          const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
          setExerciseDetail(exerciseDetailData);

          const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
          setExerciseVideos(exerciseVideosData.contents)

          const targetMusclesExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
          setTargetMuscleExercises(targetMusclesExercisesData);


          const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
          setEquipmentExercises(equipmentExercisesData);

        }

        fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Navbar />
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />

    </Box>
  )
}

export default ExerciseDetail