import { filterChange } from './filterReducer'
import { useDispatch } from 'react-redux'

const VisibilityFilter = (props) => {
    const dispatch = useDispatch()
    const handleChange = (event) => {

        dispatch(({ type: 'setfilter/filterChange', payload: event.target.value}))

        // input-kentän arvo muuttujassa event.target.value
      }
      const style = {
        marginBottom: 10
      }
    
      return (
        <div style={style}>
          filter <input onChange={handleChange} />
        </div>
      )
    }

export default VisibilityFilter