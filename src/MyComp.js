import React, { useContext } from 'react';
import { ThemeContext } from './App';

const MyComp = () => {
   const darkTheme = useContext(ThemeContext);

   const styles = {
      backgroundColor: '#333',
      color: '#fff',
   };

   return (
      <div style={darkTheme ? styles : ''}>
         <h2>my comp</h2>
      </div>
   );
};

export default MyComp;
