import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const theme = createTheme();

export const Login = () => {

  const [inputs, setInputs] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  let navigate = useNavigate();

  const changeInput = (e) => {
    setInputs((prevState)=> ({
      ...prevState, [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleUser = async (e) => {
    if(e.keyCode === 13 || e.type === 'submit'){
      e.preventDefault();
      if(inputs.username.length > 3 && inputs.password.length > 4){
        const options = {
          method: 'POST',
          body: JSON.stringify({username: inputs.username, password: inputs.password}),
          headers:{
            'Content-Type': 'application/json'
          }
        }
        const response = await fetch('http://127.0.0.1:4500/api/v1/auth/signin', options);
        const data = await response.json();
        console.log(data);
        if(data){
          navigate('/home');
          alert('You are logged :)');
        }else{
          alert('Try it again')
        }
      }
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleUser} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              type="text" 
              onChange={changeInput}
              onKeyDown={handleUser}
              value={inputs.username || ''}
              minLength={3}
              maxLength={20}              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={inputs.password || ''}
              onChange={changeInput}
              minLength={4}
              maxLength={20}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
