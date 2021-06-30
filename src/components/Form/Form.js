//  todo add validation
import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import BootForm from "react-bootstrap/Form";

import { roles, industries, selectionStrings } from "../../Consts";
import useForm from "../../hooks/useForm";
// import './Form.css';
import Alert from "react-bootstrap/Alert";

const Form = () => {
  const {
    handleChange,
    showTech,
    handleSubmit,
    isSubmitting,
    errors,
    handleClose,
  } = useForm();
  return (
    <BootForm className="w-100 p-4" onSubmit={handleSubmit}>
      <BootForm.Group controlId="Header">
        <BootForm.Control
          size="lg"
          plaintext
          readOnly
          defaultValue="Fill in Job Details in the below form."
        />
        <hr />
      </BootForm.Group>
      <InputGroup hasValidation>
        <BootForm.Group controlId="company_name">
          <BootForm.Label className="font-weight-bold">
            Name of Company
          </BootForm.Label>
          <BootForm.Control
            name="company_name"
            as="input"
            type="string"
            placeholder="ABC Company"
            onBlur={handleChange}
            isInvalid={isSubmitting && errors.company_name}
          />
          <BootForm.Control.Feedback type="invalid">
            {isSubmitting && errors.company_name && (
              <span>{errors.company_name}</span>
            )}
          </BootForm.Control.Feedback>
        </BootForm.Group>
      </InputGroup>
      <InputGroup hasValidation>
        <BootForm.Group controlId="role">
          <BootForm.Label className="font-weight-bold">
            Type of Role
          </BootForm.Label>
          <BootForm.Control
            name="role"
            as="select"
            onChange={handleChange}
            isInvalid={isSubmitting && errors.role}
          >
            {roles.map((role) => (
              <option key={roles.indexOf(role)}>{role}</option>
            ))}
          </BootForm.Control>
          <BootForm.Control.Feedback type="invalid">
            {isSubmitting && errors.role && <span>{errors.role}</span>}
          </BootForm.Control.Feedback>
        </BootForm.Group>
      </InputGroup>
      <InputGroup hasValidation>
        <BootForm.Group controlId="industry">
          <BootForm.Label className="font-weight-bold">
            Type of Industry
          </BootForm.Label>
          <BootForm.Control
            name="industry"
            as="select"
            onChange={handleChange}
            isInvalid={isSubmitting && errors.industry}
          >
            {industries.map((industry) => (
              <option key={industries.indexOf(industry)}>{industry}</option>
            ))}
          </BootForm.Control>
          <BootForm.Control.Feedback type="invalid">
            {isSubmitting && errors.industry && <span>{errors.industry}</span>}
          </BootForm.Control.Feedback>
        </BootForm.Group>
      </InputGroup>
      {showTech ? (
        <InputGroup hasValidation>
          <BootForm.Group controlId="technical_requirement">
            <BootForm.Label className="font-weight-bolder">
              Does this role have any
              <span className="font-italic"> Technical Requirements</span>?
            </BootForm.Label>
            <BootForm.Control
              name="technical_requirement"
              as="select"
              onChange={handleChange}
              isInvalid={isSubmitting && errors.technical_requirement}
            >
              {selectionStrings.map((string) => (
                <option key={selectionStrings.indexOf(string)}>{string}</option>
              ))}
            </BootForm.Control>
            <BootForm.Control.Feedback type="invalid">
              {isSubmitting && errors.technical_requirement && (
                <span>{errors.technical_requirement}</span>
              )}
            </BootForm.Control.Feedback>
          </BootForm.Group>
        </InputGroup>
      ) : null}
      <hr />
      {!isSubmitting ? (
        <Button type="submit">Post Job</Button>
      ) : (
        <InputGroup>
          <Alert className="mt-5 p-2" variant="danger">
            <Alert.Heading>Uh oh! Errors Found!</Alert.Heading>
            <p> Please ammend the above errors and we can take it from there</p>
            <hr />
            <div className="d-flex justify-content-between">
              <b>Want to just start over?</b>
              <Button variant="outline-danger" onClick={handleClose}>
                Reset Form
              </Button>
            </div>
          </Alert>
        </InputGroup>
      )}
    </BootForm>
  );
};

export default Form;
