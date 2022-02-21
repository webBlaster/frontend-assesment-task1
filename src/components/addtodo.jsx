import { useState } from "react";
const AddTodo = ({ addItem }) => {
  const [toggle, setToggle] = useState(true);
  const [todo, setTodo] = useState({
    title: "",
    body: "",
  });

  const toggleForm = () => setToggle(!toggle);

  const handleInput = (event) =>
    setTodo({ ...todo, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(todo);
    event.target.reset();
    toggleForm();
  };

  return (
    <>
      <a
        className="btn-floating btn-large waves-effect waves-light green center-align add-button"
        onClick={toggleForm}
      >
        <i className="material-icons">add</i>
      </a>

      <span className="form-container" hidden={toggle}>
        <form className="white" onSubmit={handleSubmit}>
          <h3>Add New Todo</h3>
          <input
            name="title"
            type="text"
            required
            placeholder="Title"
            onChange={handleInput}
            defaultValue=""
          />
          <input
            name="body"
            type="text"
            required
            placeholder="Body"
            onChange={handleInput}
            defaultValue=""
          />
          <input
            type="submit"
            className="btn green waves-effect"
            value="Create"
          />
        </form>
      </span>

      <div className="add-form" hidden={toggle} onClick={toggleForm}></div>
    </>
  );
};

export default AddTodo;
