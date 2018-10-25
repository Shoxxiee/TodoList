import React from 'react';
import Todo from './Todo';
import {connect} from  'react-redux';

const Todolist = ({todos, searchText}) => {
    return (
        <ul>
            {todos
                .filter(item => item.text.toLowerCase().includes(searchText.toLowerCase()))
                .map((t, i) =>
                <Todo key={i} {...t}  />
            )}
        </ul>
    )
}


const mapStateToProps = (state) => ({
    searchText: state.searchText
})

export default connect(mapStateToProps)(Todolist);