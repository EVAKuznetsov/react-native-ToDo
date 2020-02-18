import React, { useState, useContext, useEffect } from 'react'
import { View, TextInput, Modal, StyleSheet, Alert } from 'react-native'

import { THEME } from '../theme'
import { TodoContext } from '../context/todo/todoContext'
import PropTypes from 'prop-types'
import AppButton from './ui/AppButton'

const EditModal = ({ active, cancelFn }) => {
    const { todo, updateTodo } = useContext(TodoContext)
    const [value, setValue] = useState(todo.title)

    useEffect(() => {
        setValue(todo.title)
    }, [active])

    const editHandler = () => {
        if (value.trim().length < 3) {
            Alert.alert(
                'Ошибка!',
                'Название не может жбыть меньше 3-х символов.'
            )
            return null
        }
        updateTodo(todo.id, value)
        cancelFn()
    }

    return (
        <Modal style={styles.modal} visible={active} animationType="slide">
            <View style={styles.wrap}>
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={setValue}
                    placeholder={'Введите текст...'}
                    placeholderTextColor={'rgba(255,255,255,0.5)'}
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="default"
                />
                <View style={styles.buttonGroup}>
                    <AppButton onPress={cancelFn} color={THEME.DANGER_COLOR}>
                        Отмена
                    </AppButton>
                    <AppButton onPress={editHandler}>Сохранить</AppButton>
                </View>
            </View>
        </Modal>
    )
}

export default EditModal
EditModal.propTypes = {
    active: PropTypes.bool,
    cancelFn: PropTypes.func,
}
const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonGroup: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
    },
    input: {
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%',
        fontSize: 20,
        marginBottom: 20,
        paddingVertical: 10,
        paddingHorizontal: 5,
        color: '#000',
    },
})
