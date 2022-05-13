import React, {useState} from 'react'

export const Login = () => {

  const [inputs, setInputs] = useState({});

  const changeInput = (e) => {
    setInputs((prevState)=> ({
      ...prevState, [e.target.name]: e.target.value
    }))
  }

  const handleUser = (e) => {
    if(e.keyCode === 13 || e.type === 'submit'){
      e.preventDefault();
      if(inputs.username.length > 3 && inputs.password.length > 4){
        alert('You are logged :)');
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
