import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import IUser from '../interfaces/IUser';

export default function Login() {
  const navigate = useNavigate();

  const loginBtn = () => {
    
  }

  return(
    <div>
      <div>
      <form onSubmit={loginBtn}>
          <label htmlFor="inputEmail">
            <input
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              placeholder="Type your best email"
              name="inputEmail"
              id="inputEmail"
              required
            />
          </label>
          <label htmlFor="inputPassword">
            <input
              type="password"
              placeholder="Type your password"
              name="inputPassword"
              id="inputPassword"
              required
            />
          </label>
          <button
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}