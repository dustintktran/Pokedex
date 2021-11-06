import { useState } from 'react';
import $ from 'jquery';

const Register = () => {

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  let starredPassword = '';
  for(var i = 0; i < password.length; i++) {
    starredPassword +='*';
  }

  const handleRegister = () => {
    $.post('/api/register', {username:username,password:password}).then(item => {
      console.log('register: ', item);
    })
    setUsername('');
    setPassword('');
  }

  return (
    <div>
      New user?
      <div>Username  <input onChange={event => setUsername(event.target.value)} value={username}></input></div>
      <div>Password  <input onChange={event => setPassword(event.target.value)} value={starredPassword}></input></div>
      <button onClick={handleRegister}>Register</button>
    </div>
  )
}

export default Register;