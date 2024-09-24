import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { auth, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  useEffect(() => {
    if (auth.isLoggedIn) navigate('/home');
  }, [auth.isLoggedIn, navigate]);

  const handleLogin = () => {
    if (email && password) {
      login(email, password);
      navigate('/home');
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <Box component="form" sx={{display: "flex", flexDirection: "column", gap:2, alignItems: "center"}}>
      <Typography variant="h4" sx={{ my: 4 }}>Login</Typography>
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <Typography color="error">{error}</Typography>}
      <Button onClick={handleLogin} variant="contained" sx={{width: "100%"}}>Submit</Button>
    </Box>
  );
};

export default Login;
