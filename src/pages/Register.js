import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Paper } from "@mui/material";
import bg from "../assets/bg.jpg";

import { auth } from '../auth/firebase';

const Register = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
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
						width: "600px",
						opacity: 0.9
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" color="#fff">
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                sx={{ backgroundColor: "#ffff", border: 'none', borderRadius: '10px'}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                sx={{ backgroundColor: "#ffff" , borderRadius: '10px'  }}
                            />
                        </Grid>
                    </Grid>
                    <Typography color='red'>{errorMessage}</Typography>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to="/login" style={{ color: '#ffff'}}>
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
        </Paper>
    );
}

export default Register;
