import React from 'react';
import './Popup.css'

const Popup = (props) => {
   return props.trigger ? (
      <div className="popup">
         <div className="popup_Inner">
            <button
               onClick={() => props.setTrigger(false)}
               className="close_Button">
               close
            </button>
            {props.children}
         </div>
      </div>
   ) : (
      ''
   );
};

export default Popup;
