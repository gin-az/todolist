import React from 'react';
import {ITodo} from "../interfaces";

type ITodoListProps = {
  todos: ITodo[]
  onToggle: (id: number) => void // оба варианта описания функции верны
  onRemove: (id: number) => void
}

export const TodoList: React.FC<ITodoListProps> = ({ todos, onRemove, onToggle }) => {
  return (
    <ul>
      {todos.map(todo => {
        const  classes = ['todo']
        todo.completed && classes.push('completed');
        return (
          <li className={classes.join(' ')} key={todo.id} onChange={onToggle.bind(null, todo.id)}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggle.bind(null, todo.id)}
                // onChange={() => onToggle(todo.id)}
              />
              <span>{todo.title}</span>
              <i className="material-icons red-text"
                 onClick={() => onRemove(todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        )
      })}
    </ul>
  );
};