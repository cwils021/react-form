/*********************************************************************************
 *                              Author: Chris Wilson                              *
 *             Repository: https://github.com/cwils021/react-form.git             *
 *                                                                                *
 *                            --- Code Description ---                            *
 *               Form Context Provider, holds state for entire app                *
 *********************************************************************************/

import React, { useState } from "react";

const FormContext = React.createContext([{}, () => {}]);

const FormContextProvider = (props) => {
  const [state, setState] = useState({
    show: false,
    isSubmitting: false,
    values: {},
    errors: {},
    showTech: false,
    validated: false,
  });

  return (
    <FormContext.Provider value={[state, setState]}>
      {props.children}
    </FormContext.Provider>
  );
};

export { FormContext, FormContextProvider };
