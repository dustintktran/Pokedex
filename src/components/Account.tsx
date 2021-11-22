import { useEffect, useState } from 'react';
import $ from 'jquery';

const Account = (props: {isLoggedIn:boolean, handleLogin:(username:string, password:string)=>Promise<void>}) => { //props: handleLogin, isLoggedIn

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ visibleNode, setVisibleNode ] = useState(0); //0: Login, 1: Register, 2: LoggedIn
  let starredPassword = '';
  for(var i = 0; i < password.length; i++) {
    starredPassword +='*';
  }

  useEffect(() => {
    if(props.isLoggedIn) {
      setVisibleNode(2);
    }
  }, [])

  const handleRegister = () => {
    $.post('/api/register', {username:username,password:password}).then(item => {
      console.log('register: ', item);
    })
    setUsername('');
    setPassword('');
  }

  return (
    <div className="account-outer">
      {visibleNode == 0 && <div className="login-outer">
        Welcome Back!
        <div>Username  <input onChange={event => setUsername(event.target.value)} value={username}></input></div>
        <div>Password  <input onChange={event => setPassword(event.target.value)} value={starredPassword}></input></div>
        <button onClick={() => {
          props.handleLogin(username, password)
          setUsername('');
          setPassword('');
        }}>Login</button>
        <div> Don't have an account? Register here! <button onClick={() => setVisibleNode(1)}> Register</button></div>
      </div>}
      {visibleNode == 1 && <div className="register-outer">
        Register Here!
        <div>Username  <input onChange={event => setUsername(event.target.value)} value={username}></input></div>
        <div>Password  <input onChange={event => setPassword(event.target.value)} value={starredPassword}></input></div>
        <button onClick={handleRegister}>Register</button>
        <div> Have an account already? Login here! <button onClick={() => setVisibleNode(0)}> Login</button></div>
      </div>}
      {visibleNode == 2 && <div className="logged-in-outer">
        You are logged in! Yippee!
      </div>}
    </div>
  )

}

export default Account;