import React from 'react'
import {
    TouchableOpacity,
    TouchableNativeFeedback,
    View,
    Platform,
    StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'

import AppText from './AppText'
import { THEME } from '../../theme'

const AppButton = ({ children, onPress, color }) => {
    const Wrapper =
        Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity
    return (
        <Wrapper onPress={onPress}>
            <View style={{ ...styles.appButton, backgroundColor: color }}>
                <AppText style={styles.text}>{children}</AppText>
            </View>
        </Wrapper>
    )
}

export default AppButton

AppButton.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onPress: PropTypes.func,
    color: PropTypes.string,
}
AppButton.defaultProps = {
    color: THEME.PRIMARY_COLOR,
}

const styles = StyleSheet.create({
    appButton: {
        borderRadius: 6,
        padding: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
    },
})
