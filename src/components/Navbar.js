import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/logo.png";
import UserLog from "./UserLog";

function Navbar() {
	
	return (
		<Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: "122px", xs: "40px" }, alignItems: "center", width:'100%', height: '70px'}} px="20px" backgroundColor="#30475E">
			<Link to="/">
				<img src={Logo} alt="logo" style={{ width: "48px", height: "48px", margin: "0 20px" }} />
			</Link>
			<Stack direction="row" gap="40px" fontSize="20px"
			alignItems="flex-end">
				<Link to="/" style={{ textDecoration: "none", color: "#ffff", borderBottom: "3px solid #F05454" }}>
					Home
				</Link>
				<a href="#exercises" style={{ textDecoration: "none", color: "#ffff" }}>
					Exercises
				</a>
				<UserLog/>
			</Stack>
		</Stack>
	);
}

export default Navbar;
