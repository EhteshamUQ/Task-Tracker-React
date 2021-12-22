import { PropTypes } from "prop-types";
const Button = (props) => {
  return (
    <button
      style={{ backgroundColor: props.color }}
      className="btn"
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

Button.defaultProps = {
  color: "green",
  title: "Button",
};

Button.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Button;
