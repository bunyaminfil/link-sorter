import { upVote, downVote } from "../../Utils/storage.util";
import "./linkItem.css";

const LinkItem = (props) => {
  const item = props.item;
  const onUpVote = (item) => {
    upVote(item);
    props.refreshLinks();
  };
  const onDownVote = (item) => {
    downVote(item);
    props.refreshLinks();
  };
  const onRemove = (url) => {
    props.removeLink(url);
    props.refreshLinks();
  };
  return (
    <div className="item">
      <div className="card">
        <button className="pointButton" type="button">
          <span className="pointNumber">{item.voteCount}</span>
          <span className="pointText">POINTS</span>
        </button>
        <div className="explain">
          <div className="title">
            <span>{item.title}</span>
          </div>
          <div className="link">
            <span>{item.link}</span>
          </div>
          <div className="upDownVote">
            <span className="upVote" onClick={() => onUpVote(item)}>
              ⬆ Up Vote
            </span>
            <span className="downVote" onClick={() => onDownVote(item)}>
              ⬇ Down Vote
            </span>
          </div>
        </div>
        <img
          className="xImage"
          src="x-button.png"
          alt="x-button"
          onClick={onRemove.bind(null, item.link)}
        ></img>
      </div>
    </div>
  );
};

export default LinkItem;
