import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../fetch/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";



const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
	const [search, setSearch] = useState("");

	const [bodyParts, setBodyParts] = useState([]);

	useEffect(() => {
		const fetchExersicesData = async () => {
			const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions);

			setBodyParts(["all", ...bodyPartsData]);
		};

		fetchExersicesData();
	}, []);

	const handleSearch = async () => {
		if (search) {
			const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
			window.scrollTo({top: 1000, behavior: 'smooth'})

			const searchedExercises = exercisesData.filter(
				(exercise) => exercise.name.toLowerCase().includes(search) || exercise.target.toLowerCase().includes(search) || exercise.equipment.toLowerCase().includes(search) || exercise.bodyPart.toLowerCase().includes(search)
			);

			setSearch("");
			setExercises(searchedExercises);
		}
	};

	return (
		<Stack alignItems="center" mt="30px" justifyContent="center" p="20px">
			<Typography fontWeight={700} sx={{ fontSize: { lg: "45px", xs: "30px" } }} mb="50px" textAlign="center">
				Here's Some Exercise for You
			</Typography>
			<Box position="relative" mb="75px">
				<TextField
					sx={{
						input: { fontWeight: "700", border: "none", borderRadius: "5px" },
						width: { lg: "800px", xs: "350px" },
						backgroundColor: "#ffff",
						borderRadius: "40px",
						// ml:'-200px'
					}}
					height="75px"
					value={search}
					onChange={(e) => setSearch(e.target.value.toLowerCase())}
					placeholder="Search Exercises"
					type="text"
				/>
				<Button
					className="search-btn"
					sx={{
						backgroundColor: "#30475E",
						color: "#ffff",
						textTransform: "none",
						width: { lg: "170px", xs: "80px" },
						height: "55px",
						fontSize: { lg: "20px", xs: "12px" },
						position: "absolute",
						right: "0",
					}}
					onClick={handleSearch}
				>
					search
				</Button>
			</Box>
			<Box sx={{position: 'relative', width: '100%', p:'20px'}}>
                <HorizontalScrollbar data={bodyParts}
				bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
            </Box>
		</Stack>
	);
};

export default SearchExercises;
