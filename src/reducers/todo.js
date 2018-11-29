const initialState = {
    items: [
      {
        id: 1,
        todo: 'clean' 
      }
    ],
    addTodoText: "",
    // The following fields are needed in your state for selecting and updating a todo item
    selectedTodo: null,
    editTodoText: ""
  };
  
  function todoReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TODO':
        const existingIds = state.items.map(todo => todo.id);
        const largestExistingId = Math.max(...existingIds);
        return {
          ...state,
          items: [
            ...state.items,
            {
              id: largestExistingId + 1,
              todo: state.addTodoText
            }
          ],
          addTodoText: ""
        };
      case 'TODO_TEXT_CHANGED':
        return {
          ...state,
          addTodoText: action.text
        }
      // The following case statement is for selecting a todo item
      case 'TODO_SELECTED':
        return {
          ...state,
          selectedTodo: action.id,
          editTodoText: state.items.find(item => item.id === action.id).todo
        }
      // The following case statement is for applying edits to a todo item
      case 'APPLY_TODO_EDITS':
        return {
          ...state,
          items: state.items.map(item => {
            if(item.id === state.selectedTodo){
              return {...item, todo: state.editTodoText} 
            }  else {
              return item
            }
          }),
          editTodoText: "",
          selectedTodo: null
        }
      // The following case statement is for the actual updating of the todo item
      case 'TODO_EDIT_TEXT_CHANGED':
        return {
          ...state,
          editTodoText: action.text
        }
            // The following case statement handles the state when an item is removed
    case 'REMOVE_TODO':
    return {
      ...state,
      items: state.items.filter(todo => todo.id !== action.id)
    };
      default:
        return state;
    }
  }
  
  export default todoReducer;
  /* The state needs two new fields: selectedTodo and editTodoText.
The selectedTodo will be set to the id of the todo item that is clicked upon.
The editTodoText will be used the same way addTodoText is used.
The TODO_SELECTED case statement will spread the state, set the selectedTodo to the id that is pulled in by the action. The editTodoText field is set to a find statement which will find an item that has the same id as the action's id and pull that item's todo string.
The APPLY_TODO_EDITS case will spread the state. It will then set the items field to a map function which finds an item and if the item has the same id as the selectedTodo id, it will return the item itself and set the field todo to the editTodoText field. After that happens, the editTodoText and selectTodo fields are re-set to their original values.
The TODO_EDIT_TEXT_CHANGED case will spread the state and will set the editTodoText field to the action's text. This will update every time the user types something into the update input box, which will be created shortly.*/