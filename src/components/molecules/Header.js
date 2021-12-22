import PropTypes from "prop-types";
import Button from "../atoms/Button";

const Header = (props) => {
  
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button title= {props.showAddTask ? 'Hide' : 'Add'} color="red" onClick={props.setShowAddTask} />
    </header>
  );
};

//Default Props
// Header.defaultProps = {
//     title : 'hello'
// }

Header.propTypes = {
  title: PropTypes.string, // PropTypes.number.isREquired // to make it compulsory.
};

export default Header;
