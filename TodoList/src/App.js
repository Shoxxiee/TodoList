import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import FilteredTodolist from './components/FilteredTodolist';
import Footer from './components/Footer';
import Filter from './components/Filter';

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <Filter />
        <FilteredTodolist />
        <Footer />
      </div>
    );
  }
}

export default App;
