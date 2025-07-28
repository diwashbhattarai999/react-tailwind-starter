import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from './slices/counter-slice';
import { persistedReducer } from './persist-config';

/**
 * Configures the Redux store with persisted state and middleware.
 *
 * @returns {Store} The configured Redux store.
 */
export const store = configureStore({
  reducer: {
    // Add all reducers to persistedReducer file if it needs to be persisted
    persistedReducer,
    counter: counterReducer,
    // Add other non-persisted reducers here
  },

  /**
   * Configures the middleware for the Redux store.
   * It includes default middleware and ignores certain actions for serializability checks.
   * This is necessary to ensure that the store can handle persisted state correctly.
   *
   * NOTE: Redux only supports serializable data, so we need to ignore certain actions
   * that are not serializable, such as those related to persistence.
   */
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

/**
 * Creates a persistor for the Redux store to manage the persisted state.
 */
export const persistor = persistStore(store);

/**
 * Types for the Redux store state and dispatch.
 */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
