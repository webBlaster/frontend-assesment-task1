import { useState } from "react";
const UpdateTodo = ({ currentTodo, id, updateItem, toggle, toggleForm }) => {
  const [todo, setTodo] = useState({
    title: "",
    body: "",
  });

  const handleInput = (event) =>
    setTodo({ ...todo, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    updateItem(id, todo);
    event.target.reset();
    toggleForm();
  };

  return (
    <>
      <span className="form-container" hidden={toggle}>
        <form className="white" onSubmit={handleSubmit}>
          <h4>Update Todo</h4>
          <input
            name="title"
            type="text"
            required
            placeholder="Title"
            onChange={handleInput}
            defaultValue={currentTodo?.title}
          />
          <input
            name="body"
            type="text"
            required
            placeholder="Body"
            onChange={handleInput}
            defaultValue={currentTodo?.body}
          />
          <input
            type="submit"
            className="btn green waves-effect"
            value="Update"
          />
        </form>
      </span>

      <div className="add-form" hidden={toggle} onClick={toggleForm}></div>
    </>
  );
};

export default UpdateTodo;
