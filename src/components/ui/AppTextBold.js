import React from 'react'
import { Text, StyleSheet } from 'react-native'

import PropTypes from 'prop-types'

const AppText = ({ children, style }) => (
    <Text style={{ ...styles.text, ...style }}>{children}</Text>
)

export default AppText

AppText.propTypes = {
    children: PropTypes.string,
    style: PropTypes.object,
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'roboto-bold',
    },
})
