import React, {FC, useState} from 'react';
import {Navbar} from "./components/Navbar";
import {TodoForm} from "./components/TodoForm";
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
    setTodos(prev => [newTodo, ...prev]);
  }

  const toggleHandler = (id: number) => {
    setTodos(todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  // const toggleHandler2 = (id: number) => {
  //   setTodos((prev) => {
  //       const copy = new Map(prev)
  //       copy.map(todo => {
  //         if (todo.id === id) {
  //           todo.completed = !todo.completed
  //         }
  //         return todo
  //       })
  //     }
  //   )
  // }

  const removeHandler = (id: number) => {
    setTodos(prev =>
    prev.filter(todo => todo.id !== id))
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Заголовок</h1>
        <TodoForm onAdd={addHandler}/>
        {todos.length > 0
          ? <TodoList
              todos={todos}
              onToggle={toggleHandler}
              onRemove={removeHandler}
            />
          : <label> Дел нет.</label>}
      </div>
    </>
  );
}

export default App;
