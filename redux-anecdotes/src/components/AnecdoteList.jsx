import { useDispatch, useSelector } from 'react-redux'
import { updAnec } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => {
      console.log(state.filter.filter)
      if ( state.filter.filter === null ) {
        return state.anecdotes
      }
      return state.anecdotes.filter(anecdote => 
          anecdote.content.toLowerCase().includes(state.filter.filter.toLowerCase()))
      }
    )
    const sortedAnec = [...anecdotes].sort((a, b) => b.votes - a.votes)
    
    
    const vote = (id) => {
        console.log('tässä kohtaa')
        const content = anecdotes.find(anecdote =>
          anecdote.id === id )
        dispatch(updAnec(content))
        console.log(content.content)
        dispatch(setNotification( `You voted ${content.content}`, 10))
        console.log('ja tässä kohtaa')
      }
    console.log(anecdotes)
    return (
    <div>
    {sortedAnec.map(anecdote =>
        <div key={anecdote.id}>
            <div>
            {anecdote.content}
            </div>
            <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
        </div>
    )
  }
  </div>
 )
}

export default AnecdoteList