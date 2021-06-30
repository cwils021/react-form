import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import FormContainer from "./components/FormContainer";
import { FormContextProvider } from "./providers/FormContextProvider";
import "./App.css";

// todo import modal

function App() {
  return (
    <FormContextProvider>
      <div className="react-form-app">
        <FormContainer />
      </div>
    </FormContextProvider>
  );
}

export default App;
