import React from 'react';
import './App.css';
// Layout
import Header from './component/layout/Header';
import AddTodo from './component/AddTodo';
import Todos from './component/Todos';
import axios from 'axios';

class App extends React.Component {
  state = {
    todos: [],
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then((response) => {
      this.setState({
        todos: response.data,
        num: 11,
      })
    })
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (id === todo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
  }

  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => {
      this.setState({ todos: this.state.todos.filter(todo => {
        return id !== todo.id;
      }) })
    })
  }

  addTodo = (title) => {
    const newTodo = {
      id: this.state.num,
      title,
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo],
      num: this.state.num+1,
    })
  }

  render() {
    return (
      <div className="App">        
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;