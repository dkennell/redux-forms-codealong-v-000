export default function manageTodo(state = {
  todos: [] }, action) {
  switch (action.type) {
  	case 'ADD_TODO':
  	  return action.todo
  	default: return state
  }
  return state;
}
