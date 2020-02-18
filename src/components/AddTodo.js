import React, { useState, useContext } from 'react'
import { View, StyleSheet, TextInput, Alert, Keyboard } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import AppButton from './ui/AppButton'
import { TodoContext } from '../context/todo/todoContext'

const AddTodo = () => {
    const [inpuVal, setVal] = useState('')
    const { addTodo } = useContext(TodoContext)

    const pressHandler = () => {
        if (inpuVal.trim()) {
            addTodo(inpuVal)
            setVal('')
            Keyboard.dismiss()
        } else {
            Alert.alert('Название не может быть пустым')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                value={inpuVal}
                onChangeText={setVal}
                placeholder={'Введите текст...'}
                placeholderTextColor={'rgba(255,255,255,0.5)'}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="default"
            ></TextInput>
            <AppButton onPress={pressHandler}>
                <AntDesign name="pluscircleo" size={25} />
            </AppButton>
            {/* <Button title={'Добавить'} onPress={pressHandler} /> */}
        </View>
    )
}
export default AddTodo

const styles = StyleSheet.create({
    block: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    input: {
        flex: 1,
        color: '#fff',
        fontSize: 20,
        padding: 10,
        borderStyle: 'solid',
        borderBottomColor: 'red',
        borderBottomWidth: 2,
        marginRight: 20,
    },
})
