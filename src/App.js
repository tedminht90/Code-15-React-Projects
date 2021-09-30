import Navbar from "./Navbar";

function App() {
  return (
    <main id="home">
      <Navbar />
      <section className="home">
        <h1>Home</h1>
      </section>
      <section className="about" id="about">
        <h1>About</h1>
      </section>
      <section className="projects" id="projects">
        <h1>Projects</h1>
      </section>
      <section className="contact" id="contact">
        <h1>Contact</h1>
      </section>
      <section className="rest"></section>
    </main>
  );
}

export default App;
