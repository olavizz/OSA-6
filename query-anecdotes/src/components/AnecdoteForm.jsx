import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote } from '../requests'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()

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
