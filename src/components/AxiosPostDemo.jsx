import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AxiosPostDemo = () => {
   const [post, setPost] = useState({});
   const [inputData, setInputData] = useState({
      userId: 0,
      title: '',
      body: '',
   });
   const { userId, title, body } = inputData;

   const onChangeHandler = (e) => {
      setInputData({ ...inputData, [e.target.name]: e.target.value });
   };

   const submitHandler = (e) => {
      e.preventDefault();

      axios
         .post('https://jsonplaceholder.typicode.com/posts', {
            title,
            body,
            userId: 99,
         })
         .then((res) => setPost(res.data));
   };

   return (
      <div>
         <h2>Axios Post Demo</h2>
         <form onSubmit={submitHandler}>
            <div className="input-control">
               <label htmlFor="title">Title</label>
               <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={onChangeHandler}
               />
            </div>
            <div className="input-control">
               <label htmlFor="body">Body</label>
               <textarea
                  name="body"
                  id="body"
                  value={body}
                  onChange={onChangeHandler}
                  cols="30"
                  rows="10"></textarea>
            </div>
            <button type="submit">Submit</button>
         </form>
         {
            <div key={post.id}>
               <h2>{post.title}</h2>
               <p>{post.body}</p>
            </div>
         }
      </div>
   );
};

export default AxiosPostDemo;
