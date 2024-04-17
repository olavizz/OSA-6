import { createSlice } from '@reduxjs/toolkit'
import anecService from '../services/anecdotes'


const getId = () => (1000000 * Math.random()).toFixed(0)

const AnecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    addVote(state, action) {
    const changedAnec = action.payload
    const id = changedAnec.id
    console.log(JSON.parse(JSON.stringify(state)))
    return state.map(anecdotes =>
      anecdotes.id !== id ? anecdotes : changedAnec
      )
    },
    appendAnec(state, action) {
      state.push(action.payload)
    },

    setAnec(state, action) {
      return action.payload
    }
  }
})

export const { addVote, appendAnec, setAnec } = AnecdoteSlice.actions

export const updAnec = content => {
  return async dispatch => {
    const id = content.id
    const object = {
      ...content,
      votes: content.votes + 1
    }
    const newObject = await anecService.updateAnec(object, id)
    dispatch(addVote(newObject))
  }

}

export const initializeAnec = () => {
  return async dispatch => {
    const anecdotes = await anecService.getAll()
    dispatch(setAnec(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnec = await anecService.createNew(content)
    dispatch(appendAnec(newAnec))
  }
}

export default AnecdoteSlice.reducer