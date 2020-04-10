import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  // A todo has access to this.props.delete with the alias of delete. Delete could be called DESTORY or whatever
  renderTodos = () => this.props.todos.map(todo => <Todo delete={this.props.delete} key={todo.id} todo={todo} />)

  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

// TodosContainer can now access this.props.delete(argumentToDelete)
// This can also be passed down to an individual ToDo
const mapDispatchToProps = dispatch => {
  return {
    delete: todoText => dispatch({type: 'DELETE_TODO', payload: todoText })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
