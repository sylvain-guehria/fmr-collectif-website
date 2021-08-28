/* eslint-disable no-case-declarations */
import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

let store;

const initialState = {
  notifications: {
    boutique: {
      ticketOffice: 0,
      shop: 0,
      shoppingCart: 0
    }
  },
  shoppingCart: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_NOTIFICATION':
      return {
        ...state,
        notifications: {
          ...state.notifications,
          [action.tab]: {
            ...state.notifications.tab,
            [action.page]: state.notifications[action.tab].page + 1
          }
        }
      };
    case 'DECREMENT_NOTIFICATION':
      return {
        ...state,
        notifications: {
          ...state.notifications,
          [action.tab]: {
            ...state.notifications.tab,
            [action.page]: state.notifications[action.tab].page - 1
          }
        }
      };
    case 'RESET_NOTIFICATION':
      return {
        ...state,
        notifications: {
          ...state.notifications,
          [action.tab]: {
            ...state.notifications.tab,
            [action.page]: initialState.notifications[action.tab].page
          }
        }
      };
    case 'ADD_TO_CART':
      const index = state.shoppingCart.findIndex((item => item.uid === action.uid));
      const localShoppingCart = [...state.shoppingCart];
      if (index === -1) {
        localShoppingCart.push({ uid: action.uid, quantity: 1 });
    } else {
        localShoppingCart[index].quantity = localShoppingCart[index].quantity + 1;
      }
      return {
        ...state,
        shoppingCart: [...state.shoppingCart]
      };
    default:
      return state;
  }
};

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}