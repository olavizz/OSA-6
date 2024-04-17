import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import anecService from '../services/anecdotes'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnec = async (event) => {
    event.preventDefault()
    const content = event.target.Anec.value
    dispatch(createAnecdote(content))
    event.target.Anec.value = ''
    dispatch(setNotification(`You created ${content}`, 10 ))
  }

    return (
    <div>
    <h2>create new</h2>
    <form onSubmit={addAnec}>
      <div><input name="Anec" /></div>
      <button type="submit">create</button>
    </form>
  </div>)
}

export default AnecdoteForm