import "./CircleCursor.css";
import useMousePosition from '../../hooks/useMousePosition.tsx';

const CircleCursor = () => {
    const { x, y } = useMousePosition();
    return (
            <div
                style={{ left: `${x}px`, top: `${y}px` }}
                className="ring"
            ></div>
    );
};

export default CircleCursor;