import { useDrag } from 'react-dnd';
import { ItemTypes } from '../utils/items';

const Disc = ({ size }) => {
    // eslint-disable-next-line no-unused-vars
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.DISK, size },
        collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
        }),
    });
    
    return (
        <div className="disc" ref={drag} style={{ width: `${size * 20}px` }} />
    );
    }

export default Disc;
