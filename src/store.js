import { configureStore } from '@reduxjs/toolkit';
import friendsReducer from './slices/friendsSlice';

const store = configureStore({
    reducer: {
        friendsState: friendsReducer,
    },
});
export default store;