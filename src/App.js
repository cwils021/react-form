import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Head from './components/Head'
import FormContainer from './components/FormContainer/FormContainer';
import { FormContextProvider, FormContext } from './providers/FormContextProvider';
import './App.css'
// todo import modal


function App() {
  return (
    <FormContextProvider>
      <div className='react-form-app'>
        <Head/>
        <FormContainer/>
      </div>
    </FormContextProvider>
  );
}

export default App;
