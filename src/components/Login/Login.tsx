import { FC, useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import styles from './Login.module.scss'; // Import the SCSS module
import { useNavigate } from 'react-router';

const backgrounds = ["url('/assets/images/Underoath-Denver-Concert-2023.jpg')"];

const LoginPage: FC = () => {
	const [backgroundImage, setBackgroundImage] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		const dayIndex = new Date().getDay(); // 0 (Sunday) to 6 (Saturday)
		setBackgroundImage(backgrounds[dayIndex]);
	}, []);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		// Prevent the default form submission behavior
		event.preventDefault();

		// Example form data handling
		const formData = new FormData(event.currentTarget);
		console.log({
			email: formData.get('email'),
			password: formData.get('password'),
		});

		// Navigate to the dashboard
		navigate('/dashboard');
	};

	return (
		<div
			className={styles.login_container}
			style={{ backgroundImage }}>
				<Paper className={styles.login_card}>
					<Typography
						variant='h4'
						gutterBottom>
						🎸 JamForge Login
					</Typography>
					<Typography
						variant='body1'
						gutterBottom>
						Connect and create music like never before.
					</Typography>
					<Box
						component='form'
            onSubmit={onSubmit}
						noValidate>
						<TextField
							fullWidth
							variant='outlined'
							label='Email'
							margin='normal'
						/>
						<TextField
							fullWidth
							variant='outlined'
							label='Password'
							type='password'
							margin='normal'
						/>
						<Button
							fullWidth
							className={styles.login_button}
							variant='contained'
							type='submit'>
							Log In
						</Button>
					</Box>
				</Paper>
		</div>
	);
};

export default LoginPage;
