import React, {FC, useEffect, useState} from 'react';
import {TodoForm} from "../TodoForm";
import {TodoList} from "../TodoList";
import {ITodo} from "../../interfaces";

// такая переменная точно есть. Чтобы при Confirm не писать глоб.объект Window
declare var confirm: (question: string) => boolean;

export const TodosPage: React.FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);


    useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
      setTodos(saved)
    }, [])

    useEffect(() => {
      todos.length > 0 && localStorage.setItem('todos', JSON.stringify(todos))
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

    const removeHandler = (id: number) => {
      const isOkRemove = confirm('Вы уверены, что хотите удалить элемент?');
      isOkRemove && setTodos(prev =>
        prev.filter(todo => todo.id !== id))
    }

  return (
    <>
      <TodoForm onAdd={addHandler}/>
       <TodoList
          todos={todos}
          onToggle={toggleHandler}
          onRemove={removeHandler}
        />
    </>
  );
};
