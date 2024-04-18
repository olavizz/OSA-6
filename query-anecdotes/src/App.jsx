import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { getAnecdotes, updateAnecdote } from './requests'
import { useNotiDispatch } from './components/NotiContext'


const App = () => {
  const dispatch = useNotiDispatch()
  const queryClient = useQueryClient()

  const updateAnecMutation = useMutation({ mutationFn: updateAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    }
  } )

  const handleVote = (anecdote) => {
    console.log('vote')
    updateAnecMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 })
    dispatch({ type: 'PUT', payload: `You voted ${anecdote.content}` })
    setTimeout(() => {
      dispatch({ type: 'EMPTY' })
    }, 5000)
  }



  const result = useQuery({
   queryKey: ['anecdotes'],
   queryFn: () => getAnecdotes(),
   retry: false
  })
  console.log(JSON.parse(JSON.stringify(result)))

  if ( result.isLoading ) {
    return <div>loading data...</div>
  }

  if ( result.isError ) {
    return <div>anecdote service not available due to problems in server</div>
  }

  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
