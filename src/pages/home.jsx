import { useState, useEffect } from "react";
import TodoList from "../components/todolist";
import Header from "../components/header";
import AddTodo from "../components/addtodo";
import Loader from "../components/loader";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const addItem = () => {};

  const removeItem = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  useEffect(async () => {
    //fetch todo
    setLoading(true);
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (response) {
      setLoading(false);
      let result = await response.json();
      setTodos(result.slice(0, 5));
    }
  }, []);
  return (
    <>
      <Header />

      <div className="container todo-container">
        <Loader loading={loading} />
        <TodoList lists={todos} removeItem={removeItem} />
      </div>
      <AddTodo addItem={addItem} />
    </>
  );
};

export default Home;
