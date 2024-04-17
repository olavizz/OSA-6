import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'setfilter',
  initialState: {
    filter: null
  },
  reducers: {
    filterChange(state, action) {
      state.filter = action.payload
    }
  }
})

export const { filterChange } = filterSlice.actions
export default filterSlice.reducer