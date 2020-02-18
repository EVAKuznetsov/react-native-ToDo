import React, { useContext } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import TodoItem from './TodoItem'
import { TodoContext } from '../context/todo/todoContext'

const TodoList = () => {
    const { todos, removeTodos } = useContext(TodoContext)

    return (
        <FlatList
            style={styles.todos}
            data={todos}
            renderItem={({ item }) => (
                <TodoItem item={item} onRemove={removeTodos} />
            )}
            keyExtractor={item => item.id}
        />
    )
}

export default TodoList

const styles = StyleSheet.create({
    todos: {
        width: '100%',
        marginTop: 30,
    },
})
