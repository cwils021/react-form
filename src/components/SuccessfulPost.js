import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import React from 'react';
import useForm from '../hooks/useForm';

const SuccessfulPost = (props) => {

	const { show, values, handleClose } = useForm();

	const dict = {
		company_name: "Name of Company: ",
		role: "Type of Role: ",
		industry: "Type of Industry: ",
		technical_requirement: "Technical Skills Required: "
	};

	return (
		<Modal
			{...props}
			show={show}
			onEscapeDown={handleClose}
			onExit={handleClose}
			// onHide={handleClose}
			size="lg"
      		aria-labelledby="contained-modal-title-vcenter"
      		centered
		>
			<Modal.Header closeButton>
				<Modal.Title>Job Posted Successfully!</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>Your Job Posting</h4>
				<ul>
					{values.company_name && <li>{`${dict['company_name']}: ${values.company_name}`}</li>}
					{values.role && <li>{`${dict['role']}: ${values.role}`}</li>}
					{values.industry && <li>{`${dict['industry']}: ${values.industry}`}</li>}
					{values.technical_requirement && <li>{`${dict['technical_requirement']}: ${values.technical_requirement}`}</li>}
				</ul>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='outline-primary' onClick={(e)=>e.preventDefault()}>Home Page</Button>
				<Button variant='primary' onClick={handleClose}>Post Another Job</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default SuccessfulPost;
