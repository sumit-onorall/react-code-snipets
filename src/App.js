import { useState, createContext } from 'react';
import './App.css';
import AxiosDemo from './components/AxiosDemo';
import AxiosPostDemo from './components/AxiosPostDemo';
import TagsInput from './components/TagsInput/TagsInput';
import VideoCompMain from './components/VideoCompMain/VideoCompMain';

function App() {
   return (
      <div className="App">
         <h2>App</h2>
         <TagsInput />
      </div>
   );
}

export default App;
