import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import { Outlet } from "react-router-dom";
import PrivateComponent from "./auth/PrivateComponent";

function App() {
	return (
		<Box width="100%" sx={{ width: { xl: "100%" } }} m="auto">
			<Navbar />
			<Outlet/>
			<Routes>
				<Route path="/" element={
				<PrivateComponent>
					<Home />
				</PrivateComponent>
				} />
				<Route path="/exercise/:id" element={
				<PrivateComponent>
					<ExerciseDetail />
				</PrivateComponent>
				} />
				<Route path="login" element ={
				<PrivateComponent loginOnly={false}>
					<Login/>
				</PrivateComponent>
				} />
				<Route path="register" element ={
				<Register/>} />
			</Routes>
			<Footer />
		</Box>
	);
}

export default App;
