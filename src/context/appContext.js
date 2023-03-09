import React, { useEffect, useReducer, useState, createContext } from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import Reducer from '../context/Reducer';

const initialContext = {
  appState: false,
};
const formInitialDetails = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};

export const AppContext = createContext(initialContext);

export const ContextProviderApp = (props) => {
  //Ejemplo
  const [appState, setAppState] = useReducer(Reducer, initialContext);
  //Contact Context
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const contactData = [
    {
      type: 'text',
      value: formDetails.firstName,
      placeholder: 'First Name',
      onChange: (e) => onFormUpdate('firstName', e.target.value),
      size: { xs: 12, sm: 6 },
    },
    {
      type: 'text',
      value: formDetails.lastName,
      placeholder: 'Last Name',
      onChange: (e) => onFormUpdate('lastName', e.target.value),
      size: { xs: 12, sm: 6 },
    },
    {
      type: 'email',
      value: formDetails.email,
      placeholder: 'Email Address',
      onChange: (e) => onFormUpdate('email', e.target.value),
      size: { xs: 12, sm: 6 },
    },
    {
      type: 'tel',
      value: formDetails.phone,
      placeholder: 'Phone No.',
      onChange: (e) => onFormUpdate('phone', e.target.value),
      size: { xs: 12, sm: 6 },
    },
    {
      type: 'textarea',
      value: formDetails.message,
      placeholder: 'Message',
      onChange: (e) => onFormUpdate('message', e.target.value),
      rows: 6,
      size: { xs: 12 },
    },
  ];

  //Ejemplo
  const settingState = () => {
    setAppState({
      type: 'SET_STATE',
      payload: true,
    });
  };

  //Contact
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    let response = await fetch('http://localhost:3000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText('Send');
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully' });
    } else {
      setStatus({
        succes: false,
        message: 'Something went wrong, please try again later.',
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        appState,
        setAppState,
        settingState,
        formDetails,
        setFormDetails,
        onFormUpdate,
        contactData,
        formInitialDetails,
        handleSubmit,
        setButtonText,
        setStatus,
        status,
        buttonText,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
