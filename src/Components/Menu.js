import React from 'react';
import Color from "./Color";

/* Add any imports you think you might need here! */
const Menu = ({ click }) => {
  return (
    <div className="colorOptions">
      <Color color="red" handleClick={click}></Color>
      <Color color="pink" handleClick={click}></Color>
      <Color color="blue" handleClick={click}></Color>
      <Color color="green" handleClick={click}></Color>
    </div>
  );
};

export default Menu;