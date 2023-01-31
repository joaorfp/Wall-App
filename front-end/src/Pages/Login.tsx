import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return(
    <div>
      <div>
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
          Login
        </button>
      </div>
    </div>
  )
}