import React, {FC, useEffect, useState} from 'react';
import {Navbar} from "./components/Navbar";
import {TodoForm} from "./components/TodoForm";
import {TodoList} from "./components/TodoList";
import {ITodo} from "./interfaces";

// такая переменная точно есть. Чтобы при Confirm не писать глоб.объект Window
declare var confirm: (question: string) => boolean;

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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
    const isOkRemove = confirm('Вы уверены, что хотите удалить элемент?');
    isOkRemove && setTodos(prev =>
    prev.filter(todo => todo.id !== id))
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Заголовок</h1>
        <TodoForm onAdd={addHandler}/>
        {todos?.length > 0
          ? <TodoList
              todos={todos}
              onToggle={toggleHandler}
              onRemove={removeHandler}
            />
          : <p className="center"> Дел нет.</p>}
      </div>
    </>
  );
}

export default App;
