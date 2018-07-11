import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from './Title';
import TodoList from './TodoList';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 
        [{
          id: 1,
          text: 'clean room'
        }, {
          id: 2,
          text: 'wash the dishes'
        }, {
          id: 3,
          text: 'feed my cat'
        }, {
          id: 4,
          text: 'read a book'
        }, {
          id: 5,
          text: 'change wires'
        }]
    };
  }
    
  addTodo(val) {
    const todo = {
      text: val,
      id: uuid.v4(),
    };
    const data = [...this.state.data, todo];
    this.setState({data});
  }
    
  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: remainder});
  }
    
  render() {
    return (
      <div className={style.TodoApp}>
        <Title title={this.props.title} numberTask={this.state.data.length}/>
        <ul className={style.TodoList}>
          <TodoList data={this.state.data}
           remove={this.removeTodo.bind(this)}/>
        </ul>
      </div>
    );
  }
}

export default hot(module)(App);