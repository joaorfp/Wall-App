import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Header.css';
import tsl1 from '../images/tsl1.png';

function Header() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem('username');
    if (storedName) {
      setUsername(storedName);
    } else {
      setUsername('Guest');
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/');
  };

  return (
    <header className="header">
      <div className="div-header">
        <h1 className="hey-user">{`Hey, ${username}`}</h1>
        <button type="button" className="btn-logout" onClick={logout}>
          Sign out
        </button>
        <img src={tsl1} alt="logo tsl" className="logo" />
      </div>
    </header>
  );
}

export default Header;
