import React, { useEffect } from 'react';
import IMessage from '../interfaces/IMessage';
import Post from '../Components/Post';
import PostForm from '../Components/PostForm';
import Header from '../Components/Header';
import useData from '../Hooks/useData';
import '../Styles/Wall.css';

export default function Wall() {
  const storage = localStorage.getItem('username');
  const { data, getData } = useData();

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="wall">
      <Header />
      <PostForm />
      <div className="posts-div">
        {data &&
          data.map(({ title, message, id, owner }: IMessage) => (
            <Post
              key={id}
              title={title}
              message={message}
              isOwner={storage === owner}
              id={id}
            />
          ))}
      </div>
    </div>
  );
}
