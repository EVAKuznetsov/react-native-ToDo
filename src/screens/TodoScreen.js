import React, { useState, useContext } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons'

import { THEME } from '../theme'
import {
    EditModal,
    AppTextBold,
    AppCard,
    AppButton,
    AppError,
} from '../components'
import { TodoContext } from '../context/todo/todoContext'
import { ScreenContext } from '../context/screen/screenContext'

const TodoScreen = () => {
    const [modalActive, setModalActive] = useState(false)
    const { todo, removeTodo, showLoader, error } = useContext(TodoContext)
    const { changeScreen } = useContext(ScreenContext)

    const onBack = () => {
        showLoader()
        changeScreen('')
    }
    if (error) {
        return <AppError error={error} onRepeat={() => changeScreen('')} />
    }
    return (
        <View style={styles.container}>
            <EditModal
                active={modalActive}
                cancelFn={() => setModalActive(false)}
                text={todo.title}
            />
            <AppCard style={{ marginBottom: 20 }}>
                <AppTextBold style={styles.todoTitle}>{todo.title}</AppTextBold>
                <AppButton onPress={() => setModalActive(true)}>
                    <FontAwesome name="edit" size={25} />
                </AppButton>
            </AppCard>

            <View style={styles.buttonBlock}>
                <View style={styles.button}>
                    <AppButton onPress={onBack} color={THEME.GREY_COLOR}>
                        <AntDesign name="back" size={25} />
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton
                        onPress={() => removeTodo(todo.id)}
                        color={THEME.DANGER_COLOR}
                    >
                        <AntDesign name="delete" size={25} />
                    </AppButton>
                </View>
            </View>
        </View>
    )
}

export default TodoScreen

const styles = StyleSheet.create({
    todoTitle: {
        color: '#000',
        fontSize: 20,
    },
    container: {
        flex: 1,
        alignItems: 'flex-start',
        padding: 20,
    },
    button: {
        width: Dimensions.get('window').width / 3,
    },
    buttonBlock: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})
