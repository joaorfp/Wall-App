import React, { useEffect, useState } from 'react'
import { insertPost, setToken } from '../Services/request';
import useData from '../Hooks/useData';

interface FormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  message: HTMLInputElement;
}

interface RegisterForm extends HTMLFormElement {
  readonly elements: FormElements;
}

function PostForm() {
  const [auth, setAuth] = useState(false)
  const { getData } = useData();

  useEffect(() => {
    const owner = localStorage.getItem('username');
    if (owner) {
      setToken();
      setAuth(true);
    }
  }, [])

  const submitPost = async (event: React.FormEvent<RegisterForm>) => {
    event.preventDefault();
    const {
      title,
      message,
    } = event?.currentTarget?.elements;

    const owner = localStorage.getItem('username');
    owner && await insertPost(title.value, message.value, owner);
    getData();
  }

  return (
    <div>
      <div>
        { auth ? (
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
        ) : (
          <span>Sign up to write on the wall!</span>
        ) }
      </div>
    </div>
  )
}

export default PostForm;