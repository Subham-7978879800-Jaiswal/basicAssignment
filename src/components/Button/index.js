import "./style.css";

const Button = (props) => {
  const { className, iconComponent } = props;
  return (
    <>
      <button className={`${className} button`}>
        {iconComponent}
        {props.children}
      </button>
    </>
  );
};

export default Button;
