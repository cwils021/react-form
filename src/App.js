import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ useContext } from 'react';


import FormContainer from './components/FormContainer/FormContainer';
import { FormContextProvider, FormContext } from './providers/FormContextProvider';
import './App.css'

// todo import modal


function App() {

  const [state, setState] = useContext(FormContext);

  const { validated, show } = state;

  return (
    <FormContextProvider>
      <div className='react-form-app'>
        <FormContainer validated={validated} show={show} />
      </div>
    </FormContextProvider>
  );
}

export default App;
