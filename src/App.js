import './App.css';
import { useState, useEffect } from 'react';
import Popup from './components/Popup/Popup';

function App() {
   const [btnPopup, setBtnPopup] = useState(false);
   const [timedPopup, setTimedPopup] = useState(false);

   useEffect(() => {
      setTimeout(() => {
         setTimedPopup(true);
      }, 3000);
   }, [])
   

   return (
      <div className="App">
         <main>
            <h1>React Popups</h1>
            <button onClick={() => setBtnPopup(true)}>Open Popup</button>

            <Popup trigger={btnPopup} setTrigger={setBtnPopup}>
               <h3>My popup</h3>
               <p>This is a popup component.</p>
            </Popup>

            <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
               <h3>Timed popup</h3>
               <p>
                  This is a timed popup component. This pops up after 3 seconds.
               </p>
            </Popup>
         </main>
      </div>
   );
}

export default App;
