import { useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import VisibilityFilter from './reducers/VisibilityFilter'
import Notification from './components/Notification'
import { useDispatch } from 'react-redux'
import { initializeAnec, setAnec } from './reducers/anecdoteReducer'
import anecService from './services/anecdotes'


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnec())
  }, [])
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <VisibilityFilter />
      <AnecdoteList />
      <AnecdoteForm />
      </div>
  )
}

export default App