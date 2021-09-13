import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [color, setColor] = useState('');
  const [error, setError] = useState(false); //để bắt lỗi nếu nhập mầu sai hoặc không nhập mầu
  const [lists, setLists] = useState(new Values('#f15025').all(10));

  const handleSubmit =(e) =>{
    e.preventDefault();
    // console.log('hello')
    try{
      let colors = new Values(color).all(10);
      setLists(colors)
      //console.log(colors);
    } catch(error){
      setError(true);
      console.log(error);
    }
    
  }

  return (
    <>
  <section className="container">
    <h3>color generator</h3>
    <form onSubmit={handleSubmit}>
      <input type="text" 
              value={color}
              placeholder="#f15025" 
              className={`${error ? 'error':null }`}
              onChange={(e) => setColor(e.target.value)} />
      <button className="btn" type="submit">
        submit
      </button>
    </form>
  </section>
  <section className="colors">
    {lists.map((color, index)=>{
      // console.log(color);
      return  <SingleColor key={index} 
                            {...color} 
                            index={index} 
                            hexColor={color.hex} />
    } )}
  </section>
  </>
  );
}

export default App
