import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import bg from "../assets/hero.jpg";

const Hero = () => {
	return (
		<Box sx={{ display: "flex",  alignItems:"center", justifyContent: 'center', backgroundImage: `url(${bg})`, height: '800px', backgroundSize: '1500px 800px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', }}  className="hero" >
			<Stack alignItems="center" width="550px" justifyContent="center" ml="25px">
				<Typography color="#30475E" fontWeight="600" fontSize="26px">
					Let's Move
				</Typography>
				<Typography fontSize="22px" fontWeight={700} fontFamily="Poppins" lineHeight="35px" color='#F05454'
				sx={{ fontSize: { lg: '40px', xs: '40px' } }} mb="23px" mt="30px"
				
				>
					Get the best Exercise Here!
				</Typography>
				<Stack mt="15px">
					<Button
						href="#exercises"
                        className="hero-btn"
						sx={{
                            backgroundColor: "#30475E",
                            color: "#ffff",
                            textTransform: "none",
                            textAlign: 'center',
                            width: { lg: "170px", xs: "80px" },
                            height: "55px",
                            fontSize: { lg: "15px", xs: "10px" },
                        }}
					>
						Explore Exercises
					</Button>
				</Stack>
			</Stack>
		</Box>
	);
};

export default Hero;
