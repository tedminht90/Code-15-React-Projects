import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {

  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(0);
  

  const fetchJobs = async() =>{
    const resp = await fetch(url);
    const newJob = await resp.json();
    setJobs(newJob);
    setIsLoading(false);
  };
  
  useEffect(() =>{
    fetchJobs();
  }, []);

  

  if(isLoading){
    return(
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    );
  }

  const {company, dates, duties, title} = jobs[value];


  return <section className="section">
    <div className="title">
      <h2>expierence</h2>
      <div className="underline"></div>
    </div>
    <div className="jobs-center">
      {/* btn container */}
      <div className="btn-container">
        {
          jobs.map((item, index) =>{
            return <button 
                          key={item.id} 
                          onClick={()=>setValue(index)}
                          className={`job-btn ${index === value && 'active-btn'}`}
            >{item.company}</button>
          })
        }
      </div>
      {/* job info */}
      <article className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className='job-date'>{dates}</p>
        {duties.map((item, index)=> {
          return ( 
          <div key={index} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{item}</p>
          </div>
          );
        })}
      </article>
    </div>
  </section>
}

export default App
