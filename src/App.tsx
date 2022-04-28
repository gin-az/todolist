import React, {FC} from 'react';
import { Routes, Route } from 'react-router-dom';
import {Navbar} from "./components/Navbar";
import {TodoForm} from "./components/TodoForm";
import {TodoList} from "./components/TodoList";
import {ITodo} from "./interfaces";
import {TodosPage} from "./components/Pages/TodosPage";
import {AboutPage} from "./components/Pages/AboutPage";

const App: FC = () => {

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Мои планы</h1>
        <Routes>
          <Route path="/" element={<TodosPage />}/>
          <Route path="about" element={<AboutPage />}/>
        </Routes>

      </div>
    </>
  );
}

export default App;
