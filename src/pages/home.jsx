import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "../components/header";
import Loader from "../components/loader";
import TodoList from "../components/todolist";
import AddTodo from "../components/addtodo";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const addItem = (todo) => {
    let todoId = uuidv4();
    let userId = 1;
    let todoList = [{ userId: userId, id: todoId, ...todo }];
    let newTodoList = [...todoList, ...todos];
    setTodos(newTodoList);
  };

  const removeItem = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const updateItem = (id, todo) => {
    let index = todos.findIndex((todo) => todo.id == id);
    let newTodos = todos;
    newTodos[index].title = todo.title;
    newTodos[index].body = todo.body;
    setTodos(newTodos);
  };

  useEffect(async () => {
    //fetch todo
    setLoading(true);
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (response) {
      setLoading(false);
      let result = await response.json();
      setTodos(result.reverse().slice(0, 7));
    }
  }, []);
  return (
    <>
      <Header />

      <div className="container todo-container">
        <Loader loading={loading} />
        <TodoList
          todos={todos}
          removeItem={removeItem}
          updateItem={updateItem}
        />
      </div>
      <AddTodo addItem={addItem} />
    </>
  );
};

export default Home;
