import React from 'react';
import { useNavigate } from 'react-router-dom';
import IMessage from '../interfaces/IMessage';
import { deletePostById } from '../Services/request';
import '../Styles/Post.css';
import useData from '../Hooks/useData';

export default function Post({ title, message, isOwner, id }: IMessage) {
  const navigate = useNavigate();
  const { getData } = useData();

  return (
    <div className="post-div">
      <div className="data-message">
        <div className="bluediv" />
        <div className="box-data">
          <h4>Title:</h4>
          <h5>{title}</h5>
        </div>
        <br />
        <div className="box-data">
          <h4>Message:</h4>
          <h5>{message}</h5>
        </div>
      </div>
      {isOwner ? (
        <footer className="div-buttons">
          <button
            type="button"
            className="button-edit"
            onClick={() => {
              navigate(`/wall/${id}`);
              localStorage.setItem('message', message);
              localStorage.setItem('title', title);
            }}
          >
            Edit post
          </button>
          <button
            type="button"
            className="button-delete"
            onClick={async () => {
              id && (await deletePostById(id));
              getData();
            }}
          >
            Delete
          </button>
        </footer>
      ) : null}
    </div>
  );
}
