import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export const Login = () => {

  const [inputs, setInputs] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  let navigate = useNavigate();

  const changeInput = (e) => {
    setInputs((prevState)=> ({
      ...prevState, [e.target.name]: e.target.value
    }))
  }

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
    <form className="login" onSubmit={handleUser}>
      <h3>Login</h3>
      <input 
        type="text" 
        placeholder='username' 
        name='username'
        onChange={changeInput}
        onKeyDown={handleUser}
        value={inputs.username || ''}
        minLength={3}
        maxLength={20}
        required
      />
      <input type="password" 
        placeholder='password'
        name='password'
        value={inputs.password || ''}
        onChange={changeInput}
        autoComplete="true"
        minLength={4}
        maxLength={20}
        required
      />
      <button type="submit">Sign in</button>
    </form>
  )
}
