/*********************************************************************************
 *                              Author: Chris Wilson                              *
 *                          Source Language: javascript                           *
 *             Repository: https://github.com/cwils021/react-form.git             *
 *                                                                                *
 *                            --- Code Description ---                            *
 *           Main App, Calls FormContainer Wrapped in a Context Provider          *
 *********************************************************************************/

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import FormContainer from "./components/FormContainer";
import { FormContextProvider } from "./providers/FormContextProvider";
import "./App.css";

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
