export const addTodo = () => (
    {
        type: 'ADD_TODO'
    }
)

export const todoTextChanged = (text) => (
    {
        type: 'TODO_TEXT_CHANGED',
        text
    }
)

//select a todo item
export const todoSelected = (id) =>(
    {
        type: 'TODO_SELECTED',
        id
    }
)

//edit a todo item
export const applyTodoEdits = (id) => (
    {
        type: 'APPLY_TODO_EDITS',
        id
    }
)

export const todoEditTextChanged = (text) => (
    {
        type: 'TODO_EDIT_TEXT_CHANGED',
        text
    }
)
//delete a todo item
export const removeTodo = (id) => (
	{
        type: 'REMOVE_TODO',
        id
    }
)
/*The todoSelected function is needed for the ability to select an item.
This takes in an id of the todo item
The type is defined as TODO_SELECTED
The applyTodoEdits function is needed for actually applying the edits of the todo item to the state.
this takes in an id of the todo item to be updated
The type is defined as APPLY_TODO_EDITS
The todoEditTextChanged function is needed for when the user is in process of editing the todo item.
This takes in the new text
The type is defined as TODO_EDIT_TEXT_CHANGED*/