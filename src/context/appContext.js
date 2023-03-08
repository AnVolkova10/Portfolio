import React, { useEffect, useReducer, useState, createContext } from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import Reducer from '../context/Reducer';

const initialContext = {
  appState: false,
};
export const AppContext = createContext(initialContext);

export const ContextProviderApp = (props) => {
  const [appState, setAppState] = useReducer(Reducer, initialContext);

  const settingState = () => {
    setAppState({
      type: 'SET_STATE',
      payload: true,
    });
  };

  return (
    <AppContext.Provider value={{ appState, setAppState, settingState }}>
      {props.children}
    </AppContext.Provider>
  );
};
