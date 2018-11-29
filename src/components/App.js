import React from 'react';
import TodoList from './Todo';
import { connect } from 'react-redux';
import { addTodo, todoTextChanged, todoSelected, todoEditTextChanged, applyTodoEdits, removeTodo } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Todo List:</h3>
        <TodoList items={this.props.items} onAddTodo={this.props.onAddTodo} onTodoTextChanged={this.props.onTodoTextChanged} addTodoText={this.props.addTodoText} selectedItem={this.props.selectedTodo} onTodoSelected={this.props.onTodoSelected} onApplyTodoEdit={this.props.onApplyTodoEdit} onTodoEditTextChanged={this.props.onTodoEditTextChanged} editTodoText={this.props.editTodoText} onRemoveTodo={this.props.onRemoveTodo} removeTodo={this.props.removeTodo}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAddTodo: () => dispatch(addTodo()),
    onTodoTextChanged: text => dispatch(todoTextChanged(text)),
    //The following is needed because you created three new action creators and they need to be dispatched to the props.
    onTodoSelected: id => dispatch(todoSelected(id)),
    onApplyTodoEdit: id => dispatch(applyTodoEdits(id)),
    onTodoEditTextChanged: text => dispatch(todoEditTextChanged(text)),
    onRemoveTodo: id => dispatch(removeTodo(id))
  };
}
function mapStateToProps(state) {
  return {
    items: state.items,
    addTodoText: state.addTodoText,
    // The following is needed since you created two new fields in your state.
    editTodoText: state.editTodoText,
    selectedTodo: state.selectedTodo
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
/* you need to add props to your Main Component as well add functions to the mapDispatchToProps and mapStateToProps functions. Add the following code to the src/components/App.js file:
Above, the new action creators are imported into this file.
The functions from the action creators, the mapDispatchToProps, and the mapStateToProps are all added as props into the TodoList component.
*/