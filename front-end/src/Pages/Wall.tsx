import React, { useState } from "react";

export default function Wall() {
  const [post, setPost] = useState('');
  const [postBool, setPostBool] = useState(true);
  const [msg, setMsg] = useState('');

  const submitMessage = () => {
    setPostBool(false);
    setPost('');
    setMsg(post);
  };

  return (
    <div>
      <input
        type="text"
        value={ post }
        onChange={ (e: React.FormEvent<HTMLInputElement>) => setPost(e.currentTarget.value) }
      />
      <button
        type="button"
        onClick={ submitMessage }
      >
        Post message
      </button>
      { postBool ? <></> : (
        <div>{ msg }</div>
      ) }
    </div>
  )
}
