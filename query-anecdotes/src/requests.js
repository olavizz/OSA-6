import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = () => 
    axios.get(baseUrl).then(res => res.data)

export const createAnecdote = newAnec =>
    axios.post(baseUrl, newAnec).then(res => res.data)

export const updateAnecdote = updatedanec =>
    axios.put(`${baseUrl}/${updatedanec.id}`, updatedanec).then(res => res.data)