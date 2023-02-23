import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EditPost from '../Components/EditPost';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Wall from '../Pages/Wall';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/wall" element={<Wall />} />
      <Route path="/login" element={<Login />} />
      <Route path="/wall/:id" element={<EditPost />} />
    </Routes>
  );
}
