import "./ReadMore.css";
// import { useState } from "react";

type ReadMoreProps = {
    onClick: () => void;
};

const ReadMore: React.FC<ReadMoreProps> = ({                                               onClick }) => {
// const ReadMore = ({onClick}) => {
    // const [isHovered, setIsHovered] = useState(false);
    //
    // const handleMouseEnter = () => {
    //     setIsHovered(true);
    // };
    // const handleMouseLeave = () => {
    //     setIsHovered(false);
    // };
    // console.log(children)

    return (
        // <button onClick={onClick}>
            <div className="read-more-btn" >
            {/*<div className={`read-more-btn ${isHovered ? 'hovered' : ''}`}*/}
            {/*onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>*/}
                <div className="outer-circle"></div>
                <button className="text-field" onClick={onClick}>
                    <div className="read-more">Read more</div>
                    <div className="inner-circle">
                        <div className="plus">
                            <div className="horizontal"></div>
                            <div className="vertical"></div>
                        </div>
                    </div>
                </button>


            </div>
        /*</button>*/
    );
};

export default ReadMore;