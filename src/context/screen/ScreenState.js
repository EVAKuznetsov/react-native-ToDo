import React, { useReducer } from 'react'

import { ScreenContextProvider } from './screenContext'
import { screenReducer } from './screenReducer'
import { CHANGE_SCREEN } from '../types'
import PropTypes from 'prop-types'

const initialState = { currentId: '' }
const ScreenState = ({ children }) => {
    const [state, dispatch] = useReducer(screenReducer, initialState)
    const changeScreen = id => dispatch({ type: CHANGE_SCREEN, id })
    return (
        <ScreenContextProvider value={{ changeScreen, ...state }}>
            {children}
        </ScreenContextProvider>
    )
}

export default ScreenState
ScreenState.propTypes = {
    children: PropTypes.any,
}
