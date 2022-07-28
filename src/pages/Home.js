import React, { useState } from "react";
import { Box } from "@mui/material";
import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";


const Home = () => {
	const [bodyPart, setBodyPart] = useState("all");
	const [exercises, setExercises] = useState([]);


	return (
		<Box>
			<Navbar/>
			<Hero />
			<SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
			<Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
		</Box>
	);
};

export default Home;
