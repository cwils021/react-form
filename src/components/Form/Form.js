//  todo add validation
import React from 'react';
import InputGroup  from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import BootForm from 'react-bootstrap/Form';

import { roles, industries, selectionStrings } from '../../Consts';
import useForm from '../../hooks/useForm';
import './Form.css';



const Form = () => {

	const { handleChange, showTech, handleSubmit, isSubmitting } = useForm();
	return (


			<BootForm
				className='form'
				onSubmit={handleSubmit}
			>
				<BootForm.Group controlId='Header'>
					<BootForm.Control
						size='lg'
						plaintext
						readOnly
						defaultValue="Fill in Job Details in the below form."
					/>
				</BootForm.Group>
				<InputGroup>
					<BootForm.Group controlId='company_name'>
						<BootForm.Label>
							Name of Company
						</BootForm.Label>
						<BootForm.Control
							name='company_name'
							as='input'
							type='string'
							placeholder='ABC Company'
							onBlur={handleChange}
						/>
					</BootForm.Group>
				</InputGroup>
				<InputGroup>
					<BootForm.Group controlId='role'>
						<BootForm.Label>
							Type of Role
						</BootForm.Label>
						<BootForm.Control
							name='role'
							as='select'
							onChange={handleChange}
						>
							{roles.map((role) => (
								<option key={roles.indexOf(role)}>{role}</option>
							))}
						</BootForm.Control>
					</BootForm.Group>
				</InputGroup>
				<InputGroup>
					<BootForm.Group controlId='industry'>
						<BootForm.Label>
							Type of Industry
						</BootForm.Label>
						<BootForm.Control
							name='industry'
							as='select'
							onChange={handleChange}
						>
							{industries.map((industry) => (
								<option key={industries.indexOf(industry)}>{industry}</option>
							))}
						</BootForm.Control>
					</BootForm.Group>
				</InputGroup>
				{showTech ?
					<InputGroup>
						<BootForm.Group controlId='technical_requirement'>
							<BootForm.Label>
								Does this role have any <b>Technical Requirements</b>?
							</BootForm.Label>
							<BootForm.Control
								name='technical_requirement'
								as='select'
								onChange={handleChange}
							>
								{selectionStrings.map((string) => (
									<option key={selectionStrings.indexOf(string)}>{string}</option>
								))}
							</BootForm.Control>
						</BootForm.Group>
					</InputGroup> : null
				}
				{
					!isSubmitting &&
					<Button
						type='submit'
						className='submit-form-btn'
					>
						Post Job
					</Button>
				}
			</BootForm>

	)


}

export default Form;
