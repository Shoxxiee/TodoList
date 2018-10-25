import React from  'react';
import {connect} from 'react-redux';
import {filters} from '../actions/actions';
import {setFilter} from '../actions/actions';

const Footer = ({dispatch}) => (
    <div>
        <span> Filters : </span>
        <button onClick={() => dispatch(setFilter(filters.SHOWALL))} >Show All</button> {" "}
        <button onClick={() => dispatch(setFilter(filters.SHOWACTIVE))} >Show active</button> {" "}
        <button onClick={() => dispatch(setFilter(filters.SHOWCOMPLETED))} >Show Completed</button>
    </div>
)

export default  connect()(Footer);