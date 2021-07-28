import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import appSlice from 'store/slices/app'

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
  middleware: [...getDefaultMiddleware({ serializableCheck: false })],
})

export default store
