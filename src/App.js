import { useState, createContext } from 'react';
import './App.css';
import MyComp from './MyComp';
export const ThemeContext = createContext();

function App() {
   const [darkTheme, setDarkTheme] = useState(true);

   const toggleTheme = () => {
      setDarkTheme((prev) => !prev);
   };

   return (
      <ThemeContext.Provider value={darkTheme}>
         <div className="App">
            <MyComp />
            <button onClick={toggleTheme}>Toggle Theme</button>
         </div>
      </ThemeContext.Provider>
   );
}

export default App;
