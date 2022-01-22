import React,{useState} from 'react';
import Values from 'values.js';
import SingleColor from './SingleColor';
import './App.css';

function App() {
  const [color,setColor] = useState('');
  const [error,setError] = useState(false);
  const [list,setList]= useState(new Values('#fd7000').all(10));
 
  const handleSubmit=(e)=>{
     e.preventDefault();
     try{
       let colors = new Values(color).all(15);
       setList(colors);
       
     }catch(error){
       setError(true);
       console.log(error);
     }
     
  }
  return (
<div>
  <section className="container">
   <h3>Color Generator</h3>
    <form onSubmit={handleSubmit}>
      <input
      type="text" 
      value={color} 
      onChange={(e)=>setColor(e.target.value)}
      placeholder='#fd700'
      className={`${error?'error':null}`}
      />
      <button  className='btn' type="submit">Submit</button>
    </form> 
  </section>
  <section className="colors">
     {list.map((color,index)=>{
       return <SingleColor {...color} index={index} hexColor = {color.hex} key={index} />
     })}
  </section>
 
</div>
  );
}

export default App;
