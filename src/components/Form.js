// todo getContext
//  todo add validation
// todo hide button after clicked
import React from 'react'
import InputGroup  from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import  BootForm   from 'react-bootstrap/Form';
import { roles, industries, selectionStrings } from '../Consts';


const Form = () => {
	return (
		<BootForm>
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
						type='input'
						placeholder='ABC Company'
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
					>

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
					>

					</BootForm.Control>
				</BootForm.Group>
			</InputGroup>
			<InputGroup>
				<BootForm.Group controlId='technical_requirement'>
					<BootForm.Label>
						Does this role have any <b>Technical Requirements</b>?
					</BootForm.Label>
					<BootForm.Control
						name='technical_requirement'
						as='select'
					/>
				</BootForm.Group>
			</InputGroup>
			<Button
				className='submit-form-btn'
				type='submit'
			>
				Post Job
			</Button>
		</BootForm>
	)
}

export default Form;
