import React from 'react';

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newtodo: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state.newtodo)
        this.setState({ newtodo : '' })
    }

    render(){
        return (
            <form className='todo-form' onSubmit={this.handleSubmit}>
                <input 
                type='text' 
                name='newtodo' 
                placeholder='Add A New Todo'
                value={this.state.newtodo}
                onChange={this.handleChange}/>
                <div className='button-container'>
                    <button className='add' type='submit'>Add Todo</button>
                    <button className='clear' onClick={this.props.removeCompletedTodos}>Clear Completed</button>
                </div>
            </form>
        )
    }
}

export default TodoForm;