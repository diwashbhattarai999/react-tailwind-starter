import type React from 'react';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@/store';

/**
 * ReduxProvider component that wraps the application with Redux store and persistence.
 * It provides the Redux store to the application and ensures that the persisted state is loaded.
 *
 * @param {Object} props - The props for the ReduxProvider component.
 * @param {React.ReactNode} props.children - The child components to be rendered within the provider.
 */
export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {/* PersistGate delays the rendering of children until the persisted state has been retrieved and saved to Redux store */}
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
