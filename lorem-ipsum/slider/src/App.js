import React,{useState} from "react";
//import {FaQuoteRight} from "react-icons/fa";
//import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';
import './App.css';
import data from "./data";
function App() {
  const [count,setCount] = useState(0);
  const [text,setText]=useState([]);
  const handleSubmit=(e)=>{
      e.preventDefault();
      let amount  = parseInt(count);
      console.log( typeof amount)
      if(count<=0){
        amount =1;
      }
      if(count>=data.length){
        amount=9;
      }
      setText(data.slice(0,amount));

  }
  return (
<section>
  <h3>Tired Boring</h3>
  <form  className="lorem-form" onSubmit={handleSubmit}>
    <label htmlFor = "amount">
    Paragraphs: 
    </label>
    <input type="number" id='amount' value={count} onChange={(e)=>setCount(e.target.value)}/>
    <button type="submit" className="btn">Generer</button>
    
  </form>
  <article className="lorem-text">
  {text.map((item,index)=>{
    return <p key={index}>{item}</p>
  })}
  </article>
</section>

  );
}

export default App;
