import React,{useState} from 'react';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';

const Question = (props)=>{
   console.log(props);
    const [showInfo,setShowInfo] = useState(false)
    return (
    <article className='question'>
    <header>
    <h4>{props.title}</h4>
    <button  className="btn" onClick={()=>setShowInfo(!showInfo)}>{showInfo ? <AiOutlineMinus />:<AiOutlinePlus />}</button>
    </header>
    {showInfo && props.info}
    </article>
    )
}
export default Question;