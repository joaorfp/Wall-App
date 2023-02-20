import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Header() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    const storedName = localStorage.getItem('username')
    if (storedName) {
      setUsername(storedName)
    } else {
      setUsername('Guest');
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/');
  }

  return (
    <header>
      <h1>{`Hey, ${username}`}</h1>
      <button
        type="button"
        onClick={ logout }
      >Sign out</button>
    </header>
  )
}

export default Header;