import { useState } from "react";
import UpdateTodo from "./updatetodo";

const TodoList = ({ todos, removeItem, updateItem }) => {
  const [toggle, setToggle] = useState(true);
  const [id, setId] = useState();

  const toggleForm = () => setToggle(!toggle);
  return (
    <>
      <span>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <div className="card todo" key={todo.id}>
              <a
                className="btn-floating btn-small waves-effect waves-light red"
                onClick={() => removeItem(todo.id)}
              >
                <i className="material-icons">remove</i>
              </a>

              <a
                className="btn-floating btn-small waves-effect waves-light blue right"
                data-id={todo.id}
                onClick={(event) => {
                  setId(event.currentTarget.getAttribute("data-id"));
                  toggleForm();
                }}
              >
                <i className="material-icons">edit</i>
              </a>
              <h4>{todo.title}</h4>
              <p className="flow-text">{todo.body}</p>
            </div>
          ))
        ) : (
          <h5 className="center-align grey-text">No Todos</h5>
        )}
      </span>
      <UpdateTodo
        id={id}
        currentTodo={todos[todos.findIndex((todo) => todo.id == id)]}
        updateItem={updateItem}
        toggle={toggle}
        toggleForm={toggleForm}
      />
    </>
  );
};

export default TodoList;
