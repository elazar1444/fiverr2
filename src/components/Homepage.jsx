import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Homepage(props) {
  const nav = useNavigate();

  const handleSignInClick = () => {
    nav('/signIn');
  };

  const handleSignUpClick = () => {
    nav('/signUp');
  };

  return (
    <div>
      <h1>Welcome to Fiverr!</h1>
      <button onClick={handleSignInClick}>Sign In</button>
      <button onClick={handleSignUpClick}>Sign Up</button>
    </div>
  );
}
