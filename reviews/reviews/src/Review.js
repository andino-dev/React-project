import React,{ useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import persons from './data';


const Review = () => {
    const [index,setIndex] = useState(0);
    const{name,job,image,text} =persons[index];

    const checkNumber = (number)=>{
        if(number > persons.length-1){
            return 0;
        }
        else if(number<0){
            return persons.length-1;
        }
         return number;
    }

    const nextPerson = ()=>{
        setIndex((index)=>{
            let newIndex = index +1 ;
            return checkNumber(newIndex);
        })
    }
    const prevPerson =()=>{
        setIndex((index)=>{
            let newIndex = index -1 ;
            return checkNumber(newIndex);
        })
    }
    const randomNumber = ()=>{
         let random  = Math.floor(Math.random()*persons.length);
         if(random===index){
             return  random = index +1 ;
         }
         setIndex(checkNumber(random));
    }
    return (
       <article>
          <div className="img-container">
              <img src={image} alt={name} className="person-img"></img>
              <span className='quote-icon'>
              <FaQuoteRight />
              </span>
          </div>
          <h4 className='author'>{name}</h4>
          <p className='job'>{job}</p>
          <p className='info'>{text}</p>
          <div className='button-container'>
            <button className="prev-btn" onClick={()=>prevPerson()}>
              <FaChevronLeft />
            </button>
            <button className='next-btn' onClick={nextPerson}>
              <FaChevronRight />
           </button>
          </div>
          <button className='random-btn' onClick={randomNumber}>
            Surprise me
          </button>
       </article>
       
    )
}

export default Review
