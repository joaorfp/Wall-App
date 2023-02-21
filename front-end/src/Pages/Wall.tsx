import React, { useEffect } from "react";
import IMessage from "../interfaces/IMessage";
import Post from "../Components/Post";
import PostForm from "../Components/PostForm";
import Header from "../Components/Header";
import useData from "../Hooks/useData";

export default function Wall() {
  const storage = localStorage.getItem('username');
  const { data, getData } = useData();

  useEffect(() => {
    getData();
    // This warning is being disabled because useEffect should only be called on component mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <PostForm />
      <div>
        { data && (
          data.map(({ title, message, id, owner }: IMessage) => (
            <Post key={ id } title={ title } message={ message } isOwner={ storage === owner } id={ id } />
          )
        )) }
      </div>
    </div>
  )
}
