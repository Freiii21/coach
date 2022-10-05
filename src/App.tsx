import React from 'react';
import {Header} from './Components/Header/Header';
import s from "./App.module.css";
import {Exercises} from './Components/Exercises/Exercises';

function App() {
  return (
    <div className={s.common}>
        <Header />
        <Exercises />
    </div>
  );
}

export default App;
