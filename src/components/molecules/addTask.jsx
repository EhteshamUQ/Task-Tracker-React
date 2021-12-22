import { useState } from "react";
const AddTask = ({ onAdd }) => {
  // Adding State variables for the form inputs , when they change , these variables will change as well.
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [remainder, setRemainder] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please Add Task Name");
    }
    if (!day) {
      alert("Please add Day & Time");
    }
    onAdd({text , day , remainder});
    setText('');
    setDay('');
    setRemainder(false);
  };

  return (
    <form className="add-form" onSubmit = {onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day and Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        ></input>
      </div>
      <div className="form-control form-control-check">
        <label>Set Remainder</label>
        <input
          type="checkbox"
          value={remainder}
          checked ={remainder}
          onChange={(e) => setRemainder(e.currentTarget.checked)}
        ></input>
      </div>
      <input
        type="submit"
        value="Save Task"
        className="btn btn-block"
        
      />
    </form>
  );
};

export default AddTask;
