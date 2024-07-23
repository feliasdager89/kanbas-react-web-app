import React from 'react'

const subtract = (a: number, b: number) => {
    return a - b;
  };
  

const ArrowFunctions = () => {

  const threeMinusOne = subtract(3, 1);
  console.log(threeMinusOne);


  return (
    <div id="wd-arrow-functions">
      <h4>New ES6 arrow functions</h4>
      threeMinusOne = {threeMinusOne}   <br />
      subtract(3, 1) = {subtract(3, 1)} <hr />
    </div>

  )
}

export default ArrowFunctions
