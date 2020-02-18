import React, { useReducer, useContext } from 'react'
import { Alert } from 'react-native'
import { TodoContextProvider } from './todoContext'
import { todoReducer } from './todoReducer'
import PropTypes from 'prop-types'
import {
    ADD_TODO,
    REMOVE_TODO,
    UPDATE_TODO,
    SHOW_LOADER,
    HIDE_LOADER,
    SHOW_ERROR,
    CLEAR_ERROR,
    FETCH_TODOS,
} from '../types'
import { ScreenContext } from '../screen/screenContext'

import { Http } from '../../service/http'

export default function TodoState({ children }) {
    const initialState = {
        todos: [],
        isLoad: true,
        error: null,
    }
    const { changeScreen, currentId } = useContext(ScreenContext)
    const [state, dispatch] = useReducer(todoReducer, initialState)
    //запрос данных с сервера
    const fetchTodos = async () => {
        showLoader()
        clearError()
        let data = await Http.get(
            'https://rn-todo-app-9467f.firebaseio.com/todos.json'
        )
        data = data ? data : []
        const todos = Object.keys(data).map(key => ({
            ...data[key],
            id: key,
        }))
        dispatch({ type: FETCH_TODOS, todos })
        hideLoader()
    }
    //метод добавления todo
    const addTodo = async title => {
        clearError()
        try {
            let {
                name,
            } = await Http.post(
                'https://rn-todo-app-9467f.firebaseio.com/todos.json',
                { title }
            )
            dispatch({ type: ADD_TODO, id: name, title })
        } catch (error) {
            showError('Ошибка добавления новой записи...')
        }
    }

    //метод удаления todo
    const removeTodo = id => {
        Alert.alert('Удалить', 'Вы действительно хотите удалить?', [
            {
                text: 'Отмена',
                style: 'cancel',
            },
            {
                text: 'Удалить',
                onPress: async () => {
                    clearError()
                    try {
                        await Http.delete(
                            `https://rn-todo-app-9467f.firebaseio.com/todos/${id}.json`
                        )
                        changeScreen('')
                        dispatch({ type: REMOVE_TODO, id })
                    } catch (error) {
                        showError('Ошибка удаления записи...')
                    }
                },
                style: 'default',
            },
        ])
    }
    const todo = state.todos.find(todo => todo.id === currentId)
    const updateTodo = async (id, title) => {
        clearError()
        try {
            await Http.patch(
                `https://rn-todo-app-9467f.firebaseio.com/todos/${id}.json`,
                { title }
            )
            dispatch({ type: UPDATE_TODO, id, title })
        } catch (e) {
            showError('Ошибка обновления записи...')
        }
    }
    const showLoader = () => dispatch({ type: SHOW_LOADER })
    const hideLoader = () => dispatch({ type: HIDE_LOADER })
    const showError = error => dispatch({ type: SHOW_ERROR, error })
    const clearError = () => dispatch({ type: CLEAR_ERROR })

    return (
        <TodoContextProvider
            value={{
                ...state,
                todo,
                addTodo,
                removeTodo,
                updateTodo,
                fetchTodos,
                clearError,
                showLoader,
            }}
        >
            {children}
        </TodoContextProvider>
    )
}
TodoState.propTypes = {
    children: PropTypes.any,
}
