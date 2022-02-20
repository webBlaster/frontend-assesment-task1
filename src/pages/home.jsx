import { useState, useEffect } from "react";
import TodoList from "../components/todolist";
import Header from "../components/header";

const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(async () => {
    //fetch todo
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (response) {
      let result = await response.json();
      console.log(result);
      setTodos(result);
    }
  }, []);
  return (
    <>
      <Header />
      <div className="container todo-container">
        <TodoList lists={todos} />
      </div>
    </>
  );
};

export default Home;
