

const defaultState = {
    todos: [],
    filter: '',
    searchText: ''
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, {
                    text: action.text,
                    id: action.id,
                    toggle: false
                }]
            };
        case "REMOVE_TODO":
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.id)
            }
        case "TOGGLE_TODO":
            return {
                ...state,
                todos: state.todos.map(todo =>
                    (todo.id === action.id)
                        ? { ...todo, toggle: !todo.toggle }
                        : todo)
            }
        case 'SET_FILTER':
            return {...state,
                filter: action.filter
            }
        case 'SEARCH_TEXT_FILTER':
        console.log(action.searchText)
            return {...state,
                searchText: action.searchText
            }
        default:
            return state;
    }
}