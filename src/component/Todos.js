import React from 'react';
import TodoItem from './TodoItem';

class Todos extends React.Component {
  markComplete() {
  	console.log('hello');
  }

  render() {
    return this.props.todos.map((todo) => (
    	<TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
    ));
  }
}

export default Todos;