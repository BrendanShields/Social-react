import React from 'react';
const rand = () => { return Math.floor(Math.random() * 30)}
const person = (props) => {
  return (
    <div>
    <p onClick={props.click}>I am {props.name}! I am {props.age} years old {props.children} </p>
    </div>
)
}

export default person
