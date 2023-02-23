import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { updatePostById } from '../Services/request';
import '../Styles/EditForm.css';

interface FormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  message: HTMLInputElement;
}

interface RegisterForm extends HTMLFormElement {
  readonly elements: FormElements;
}

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [msg, setMsg] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const msgStorage = localStorage.getItem('message');
    const titleStorage = localStorage.getItem('title');

    titleStorage && setTitle(titleStorage);
    msgStorage && setMsg(msgStorage);
  }, []);

  const editPost = async (event: React.FormEvent<RegisterForm>) => {
    event.preventDefault();
    const { title, message } = event?.currentTarget?.elements;

    id && (await updatePostById(title.value, message.value, +id));
    localStorage.removeItem('message');
    localStorage.removeItem('title');
    navigate('/wall');
  };

  return (
    <div className="main-div-edit">
      <div className="previous">
        <h3>{`Title: ${title}`}</h3>
        <h4>{`Message: ${msg}`}</h4>
      </div>
      <div className="div-input-form">
        <form id="id" onSubmit={editPost}>
          <div className="input-form">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" required />
          </div>
          <div className="input-form">
            <label htmlFor="message">Message</label>
            <input type="text" name="message" id="message" required />
          </div>
          <button type="submit" className="btn-edit">
            Edit Message
          </button>
        </form>
      </div>
    </div>
  );
}
