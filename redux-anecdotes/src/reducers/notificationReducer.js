import { createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const NotificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        setOnScreen(state, action) {
            const notification = action.payload
            console.log('uuden anekdootin kohta')
            return notification
        }
}})

export const { setOnScreen } = NotificationSlice.actions

export const setNotification = (message, time) => {
    return async dispatch => {
        dispatch(setOnScreen(message))
        setTimeout(() => {
            dispatch(setOnScreen(''))
        }, time * 1000)
    }
}

export default NotificationSlice.reducer