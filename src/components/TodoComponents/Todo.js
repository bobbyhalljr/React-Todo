import React from 'react';

import './Todo.css';

class Todo extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        console.log('Todo:', this.props.todo)
        return (

            <li
                className='todos'
                onClick={() => this.props.toggleCompleted(this.props.todo.id)}

                className={this.props.todo.completed ? 'completed' : ''}>
                <h3 className='todos'>{this.props.todo.task}</h3>
            </li>

            // <div
            // onClick={() => this.props.toggleCompleted(this.props.todo.id)}
            
            // className={this.props.todo.completed ? 'completed' : ''}>
                
            // <div className='todos'>
            //     {this.props.todo.task}
            // </div>
            // </div>
        )
    }
}

export default Todo;