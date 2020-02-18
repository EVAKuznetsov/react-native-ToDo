import React from 'react'
import { View, StyleSheet } from 'react-native'

import PropTypes from 'prop-types'

const AppCard = ({ children, style }) => {
    return <View style={{ ...styles.default, ...style }}>{children}</View>
}

export default AppCard

AppCard.propTypes = {
    children: PropTypes.array,
    style: PropTypes.object,
}
const styles = StyleSheet.create({
    default: {
        borderRadius: 10,
        width: '100%',
        padding: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: '#fff',
        shadowOpacity: 0.3,
        shadowRadius: 7,
        shadowOffset: { width: 1, height: 1 },
        elevation: 10,
        backgroundColor: '#fff',
    },
})
