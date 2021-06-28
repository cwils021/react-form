import React from 'react'
// import { FormContext } from '../../providers/FormContextProvider';

import Form from '../Form/Form';
import SuccessfulPost from '../SuccessfulPost';
import useForm from '../../hooks/useForm';
import './FormContainer.css'



const FormContainer = () => {
	const { show, validated } = useForm();
	return (
		<div className='form-container'>
			{(show && validated) ?
				<SuccessfulPost  /> :
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
