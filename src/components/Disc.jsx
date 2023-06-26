import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/items";

const Disc = ({ towerIndex, index, size, isGameOver }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.DISK,
    item: { index, size },
    canDrag: () => {
        //só pode ser possivel pegar o disco se ele for o primeiro da torre
        const tower = document.querySelector(`.tower-${towerIndex}`);
        const discs = tower.querySelectorAll(".disc");
        const topDisc = discs[0];
        return topDisc && topDisc.classList.contains(`disc-${size}`);
      },
    collect: (monitor) => ({
      isDragging: monitor.isDragging() && !isGameOver ,
    }),
  });

  const styles = {
    opacity: isDragging ? 0 : 1,
    cursor: isDragging ? "grabbing" : "grab",
  };

  return (
    <div className={`disc disc-${size}`} style={{ ...styles }} ref={drag} />
  );
};

export default Disc;
