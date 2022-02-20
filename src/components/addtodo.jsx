import { useState } from "react";
const AddTodo = ({ addItem }) => {
  const [toggle, setToggle] = useState(true);
  const toggleForm = () => setToggle(!toggle);

  return (
    <>
      <a
        className="btn-floating btn-large waves-effect waves-light green center-align add-button"
        onClick={toggleForm}
      >
        <i className="material-icons">add</i>
      </a>

      <div className="add-form" hidden={toggle} onClick={toggleForm}>
        <form className="col s12 card">
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label for="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate" />
              <label for="email">Email</label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTodo;
