import React from "react";

import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
	return (
		<Box sx={{ mt: { lg: "10px", xs: "0px" } }}>
			<Typography sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }} fontWeight={700} color="#000" mb="33px">
				Similar <span style={{ color: "#FF2625", textTransform: "capitalize" }}>Target Muscle</span> exercises
			</Typography>
			<Stack direction="row" sx={{ p: 0, position: "relative" }}>
				{targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
			</Stack>
			<Typography sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px", mt: { lg: "20px", xs: "60px" } }} fontWeight={700} color="#000" mb="33px">
				Similar <span style={{ color: "#FF2625", textTransform: "capitalize" }}>Equipment</span> exercises
			</Typography>
			<Stack direction="row" sx={{ p: 0, position: "relative" }}>
				{equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
			</Stack>
		</Box>
	);
};

export default SimilarExercises;
