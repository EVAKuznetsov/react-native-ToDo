import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'

const AppLoader = () => {
    return (
        <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" />
        </View>
    )
}

export default AppLoader
const styles = StyleSheet.create({
    loaderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
})
