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
            <div>
            {this.props.todos.map(todo => 
            <Todo 
                key={todo.id} 
                todo={todo} 
                toggleCompleted={this.props.toggleCompleted}/>
            )}
            </div>
        )
    }
}

export default TodoList;