import React from 'react'

import Form from '../Form/Form';
import './FormContainer.css'

// todo container HTML
// todo container styling
// todo move head to App


const FormContainer = () => {
	return (
		<div className='form-container'>
			<h1>QuikPost</h1>
			<h4>Quickly and Easily Post a Job to QuikPost</h4>
			<div className="form-container-flexbox">
				<span className='image-box'>Image to go here</span>
				<Form/>
			</div>
		</div>
	)
}

export default FormContainer;
