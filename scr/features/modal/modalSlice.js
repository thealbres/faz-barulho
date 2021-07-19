import { createSlice } from '@reduxjs/toolkit'

export const modalVisibility = createSlice({
  name: 'modal',
  initialState: {
    value: false
  },
  reducers: {
    setModalVisible: (state, action) => {
        state.value = action.payload
      },
  }
})

export const { setModalVisible } = modalVisibility.actions

export default modalVisibility.reducer