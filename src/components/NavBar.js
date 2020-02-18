import React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'

import AppTextBold from './ui/AppTextBold'

const NavBar = ({ title }) => {
    return (
        <View style={styles.navbarContainer}>
            <AppTextBold style={styles.navbarText}>{title}</AppTextBold>
        </View>
    )
}

export default NavBar
NavBar.propTypes = {
    title: PropTypes.string,
}

const styles = StyleSheet.create({
    navbarContainer: {
        backgroundColor: 'red',
        width: '100%',
        paddingTop: 40,
        paddingBottom: 15,

        alignItems: 'center',
    },
    navbarText: {
        color: '#fff',
        fontSize: 30,
    },
})
