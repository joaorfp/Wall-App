import React, { useEffect, useState } from "react";
import IMessage from "../interfaces/IMessage";
import Post from "../Components/Post";
import PostForm from "../Components/PostForm";
import Header from "../Components/Header";
import { getPosts } from "../Services/request";

// interface FormElements extends HTMLFormControlsCollection {
//   message: HTMLInputElement;
//   title: HTMLInputElement;
// }

// interface RegisterForm extends HTMLFormElement {
//   readonly elements: FormElements;
// }

export default function Wall() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await getPosts();
      setData(data)
    }
    getData();
  }, [data])

  return (
    <div>
      <Header />
      <PostForm />
      <div>
        { data && (
          data.map(({ title, message, id }: IMessage) => (
            <Post key={ id } title={ title } message={ message } />
          )
        )) }
      </div>
    </div>
  )
}
