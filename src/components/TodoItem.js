import React, { useContext } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
} from 'react-native'
import PropTypes from 'prop-types'

import { TodoContext } from '../context/todo/todoContext'
import AppText from './ui/AppText'
import { ScreenContext } from '../context/screen/screenContext'

const TodoItem = ({ item }) => {
    const { removeTodo } = useContext(TodoContext)
    const { changeScreen } = useContext(ScreenContext)
    const Wrapper =
        Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback
    return (
        <Wrapper
            activeOpacity={0.3}
            onPress={() => changeScreen(item.id)}
            onLongPress={removeTodo.bind(null, item.id)}
        >
            <View style={styles.todoItem}>
                <AppText style={styles.todoText}>{item.title}</AppText>
            </View>
        </Wrapper>
    )
}

export default TodoItem
TodoItem.propTypes = {
    item: PropTypes.object,
    onRemove: PropTypes.func,
}
const styles = StyleSheet.create({
    todoItem: {
        width: '100%',
        marginVertical: 5,
        borderColor: 'gray',
        borderBottomWidth: 2,
        padding: 25,
        paddingHorizontal: 10,
    },
    todoText: {
        color: '#fff',
        fontSize: 25,
    },
})
