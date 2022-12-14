import "./card.css";

const Card = (props) => {
  const { className } = props;
  return <div className={`${className} card`}>{props.children}</div>;
};

export default Card;
