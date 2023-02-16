import React from "react";
import { useNavigate } from 'react-router-dom';
import IUser from "../interfaces/IUser";
import { getToken, insertUser } from "../Services/request";

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

    const a = await insertUser(params)
    console.log(a);
    

    const data = getToken(username, password)
    console.log(data);
    // navigate('/wall');
  }

  return(
    <div>
      <div>
        <form onSubmit={registerBtn}>
          <label htmlFor="inputName">
            <input
              type="text"
              placeholder="Type your user name"
              name="inputName"
              id="inputName"
              required
              minLength={6}
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
            Register
          </button>
          {/* { boolean ? <></> : <span>Incorrect form.
              Remember that you have to use a valid email, a username with 3+ characters and a password
              with 6+ characters
            </span> } */}
        </form>
      </div>
    </div>
  )
}