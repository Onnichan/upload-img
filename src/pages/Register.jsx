import { useState } from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import profileDefault from '../assets/img/profile/default.png'
import {useNavigate} from 'react-router-dom';

const theme = createTheme()

export const Register = () => {
  const [preview, setPreview] = useState(profileDefault);
  const navigate = useNavigate();
  const [user, setUser] = useState({})

  const handleChangeUser = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))

    if (e.target.name === 'profile') {
      console.log(e.target.files)
      setPreview(window.URL.createObjectURL(e.target.files[0]))
      console.log(preview)
    }
    console.log('profile', user.profile)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    console.log('current', event.currentTarget)
    const data = new FormData(event.currentTarget)

    console.log('sendata', data)
    const options = {
      method: 'POST',
      body: data,
    }

    const response = await fetch(
      'http://127.0.0.1:4500/api/v1/auth/signup',
      options
    )
    const res = await response.json()
    console.log(res)
    if(res){
      navigate('/home');
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
          <img src={preview} alt="" width={150} />
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  id="firstName"
                  label="First Name"
                  onChange={handleChangeUser}
                  autoComplete="given-name"
                  autoFocus
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="lastName"
                  id="lastName"
                  label="Last Name"
                  onChange={handleChangeUser}
                  autoComplete="family-name"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="username"
                  id="username"
                  label="username"
                  onChange={handleChangeUser}
                  autoComplete="family-name"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  id="email"
                  label="Email Address"
                  onChange={handleChangeUser}
                  autoComplete="email"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  type="password"
                  id="password"
                  onChange={handleChangeUser}
                  label="Password"
                  autoComplete="new-password"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="profile"
                  type="file"
                  onChange={handleChangeUser}
                  id="profile"
                  required
                  fullWidth
                />
              </Grid>
            </Grid>
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
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
