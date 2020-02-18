import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import AppText from './AppTextBold'
import AppButton from './AppButton'

const AppError = ({ onRepeat, error }) => {
    return (
        <View style={styles.container}>
            <AppText style={styles.errorText}>{error}</AppText>
            <AppButton onPress={onRepeat}>Повторить ещё раз</AppButton>
        </View>
    )
}

export default AppError

AppError.propTypes = {
    error: PropTypes.string,
    onRepeat: PropTypes.func,
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: '#fff',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20,
    },
})
