//implementing the tower component with the logic of the tower
import Disc from "./Disc";
import { useDrop } from "react-dnd";
import { ItemTypes } from '../utils/items';

function Tower({discs, ondrop, isGameOver}) {

    const [{canDrop, isOver}, drop] = useDrop({
        accept: ItemTypes.DISK,
        canDrop: (item) => {
            const disc = discs[discs.length - 1];
            return !disc || item.index < disc;
        },
        drop: (item) => ondrop(item.size),
        collect: (monitor) => ({
            canDrop: monitor.canDrop(),
            isOver: monitor.isOver(),
        }),
    });

    const styles = {
        backgroundColor: canDrop ? "lightgreen" : "white",
    };

  return (
    <div className="tower" ref={drop}>
      <div className="tower-stem" style={{...styles}} />
      {discs.slice().reverse().map((disc, index)=> (
        <Disc key={index} index={index+1} size={disc} isGameOver={isGameOver} />
      ))}
    </div>
  );
}

export default Tower;
