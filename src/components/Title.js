import React from 'react';
import style from './Title.css';

const Title = props => (
  <div className={style.Title}>
    <h1>List Todo:</h1>
    <p className={style.taskTodo}>{'Task to do: ' + props.numberTask}</p>
  </div>
);

export default Title;