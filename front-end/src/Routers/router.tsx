import { Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Wall from '../Pages/Wall';

export default function Router() {
  return (
    <Routes>
      <Route path="/register" element={ <Register /> } />
      <Route path="/wall" element={ <Wall /> } />
      <Route path="/" element={ <Login /> } />
    </Routes>
  );
};