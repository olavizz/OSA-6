import { useContext } from 'react'
import { useNotiValue } from "./NotiContext"

const Notification = () => {

  const notification = useNotiValue()

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }

  if (notification === '') {
    return null
  } else {

  return (
    <div style={style}>
      {notification}
    </div>
  )
}
}

export default Notification
