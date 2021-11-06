import { useState } from 'react';
import $ from 'jquery';

const Login = ( props:{ loggedIn:boolean }) => {

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  let currentUser = localStorage.getItem('username');
  let starredPassword = '';
  for(var i = 0; i < password.length; i++) {
    starredPassword +='*';
  }

  const handleLogin = () => {
    $.post('/api/login', {username:username,password:password}).then(item => {
      if(item) {
        localStorage.setItem('username', username);
        console.log('login successful');
      } else {
        console.log('login failed');
      }
    })
    setUsername('');
    setPassword('');
  }

  const handleLogout = () => {
    localStorage.setItem('username', '');
    setUsername('');
    setPassword('');
  }

  return (
      <div>
      Login here!
      <div>Username  <input onChange={event => setUsername(event.target.value)} value={username}></input></div>
      <div>Password  <input onChange={event => setPassword(event.target.value)} value={starredPassword}></input></div>
      <button onClick={handleLogin}>Login</button>
    </div>
    
    
  )
}

export default Login;