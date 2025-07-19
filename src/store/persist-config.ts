import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { combineReducers } from '@reduxjs/toolkit';

import { counterReducer } from './slices/counter-slice';

const counterPersistConfig = {
  key: 'counter',
  storage,
};

const rootReducer = combineReducers({
  counter: persistReducer(counterPersistConfig, counterReducer),
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['counter'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
