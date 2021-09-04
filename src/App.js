import React from 'react';
import List from "./List";
import data from './data';

function App() {

  const [people, setPeople] = React.useState(data)
  
  return <main>
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      <List people={people} />
      <button onClick={() => setPeople([])}>Clear all</button>
    </section>
  </main>
}
export default App;
