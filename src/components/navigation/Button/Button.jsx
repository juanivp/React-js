import React from 'react'
import "./button.css";


function Button({ text, btnClass, onTouch, children }) {

  return (
    <button onClick={onTouch}  className={btnClass}>
      {text || children}
    </button>
  );
}

export default Button;