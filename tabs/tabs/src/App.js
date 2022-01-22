import React,{useState,useEffect} from 'react';
import {FaAngleDoubleRight} from 'react-icons/fa';
import './App.css';
import jobsResponse from './data'
function App() {
  const [loading,setLoading] = useState(true);
  const [jobs,setJobs] = useState([]);
  const [value,setValue] = useState(0);

  const fetchJobs = async() =>{
     const initJobs =  jobsResponse;
     setJobs(initJobs);
     setLoading(false);
  }
  useEffect(()=>{
     fetchJobs();
  }, []);

  if(loading){
    return(
      <div>
      <h1>Loading...</h1>
      </div>
    )


  }
  const{company,dates,duties,title}  = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className='job-center'>
        <div className='btn-container'>
         {jobs.map((item,index)=>{
          return(
            <button  className = {`job-btn ${index===value && "active-btn"}`}onClick={()=>setValue(index)}>
              {item.company}
            </button>
          )
          })}
        </div>
      </div>
      <div className='job-info'>
         <h3>{title}</h3>
         <h4>{company}</h4>
         <p> {dates}s</p>
         {duties.map((item,index)=>{
            return(
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item}</p>
              </div>
            ) 
         })}
      </div> 
    </section>
  );
}

export default App;
