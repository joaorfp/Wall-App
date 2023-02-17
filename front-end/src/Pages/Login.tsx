import React from 'react';
import { useNavigate } from 'react-router-dom';
import { setToken, getToken } from '../Services/request';

interface FormElements extends HTMLFormControlsCollection {
  username: HTMLInputElement;
  password: HTMLInputElement;
}

interface RegisterForm extends HTMLFormElement {
  readonly elements: FormElements;
}

export default function Login() {
  const navigate = useNavigate();
  const loginBtn = async (event: React.FormEvent<RegisterForm>) => {
    event.preventDefault();

    const {
      username,
      password,
    } = event?.currentTarget?.elements;

    try {
      const { data: { token }} = await getToken(username.value, password.value)
      if (token) {
        localStorage.setItem('token', token)
        localStorage.setItem('username', username.value)
        setToken()
        navigate('/wall');
      }      
    } catch (error) {
      console.log(error);
      alert('Bad Request: You must type valid credentials');
    }
  }

  return(
    <div>
      <div>
      <form onSubmit={ loginBtn }>
          <label htmlFor="username">
            <input
              type="text"
              placeholder="Type your best username"
              name="username"
              id="username"
              required
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              placeholder="Type your password"
              name="password"
              id="password"
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