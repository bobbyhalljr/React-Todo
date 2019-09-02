import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: true
  }
];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: todoData,
    };
  }

  toggleCompleted = (id) => {
    console.log('toggleCompleted', id)
    this.setState({
      todos: this.state.todos.map(todo => {
        if(id === todo.id){
          return {...todo, completed: !todo.completed}
        } else {
          return todo;
        }
      })
    })
  }

  addTodo = task => {
    this.setState({ 
      todos: [...this.state.todos, {
        task: task,
        id: Date.now(),
        completed: false
      }]
     })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Todo List App</h1>
        <TodoList 
          todos={this.state.todos} 
          toggleCompleted={this.toggleCompleted}/>
        
        <TodoForm addTodo={this.addTodo} />
        <button className='clea-btn'>Clear Completed</button>
      </div>
    );
  }
}

export default App;
