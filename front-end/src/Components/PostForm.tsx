import React from 'react'
import { insertPost, setToken } from '../Services/request';

interface FormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  message: HTMLInputElement;
}

interface RegisterForm extends HTMLFormElement {
  readonly elements: FormElements;
}

function PostForm() {
  const submitPost = async (event: React.FormEvent<RegisterForm>) => {
    event.preventDefault();
    const {
      title,
      message,
    } = event?.currentTarget?.elements;

    const owner = localStorage.getItem('username');

    if (owner) {
      setToken();
      const dt = await insertPost(title.value, message.value, owner);
      console.log(dt);
    }

  }

  return (
    <div>
      <div>
        <form onSubmit={ submitPost }>
          <label htmlFor="title">
            <input
              type="text"
              placeholder="Type the title for your post"
              name="title"
              id="title"
              required
            />
          </label>
          <label htmlFor="message">
            <input
              type="text"
              placeholder="Type your message"
              name="message"
              id="message"
              required
            />
          </label>
          <button
            type='submit'
          >
            Submit Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default PostForm