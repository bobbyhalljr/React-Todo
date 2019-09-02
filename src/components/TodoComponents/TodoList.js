import React from 'react';

import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        console.log('TodoList', props);
    }
    render(){
        console.log('TodoList', this.props);
        return (
            <div className='todo-items'>
            {this.props.todos.map(todo => 
            <ul>
                <Todo 
                    className='todos'
                    key={todo.id} 
                    todo={todo} 
                    toggleCompleted={this.props.toggleCompleted}/>
            </ul>
            )}
            </div>
        )
    }
}

export default TodoList;