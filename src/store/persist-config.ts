import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { combineReducers } from '@reduxjs/toolkit';

import { counterReducer } from './slices/counter-slice';

// Configuration for the counter slice persistence
const counterPersistConfig = {
  key: 'counter',
  storage,
};

// Combine all reducers into a root reducer
const rootReducer = combineReducers({
  counter: persistReducer(counterPersistConfig, counterReducer),
});

// Configuration for the entire Redux store persistence
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['counter'],
};

// Export the persisted reducer
export const persistedReducer = persistReducer(persistConfig, rootReducer);
