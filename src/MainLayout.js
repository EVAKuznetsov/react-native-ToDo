import React, { useState, useEffect, useContext } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

import { NavBar } from './components'
import { MainScreen, TodoScreen } from './screens'
import { ScreenContext } from './context/screen/screenContext'

const MainLayout = () => {
    const { currentId } = useContext(ScreenContext)

    //адаптив для падингов
    const style =
        Dimensions.get('window').width > Dimensions.get('window').height
            ? styles.contentAlbum
            : styles.content
    const [styleContent, setStyleContent] = useState(style)
    useEffect(() => {
        const updateStyle = () => {
            setStyleContent(
                Dimensions.get('window').width > Dimensions.get('window').height
                    ? styles.contentAlbum
                    : styles.content
            )
        }
        Dimensions.addEventListener('change', updateStyle)
        return () => Dimensions.removeEventListener('change', updateStyle)
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <NavBar title={'Список задач'} />
            <View style={styleContent}>
                {currentId ? <TodoScreen /> : <MainScreen />}
            </View>
        </View>
    )
}

export default MainLayout

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        flex: 1,
    },
    contentAlbum: {
        paddingHorizontal: 50,
        paddingVertical: 30,
        flex: 1,
    },
})
