import React, { useState } from 'react';
import './signIn.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../../router/keys';

function SignIn() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const {user} = useSelector(state => state.ecom);
  console.log(user);

  const validUser = (user,email,password) => {
    if(user.email === email && user.password){
      return true;
    }
    else{
      return false;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validUser(user,email,password)){
      navigate(HOME);
    }
    else{
      alert("Invalid Credential.....");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <form className="sign-in-form" onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <div className="form-group">
            <label htmlFor="username">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
