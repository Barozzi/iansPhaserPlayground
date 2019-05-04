import React from 'react';

const Button = (props) => {
  return (
    <button key={props.id} id={props.id} className={props.className} onClick={props.onClick}>{props.text}</button>
  );
}

export default Button;
