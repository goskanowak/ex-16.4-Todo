import React from 'react';
import style from './Title.css';

const Title = props => (
  <div className={style.Title}>
    <h1>{props.title}</h1>
    <p>{props.numberTask}</p>
  </div>
)

export default Title;