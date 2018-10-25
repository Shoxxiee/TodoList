let id = 0;
export const addTodo = (text) => ({
    type: "ADD_TODO",
    text,
    id: id++
})

export const removeTodo = (id) => ({
    type: "REMOVE_TODO",
    id
})

export const toggleTodo = (id) => ({
    type: "TOGGLE_TODO",
    id
})

export const filters = {
    SHOWALL: 'SHOWALL',
    SHOWCOMPLETED: 'SHOWCOMPLETED',
    SHOWACTIVE: 'SHOWACTIVE'
}

export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    filter
})

export const searchTextFilter = (searchText) => ({
    type: 'SEARCH_TEXT_FILTER',
    searchText
})