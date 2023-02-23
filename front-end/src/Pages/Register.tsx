import React from 'react';
import { useNavigate } from 'react-router-dom';
import IUser from '../interfaces/IUser';
import { getToken, insertUser, setToken } from '../Services/request';
import '../Styles/Register.css';

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
    };

    await insertUser(params);
    const {
      data: { token },
    } = await getToken(username, password);
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    setToken();
    navigate('/wall');
  };

  const guestBtn = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/wall');
  };

  return (
    <main className="main-login">
      <div className="div-inputs-register">
        <div>
          <form onSubmit={registerBtn}>
            <h2>Register</h2>
            <div className="inputbox">
              <label htmlFor="inputName">Username</label>
              <input
                type="text"
                name="inputName"
                id="inputName"
                required
                minLength={6}
              />
            </div>
            <div className="inputbox">
              <label htmlFor="inputEmail">Email</label>
              <input
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                name="inputEmail"
                id="inputEmail"
                required
              />
            </div>
            <div className="inputbox">
              <label htmlFor="inputPassword">Password</label>
              <input
                type="password"
                name="inputPassword"
                id="inputPassword"
                required
              />
            </div>
            <button type="submit" className="button">
              Sign up
            </button>
          </form>
          <div>
            <p className="account">Already have an account?</p>
            <button
              type="button"
              className="button"
              onClick={() => navigate('/login')}
            >
              Sign in
            </button>
            <button type="button" onClick={guestBtn} className="button-guest">
              Enter as a guest
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
