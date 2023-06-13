// import { useDrag } from 'react-dnd';
// import { ItemTypes, DiskHeights } from '../utils/items';

const Disc = ({ index }) => {
    // eslint-disable-next-line no-unused-vars
    // const [{ isDragging }, drag] = useDrag({
    //     item: { type: ItemTypes.DISK, size },
    //     collect: (monitor) => ({
    //     isDragging: !!monitor.isDragging(),
    //     }),
    // });
    
    return (
        //TODO BONUS: Make the disc draggable 
        <div className={`disc disc-${index}`}/>
    );
    }

export default Disc;
