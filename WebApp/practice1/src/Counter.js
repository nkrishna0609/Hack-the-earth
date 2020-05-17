import React, {useState}  from 'react';
import './App.css';

function Counter(){
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const add1 = () => {
    setCount1(count1 + 1);
    setCount2(count2 + 1);
  }
  const add2 = () => {
    setCount3(count3 + 1);
    setCount1(count1 - 1);
  }

      return(
        <div className="part2">
          <h1>People Counter</h1>
          <h3>Number of People in Store</h3>
          <h3>{count1}</h3>
          <h3>Number of People Entered</h3>
          <h3>{count2}</h3>
          <h3>Number of People Exited</h3>
          <h3>{count3}</h3>
          <button onClick={add1}>Enter</button>
          <button onClick={add2}>Exit</button>
          
        </div>
      );
}

export default Counter;