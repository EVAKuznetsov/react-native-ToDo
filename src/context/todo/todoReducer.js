import {
    ADD_TODO,
    REMOVE_TODO,
    UPDATE_TODO,
    SHOW_LOADER,
    HIDE_LOADER,
    CLEAR_ERROR,
    SHOW_ERROR,
    FETCH_TODOS,
} from '../types'
const handler = {
    [ADD_TODO]: (state, { id, title }) => ({
        ...state,
        todos: [...state.todos, { id, title }],
    }),
    [REMOVE_TODO]: (state, { id }) => ({
        ...state,
        todos: [...state.todos.filter(item => item.id != id)],
    }),
    [UPDATE_TODO]: (state, { id, title }) => ({
        ...state,
        todos: [
            ...state.todos.map(item =>
                item.id === id ? { id: item.id, title: title } : item
            ),
        ],
    }),
    [SHOW_LOADER]: state => ({ ...state, isLoad: true }),
    [HIDE_LOADER]: state => ({ ...state, isLoad: false }),
    [CLEAR_ERROR]: state => ({ ...state, error: null }),
    [SHOW_ERROR]: (state, { error }) => ({ ...state, error }),
    [FETCH_TODOS]: (state, { todos }) => ({ ...state, todos }),
    DEFAULT: state => state,
}
export const todoReducer = (state, action) => {
    const handle = handler[action.type] || handler.DEFAULT
    return handle(state, action)
}
