import React, { useState } from "react";


export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return(
    <div>
      <div>
        <input
          type="text"
          value={ username }
          onChange={ (e: React.FormEvent<HTMLInputElement>) => setUsername(e.currentTarget.value) }
        />
        <input
          type="email"
          value={ email }
          onChange={ (e: React.FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value) }
        />
        <input
          type="password"
          value={ password }
          onChange={ (e: React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value) }
        />
        <button
          type="button"
        >
          Register
        </button>
      </div>
    </div>
  )
}