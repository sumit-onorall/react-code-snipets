import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosDemo = () => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      const fetchPosts = () => {
         axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((posts) => setPosts(posts.data))
            .catch((err) => console.log(err));
      };

      fetchPosts();
   }, [posts]);

   const styles = {
      width: '300px',
      height: '250px',
      padding: '1rem',
      margin: '1rem',
      border: '1px solid black',
      borderRadius: '10px',
   };

   const containerStyles = {
      display: 'flex',
      flexWrap: 'wrap',
   };

   return (
      <div>
         <h2>Posts</h2>
         <div style={containerStyles}>
            {posts.map((post) => (
               <div key={post.id} style={styles}>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default AxiosDemo;
