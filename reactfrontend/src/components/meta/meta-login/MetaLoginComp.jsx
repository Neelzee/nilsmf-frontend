import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ApiRoot } from "../../utils/Utils"

export function isLoggedIn() {
    const sessionId = Cookies.get('sessionid');
    return !!sessionId; // Returns true if sessionId exists, false otherwise
}
  



export function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios
      .post(`${ApiRoot()}login/`, {
        email: email,
        password: password,
      })
      .then(response => {
        const sessionId = response.data.session_id;
        if (!!sessionId) {
          Cookies.set('sessionid', sessionId, { sameSite: 'Lax', secure: true });
          navigate('/meta');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h3> Login </h3>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('sessionid');
    navigate('/meta/login');
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}
