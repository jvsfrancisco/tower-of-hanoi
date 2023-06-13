import "./../styles/index.scss";
import Disc from "../components/Disc";

function App() {
  return (
    <>
      <header>
        <h1>Towers of Hanoi</h1>
      </header>
      <main>
        <div className="game">
          <div className="tower">
          <Disc index={1} />
          <Disc index={2} />
          <Disc index={3}/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
