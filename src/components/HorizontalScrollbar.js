import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/arrow/right 3.png';
import LeftArrowIcon from '../assets/arrow/left.png';

import ExerciseCard from './ExerciseCard';


const LeftArrow = () => {
  const {scrollPrev} = useContext(VisibilityContext);

  return(
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="left-arrow"/>
    </Typography>

  )
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return(
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow"/>
    </Typography>
  )
}

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
	return (
		<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} mb="20px" >
			{data.map((item) => (
				<Box key={item.id || item} itemId={item.id || item} title={item.id || item} m="0 40px" >
					{isBodyParts ? <BodyPart item={item} bodyPart={bodyPart}
          setBodyPart={setBodyPart} /> : <ExerciseCard exercise={item}/>}
				</Box>
			))}
		</ScrollMenu>
	);
};

export default HorizontalScrollbar;
