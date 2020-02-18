import React, { useContext, useEffect, useCallback } from 'react'
import { View, StyleSheet, Image } from 'react-native'

import { AddTodo, TodoList, AppLoader, AppError } from '../components'
import { TodoContext } from '../context/todo/todoContext'

const MainScreen = () => {
    const { todos, fetchTodos, isLoad, error } = useContext(TodoContext)
    const loadTodos = useCallback(async () => {
        await fetchTodos()
    }, [])

    useEffect(() => {
        loadTodos()
    }, [])
    if (isLoad) {
        return <AppLoader />
    }
    if (error) {
        return <AppError onRepeat={loadTodos} error={error} />
    }
    return (
        <View style={styles.container}>
            <AddTodo />
            {todos.length ? (
                <TodoList />
            ) : (
                <View style={styles.imageWrap}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/wait-img.png')}
                    />
                </View>
            )}
        </View>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    imageWrap: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
})
