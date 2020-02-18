import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function Counter() {
    const [count, setCount] = useState(0)

    const _onAddCount = () => {
        setCount(count + 1)
    }
    const _cleanCount = () => {
        setCount(0)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Текущий счет: {count}</Text>
            <View style={styles.buttonGroup}>
                <TouchableOpacity
                    onPress={_onAddCount}
                    style={styles.buttonOpacity}
                >
                    <Text>Добавить счетчик</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={_cleanCount}
                    style={styles.buttonOpacity}
                >
                    <Text>Обнулить Счетчик</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        marginBottom: 10,
    },
    buttonOpacity: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 10,
        marginRight: 5,
    },
    buttonGroup: {
        flexDirection: 'row',
    },
})
