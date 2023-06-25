import Game from "./../components/Game.jsx";
import "./../styles/index.scss";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Game />
      </DndProvider>
    </>
  );
}

export default App;