import React,{useState,useEffect} from "react";
import {FaQuoteRight} from "react-icons/fa";
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';
import './App.css';
import data from "./data";
function App() {
   const [people] = useState(data);
   const [index,setIndex] = useState(0);
   useEffect(()=>{
      const lastIndex = people.length -1 ;
      const firstIndex = 0;
      if(index<0){
        setIndex(lastIndex);
      }
      if(index>people.length-1){
        setIndex(firstIndex);
      }
   },[index,people])
   useEffect(()=>{
     let slider = setInterval(()=>{
        setIndex(index+1);
      },3000);
      console.log(index);
      return ()=>clearInterval(slider);
   },[index])
  return (
       <section className="section">
          <div className="title">
           <h2>
             <span>/</span>review
           </h2>
          </div>
          <div className="section-center">
           {people.map((person,personIndex)=>{
            const{image,name,title,quote} = person;
            let position = "nextSlide";
            if(index===personIndex){
              position = "activeSlide";
            }
            if(personIndex === index-1 || (index ===0 && personIndex === people.length-1)){
              position  = "lastSlide";
            }
             return(
               <article className={position}>
                 <img  className="person-img"src={image} alt={title}></img>
                 <h4>{name}</h4>
                 <p className="title">{title}</p>
                 <p className="info">{quote}</p>
                 <FaQuoteRight className="icons" />
               </article>
             )
           })}
            <button className="prev" onClick={()=>setIndex(index-1)}>
                 <FiChevronLeft />
            </button>
            <button className="next" onClick={()=> setIndex(index+1)}>
                 <FiChevronRight/>
            </button>
          </div>
       </section>
  );
}

export default App;
