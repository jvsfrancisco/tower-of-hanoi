import Disc from "./Disc";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../utils/items";

function Tower({ towerIndex, discs, ondrop, isGameOver }) {

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.DISK,
    canDrop: (item) => {
      const disc = discs[discs.length - 1];
      return !discs.length || (item.size < disc);
    },
    drop: (item) => ondrop(item.size),
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
  });


  const styles = {
    backgroundColor: canDrop ? "lightgreen" : "lightgray",
  };

  return (
    <div className={`tower tower-${towerIndex}`} ref={drop}>
      <div
        className={`tower-stem ${canDrop ? "animate" : ""}`}
        style={{ ...styles }}
      />
      {discs.slice().reverse().map((disc, index) => (
        <Disc
          towerIndex={towerIndex}
          key={index}
          index={index + 1}
          size={disc}
          isGameOver={isGameOver}
        />
      ))}
    </div>
  );
}

export default Tower;