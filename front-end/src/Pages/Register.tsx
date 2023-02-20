import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import IUser from "../interfaces/IUser";
import { getToken, insertUser, setToken } from "../Services/request";

interface FormElements extends HTMLFormControlsCollection {
  inputName: HTMLInputElement;
  inputEmail: HTMLInputElement;
  inputPassword: HTMLInputElement;
}

interface RegisterForm extends HTMLFormElement {
  readonly elements: FormElements;
}

export default function Register() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   if (token) navigate('/wall')
  // }, [navigate])

  const registerBtn = async (event: React.FormEvent<RegisterForm>) => {
    event.preventDefault();
    const {
      inputEmail: { value: email },
      inputName: { value: username },
      inputPassword: { value: password },
    } = event?.currentTarget?.elements;

    const params: IUser = {
      username,
      email,
      password,
    }

    await insertUser(params);
    const { data: { token } } = await getToken(username, password);
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    setToken();
    navigate('/wall');
  }

  const guestBtn = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/wall');
  }

  return(
    <div>
      <div>
        <form onSubmit={ registerBtn }>
          <label htmlFor="inputName">
            <input
              type="text"
              placeholder="Type your user name"
              name="inputName"
              id="inputName"
              required
              minLength={ 6 }
            />
          </label>
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
            Sign up
          </button>
        </form>
          <div>
            <span>Already have an account?</span>
            <button
              type="button"
              onClick={ () => navigate('/login') }
            >
              Sign in
            </button>
            <button type="button" onClick={ guestBtn }>
              Enter as a guest
            </button>
          </div>
      </div>
    </div>
  )
}