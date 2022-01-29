import React, { useState } from 'react';

import styles from './TagsInput.module.css';

const TagsInput = () => {
   const [tags, setTags] = useState(['coding', 'designing']);

   const removeTags = (indexToRemove) => {
      setTags([...tags.filter((_, index) => index !== indexToRemove)]);
   };
   const addTags = (event) => {
      if (event.target.value !== '') {
         setTags([...tags, event.target.value]);
         event.target.value = '';
      }
   };
   return (
      <div className={styles.tags_input}>
         <ul className={styles.tags}>
            {tags.map((tag, index) => (
               <li key={index} className={styles.tag}>
                  <span className={styles.tag_title}>{tag}</span>
                  <span
                     className={styles.tag_close_icon}
                     onClick={() => removeTags(index)}>
                     x
                  </span>
               </li>
            ))}
         </ul>
         <input
            type="text"
            onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)}
            placeholder="Press enter to add tags"
         />
      </div>
   );
};

export default TagsInput;