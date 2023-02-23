import React from 'react';
import { useNavigate } from 'react-router-dom';
import { setToken, getToken } from '../Services/request';
import '../Styles/Login.css';

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

    const { username, password } = event?.currentTarget?.elements;

    try {
      const {
        data: { token },
      } = await getToken(username.value, password.value);
      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('username', username.value);
        setToken();
        navigate('/wall');
      }
    } catch (error) {
      console.log(error);
      alert('Bad Request: You must type valid credentials');
      username.value = '';
      password.value = '';
    }
  };

  return (
    <main className="main-login">
      <div className="div-inputs-login">
        <div>
          <form onSubmit={loginBtn}>
            <h2>Login</h2>
            <div className="inputbox">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" required />
            </div>
            <div className="inputbox">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" required />
            </div>
            <button type="submit" className="button">
              Sign in
            </button>
            <div>
              <p className="account">Do not have an account?</p>
              <button
                type="button"
                className="button"
                onClick={() => navigate('/')}
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
