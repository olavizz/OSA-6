import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote } from '../requests'
import { useNotiDispatch } from './NotiContext'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const dispatch = useNotiDispatch()

  const newAnecMutation = useMutation({ mutationFn: createAnecdote , 
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    }
})

  const onCreate = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecMutation.mutate({ content, votes: 0 })
    console.log('new anecdote')
    dispatch({ type: 'PUT', payload: `You created ${content}` })
    setTimeout(() => {
      dispatch({ type: 'EMPTY' })
    }, 5000)
}



  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
