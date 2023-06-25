import { useDrag } from 'react-dnd';
import { ItemTypes } from '../utils/items';


const Disc = ({ index, size, isGameOver}) => {
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.DISK,
        item: { index, size },
        collect: (monitor) => ({
            isDragging: isGameOver? false : monitor.isDragging(),
        }),
    });

      const styles = {
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        };

    return (
        <div className={`disc disc-${size}`} style={{...styles}} ref={drag}/>
    );
    }

export default Disc;
