import { useState, useEffect } from "react";
import TodoList from "../components/todolist";
import Header from "../components/header";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const addItem = () => {};
  const removeItem = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  useEffect(async () => {
    //fetch todo
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (response) {
      let result = await response.json();
      console.log(result.slice(0, 5));
      setTodos(result.slice(0, 5));
    }
  }, []);
  return (
    <>
      <Header />
      <div className="container todo-container">
        <TodoList lists={todos} removeItem={removeItem} />
      </div>
    </>
  );
};

export default Home;
