import React, { useState } from "react";
import axios from 'axios';
import IMessage from "../interfaces/IMessage";

interface FormElements extends HTMLFormControlsCollection {
  message: HTMLInputElement;
  title: HTMLInputElement;
}

interface RegisterForm extends HTMLFormElement {
  readonly elements: FormElements;
}

export default function Wall() {
  const submitMessage = async (event: React.FormEvent<RegisterForm>) => {
    event.preventDefault();

    const {
      title: { value: title },
      message: { value: message },
    } = event?.currentTarget?.elements;

    const params: IMessage = {
      title,
      message,
    }    

    try {
      const { data } = await axios.post('http://127.0.0.1:8000/wall/', params)
      console.log(data);
    } catch ({ response }) {
      console.log(response);
      
    }

  };

  return (
    <div>
      <form onSubmit={ submitMessage }>
      <input
          type="text"
          placeholder="Type the title for your message"
          name="title"
          id="title"
        />
        <input
          type="text"
          placeholder="Type your message"
          name="message"
          id="message"
        />
        <button
          type="submit"
        >
          Post message
        </button>
      </form>
    </div>
  )
}
