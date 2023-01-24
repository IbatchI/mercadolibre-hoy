import { configureStore } from '@reduxjs/toolkit'
import { productsSlice } from '../slices/products/productSilce'
import { searchSlice } from '../slices/searches/searchSlice'
import { userSlice } from '../slices/users/userSlice'

export const store = configureStore({
  reducer: {
    searches: searchSlice.reducer,
    user: userSlice.reducer,
    products: productsSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
