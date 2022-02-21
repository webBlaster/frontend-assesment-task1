const UpdateTodo = ({ currentTodo, id, updateItem, toggle, toggleForm }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    updateItem(id, {
      title: event.target.title.value,
      body: event.target.body.value,
    });
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
            defaultValue={currentTodo?.title}
          />
          <input
            name="body"
            type="text"
            required
            placeholder="Body"
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
