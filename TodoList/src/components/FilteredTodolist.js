import Todolist from './Todolist';
import { connect } from 'react-redux';

const filteredTodolist = (todos, filter) => {
    console.log(todos, filter)
    switch (filter) {
        case 'SHOWALL':
            return todos
        case 'SHOWCOMPLETED':
            return todos.filter(t => t.toggle)
        case 'SHOWACTIVE':
            return todos.filter(t => !t.toggle)
        default:
            return todos
    }
}

const mapStateToProps = (state) => ({
    todos: filteredTodolist(state.todos, state.filter)
})

export default connect(mapStateToProps)(Todolist)