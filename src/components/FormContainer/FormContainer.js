import React, { useContext } from 'react'
import { FormContext } from '../../providers/FormContextProvider';

import Form from '../Form/Form';
import './FormContainer.css'



const FormContainer = () => {
	const [state, setState] = useContext(FormContext);
	const { show, validated } = state;
	return (
		<div className='form-container'>
			{(show && validated) ?
				<h1>Posted</h1> :
				<>
					<h1>QuikPost</h1>
					<h4>Quickly and Easily Post a Job to QuikPost</h4>
					<div className="form-container-flexbox">
						<span className='image-box'>Image to go here</span>
						<Form/>
					</div>
				</>
		}
		</div>
	)
}

export default FormContainer;
