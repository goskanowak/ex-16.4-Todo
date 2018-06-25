import React from 'react';
import style from './TodoList.css';

const TodoList = props => props.data.map(data =>
  <ul className={style.list}> 
    <li className={style.task} key={data.id}>{data.text}
      <button className={style.btn} 
      onClick = {() => props.remove(data.id)}>x</button> 
     </li>
  </ul>
);
export default TodoList;