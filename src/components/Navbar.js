import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/logo.png";

function Navbar() {
	return (
		<Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: "122px", xs: "40px" }, alignItems: "center", width:'100%', height: '70px'}} px="20px" backgroundColor="#F05454">
			<Link to="/">
				<img src={Logo} alt="logo" style={{ width: "48px", height: "48px", margin: "0 20px" }} />
			</Link>
			<Stack direction="row" gap="40px" fontSize="20px" alignItems="flex-end">
				<Link to="/" style={{ textDecoration: "none", color: "#121212", borderBottom: "3px solid #30475E" }}>
					Home
				</Link>
				<a href="#exercises" style={{ textDecoration: "none", color: "#121212" }}>
					Exercises
				</a>
			</Stack>
		</Stack>
	);
}

export default Navbar;
