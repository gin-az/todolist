import React, {FC, useState} from 'react';
import {Navbar} from "./components/Navbar";
import {TodoForm} from "./components/TodoForm";
import {log} from "util";
import {TodoList} from "./components/TodoList";
import {ITodo} from "./interfaces";

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  const addHandler = (title: string):void => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    console.log('Add new Todo', title);
    setTodos(prev => [newTodo, ...prev]);
  }

  console.log('todo', todos);

  // const toggleHandler = (id: number) => {
  //   setTodos(prev =>
  //     prev.map(todo => {
  //       if (todo.id === id) {
  //         todo.completed = !todo.completed
  //       }
  //         return todo
  //     })
  //   )
  // }

  const removeHandler = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  const toggleHandler = (id: number) => {
    setTodos(prev =>
    prev.filter(todo => todo.id !== id))
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Заголовок</h1>
        <TodoForm onAdd={addHandler}/>
        <TodoList
          todos={todos}
          onToggle={removeHandler}
          onRemove={toggleHandler}/>
      </div>
    </>
  );
}

export default App;
