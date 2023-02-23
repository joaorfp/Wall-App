import React, { useEffect, useState } from 'react';
import { insertPost, setToken } from '../Services/request';
import useData from '../Hooks/useData';
import '../Styles/PostForm.css';

interface FormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  message: HTMLInputElement;
}

interface RegisterForm extends HTMLFormElement {
  readonly elements: FormElements;
}

function PostForm() {
  const [auth, setAuth] = useState(false);
  const { getData } = useData();

  useEffect(() => {
    const owner = localStorage.getItem('username');
    if (owner) {
      setToken();
      setAuth(true);
    }
  }, []);

  const submitPost = async (event: React.FormEvent<RegisterForm>) => {
    event.preventDefault();
    const { title, message } = event?.currentTarget?.elements;

    const owner = localStorage.getItem('username');
    owner && (await insertPost(title.value, message.value, owner));
    title.value = '';
    message.value = '';
    getData();
  };

  return (
    <div className="main-div-wall">
      <div className="div-input-form">
        {auth ? (
          <form onSubmit={submitPost}>
            <div className="input-form">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                maxLength={50}
                name="title"
                id="title"
                required
              />
            </div>
            <div className="input-form">
              <label htmlFor="message">Message</label>
              <input
                type="text"
                maxLength={80}
                name="message"
                id="message"
                required
              />
            </div>
            <button type="submit" className="button-submit">
              Submit Post
            </button>
          </form>
        ) : (
          <span className="warning">Sign up to write on the wall!</span>
        )}
      </div>
    </div>
  );
}

export default PostForm;
