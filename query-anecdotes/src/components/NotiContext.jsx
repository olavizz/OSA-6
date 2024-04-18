import { createContext, useReducer, useContext } from 'react'

const notiReducer = (state, action) => {
    switch (action.type) {
        case "PUT":
            console.log(action.payload)
            return action.payload
        
        case "EMPTY":
            return ''
    }
}
const NotiContext = createContext()

export const useNotiValue = () => {
    const notiAndDispatch = useContext(NotiContext)
    return notiAndDispatch[0]
}

export const useNotiDispatch = () => {
    const notiAndDispatch = useContext(NotiContext)
    return notiAndDispatch[1]
}



export const NotiContextProvider = (props) => {
    const [notification, notiDispatch] = useReducer(notiReducer, '')

    return (
        <NotiContext.Provider value={[notification, notiDispatch]}>
            {props.children}
        </NotiContext.Provider>
    )
}

export default NotiContext