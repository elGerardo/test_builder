import { ProgressBar } from "react-bootstrap";

const Items = ({ data }) => {
  const progress = data.total * 10;
  const content = (
    <div className="p-3 shadow">
      <div className="d-flex justify-content-between">
        <p>Title</p>
        <p>Status</p>
      </div>
      <div className="d-flex align-items-center">
        <ProgressBar className="w-75" now={progress} label={`${progress}%`} />
        <span className="w-25 text-center">{data.total}/10</span>
      </div>
    </div>
  );

  return content;
};

export default Items;
