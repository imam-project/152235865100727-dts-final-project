import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { signInWithEmailAndPassword } from "firebase/auth";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/bg.jpg";

import { auth } from "../auth/firebase";

const Login = () => {
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = React.useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const email = data.get("email");
		const password = data.get("password");

		try {
			await signInWithEmailAndPassword(auth, email, password);
			navigate("/");
		} catch (error) {
			setErrorMessage(error.message);
		}
	};
	const styles = {
		paperContainer: {
			backgroundImage: `url(${bg})`,
		},
	};

	return (
		<Paper style={styles.paperContainer} sx={{ justifyContent: "center", alignItems: "center" }}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					height: "1080px",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						backgroundColor: "#30475E",
						borderRadius: "15px",
						height: "500px",
						width: "700px",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
						<TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus sx={{ backgroundColor: "#ffff" }} />
						<TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" sx={{ backgroundColor: "#ffff" }} />
						<Typography color="red">{errorMessage}</Typography>
						<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
							Sign In
						</Button>
						<Grid container>
							<Grid item>
								<Link to="/register">Don't have an account? Sign Up"</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Box>
		</Paper>
	);
};

export default Login;
