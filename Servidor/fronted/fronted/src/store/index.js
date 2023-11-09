import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer} from 'redux-persist';
import userSlice from './user'
import storage from 'redux-persist/lib/storage';

const reducer = combineReducers({
    user: userSlice
});

const persistConfig = {
    key: 'root',
    storage:storage,
    whitelist: ['user'],
    blacklist:[],
}

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer:{
        user: persistedReducer
    }
});

export const persistor = persistStore(store);