import { FC, useState, useEffect } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import styles from "./Login.module.scss"; // Import the SCSS module

const backgrounds = ["url('/assets/images/Underoath-Denver-Concert-2023.jpg')"];

const LoginPage: FC = () => {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const dayIndex = new Date().getDay(); // 0 (Sunday) to 6 (Saturday)
    setBackgroundImage(backgrounds[dayIndex]);
  }, []);

  return (
    <div className={styles.login_container} style={{ backgroundImage }}>
      <Paper className={styles.login_card}>
        <Typography variant="h4" gutterBottom>
          🎸 JamForge Login
        </Typography>
        <Typography variant="body1" gutterBottom>
          Connect and create music like never before.
        </Typography>
        <Box component="form" noValidate>
          <TextField
            fullWidth
            variant="outlined"
            label="Email"
            margin="normal"
            InputProps={{ style: { color: "#fff" } }}
            InputLabelProps={{ style: { color: "#ccc" } }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Password"
            type="password"
            margin="normal"
            InputProps={{ style: { color: "#fff" } }}
            InputLabelProps={{ style: { color: "#ccc" } }}
          />
          <Button
            fullWidth
            className={styles.login_button}
            variant="contained"
            type="submit"
          >
            Log In
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default LoginPage;
