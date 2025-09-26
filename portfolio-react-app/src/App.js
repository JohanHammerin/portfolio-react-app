import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Johan Hammerin</h1>

        <section>
          <h2>Om mig:</h2>
          <p>Jag gillar programmering och vandring</p>
        </section>

        <section>
          <h2>Projekt:</h2>
          <p>
            It och säkerhet
            <br></br>
            <a href="https://github.com/JohanHammerin/it-info">Github repo</a>
          </p>

          <p>
            Agil projektmetodik
            <br></br>
            <a href="https://github.com/JohanHammerin/agilprojektmetodik">
              Github repo
            </a>
          </p>
        </section>

        <section>
          <h2>Tekniska färdigheter:</h2>
          <p>
            Java, Spring Boot, MySQL, MongoDB, HTML, CSS, JavaScript,TypeScript,
            PHP, Arduino C/C++, React, Angular
          </p>
        </section>
      </header>
    </div>
  );
}

export default App;
