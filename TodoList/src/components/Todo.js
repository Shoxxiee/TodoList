import React from 'react';
import { connect } from 'react-redux';
import { removeTodo, toggleTodo } from '../actions/actions';

const Todo = ({ text, id, toggle, dispatch }) => (
    <div>
        <li onClick={() => dispatch(toggleTodo(id))} style={{textDecoration: toggle ? 'line-through' : 'none'}} >
            {text}
        </li>
        <button onClick={() => dispatch(removeTodo(id))} >Remove</button>
    </div>
)

export default connect()(Todo);