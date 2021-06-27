// todo set state
// todo create provider
import React, { useState } from 'react';

const FormContext = React.createContext([
	{},
	() => { }
]);

const FormContextProvider = (props) => {
	const [state, setState] = useState({
		show: false,
		isSubmitting: false,
		values: {},
		errors: {},
	});

	return (
		<FormContext.Provider value={[state, setState]}>
			{props.children}
		</FormContext.Provider>
	);
}

export { FormContext, FormContextProvider }
