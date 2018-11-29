import React from 'react';

const TodoList = ({ items, onAddTodo, onTodoTextChanged, addTodoText, selectedItem, onTodoSelected, onApplyTodoEdit, onTodoEditTextChanged, editTodoText, onRemoveTodo }) => {

  const todoToListItem = item => {
    if(item.id === selectedItem){
      return <span key={item.id}>
                <input onChange={event => onTodoEditTextChanged(event.target.value)} type="text" value={editTodoText} />
                <button onClick={() => onApplyTodoEdit(item.id)}>Update</button>  
            </span>
    }else{
      return <span>
                <li key={item.id} onClick={() => onTodoSelected(item.id)}>{item.todo}</li>
                <button onClick={() => onRemoveTodo(item.id)}>Remove Todo</button>
              </span>
    }
  };

  const itemList = items.map(todoToListItem);

  return (
    <div>
        <input onChange={event => onTodoTextChanged(event.target.value)} value={addTodoText} type="text"/>
        <button onClick={onAddTodo}>Add Item</button>
      <ul>{itemList}</ul>
    </div>
  );
};

export default TodoList;
/* The functions needed for selecting and updating a todo item is added within the TodoList component: selectedItem, onTodoSelected, onApplyTodoEdit, onTodoEditTextChanged, and editTodoText
The new part of this component is the toodToListItem function.
This function takes in an item. If the item's id is the same as the selectedItem, it will return a span.
This span has an input and when the input changes (onChange), it pulls in the event (the change to the input) and runs the onTodoEditTextChanged function which dispatches the todoEditTextChanged action creator using the input's value (event.target.value).
The button has an onClick that once clicked, it runs the onApplyTodoEdit function which dispatches the applyTodoEdits action creator with the item's id.
The else statement returns a span that allows for the clicking on a todo item to select it. If it is clicked on, it will run the onTodoSelected function which dispatches the todoSelected action creator with the item's id.
So, if an item is clicked on, it will populate an input field to be able to update the todo item.*/