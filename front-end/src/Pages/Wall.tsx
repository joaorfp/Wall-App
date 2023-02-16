import React, { useEffect, useState } from "react";
import axios from 'axios';
import IMessage from "../interfaces/IMessage";
import Post from "../Components/Post";

interface FormElements extends HTMLFormControlsCollection {
  message: HTMLInputElement;
  title: HTMLInputElement;
}

interface RegisterForm extends HTMLFormElement {
  readonly elements: FormElements;
}

export default function Wall() {
  // const [data, setData] = useState([]);

  const submitMessage = async (event: React.FormEvent<RegisterForm>) => {
    // event.preventDefault();

    // const {
    //   title: { value: title },
    //   message: { value: message },
    // } = event?.currentTarget?.elements;

    // const params: IMessage = {
    //   title,
    //   message,
    //   ...
    // }    

    // try {
    //   const { data } = await insertPost(token, params)
    //   console.log(data);
    // } catch ({ response }) {
    //   console.log(response);
      
    // }

  };

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const datas = await getPosts();
  //       console.log(datas);
  //       // setData(datas)
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getData();
  // }, []);

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
      {/* { data.map(({ title, message }) => (
          <Post title={ title } message={ message } />
      )) } */}
    </div>
  )
}
