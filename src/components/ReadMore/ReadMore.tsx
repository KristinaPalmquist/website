import "./ReadMore.css";

type ReadMoreProps = {
  onClick: () => void;
};

const ReadMore: React.FC<ReadMoreProps> = ({onClick}) => {

  return (
    <div className="read-more-btn">
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
  );
};

export default ReadMore;