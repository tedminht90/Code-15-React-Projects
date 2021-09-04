import { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";


const url = 'https://course-api.com/react-tours-project'

function App() {

  const [loading, setLoading] = useState(true); // true trả về loading, nếu false trả về tours
  const [tours, setTours] = useState([]);

  const removeTour = (id) =>{
    const newTours = tours.filter((tour)=> tour.id !== id);
    setTours(newTours);
  }


  const fetchTours = async() => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false)
      setTours(tours);
    } catch(error){
      setLoading(false);
      console.log(error);
    }
    
    
    //console.log(tours);
  }

  useEffect(()=> {
    fetchTours();
  },[]);

  if(loading){
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if(tours.length === 0){
    return <main>
      <div className="title">
        <h2>No tour left</h2>
        <button className="btn" onClick={(fetchTours)}>refresh</button>
      </div>
    </main>
  }
  return (
    <main>
       <Tours tours={tours} removeTour={removeTour}/> {/*chuyển removeTour sang Tours.js */}
    </main>
  );
}

export default App;
