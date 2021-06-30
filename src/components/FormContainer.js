/*********************************************************************************
 *                              Author: Chris Wilson                              *
 *             Repository: https://github.com/cwils021/react-form.git             *
 *                                                                                *
 *                            --- Code Description ---                            *
 *  Flexbox container for Form, flex-row on desktop/tablet and stacked flex-col   *
 *                                   on mobile                                    *
 *********************************************************************************/

import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import Form from "./Form";
import SuccessfulPost from "./SuccessfulPost";
import useForm from "../hooks/useForm";

import fakeLogo from "../assets/fakeLogo.png";

// Extract out to own file and import to clean up file
const TitleBar = ({ values }) => {
  const [title, subtitle] = values;

  return (
    <div className="d-flex-row bg-primary  text-center text-light">
      <p className="display-3">{title}</p>
      <h4 className="text-white">{subtitle}</h4>
    </div>
  );
};

const FormContainer = () => {
  const { show, validated } = useForm();

  const title = "QuikPost";
  const subtitle = "Quickly and Easily Post a Job to QuikPost";

  // if submission is valid then ->
  if (show && validated) {
    return (
      <div>
        <TitleBar values={[title, subtitle]} />
        <SuccessfulPost />
      </div>
    );
  }

  // else ->
  return (
    <div className="d-flex flex-column">
      <TitleBar values={[title, subtitle]} />
      <div className="jumbotron jumbotron-fluid d-md-flex flex-row flex-fill justify-content-around align-items-center m-5 ">
        {/*------ Logo Image ----- */}
        {/* Should decouple into own component */}
        <Card className="m-4">
          <Card.Img
            as={Image}
            src={fakeLogo}
            fluid={true}
            alt="Fake Logo"
            custom
          />
          <Card.ImgOverlay className="d-none d-md-flex flex-column justify-content-between">
            <Card.Text className="d-none d-md-flex flex-md-column-reverse justify-content-between flex-fill font-weight-bold text-dark display-4">
              <span>Intuitive.</span>
              <span>Simple.</span>
              <span>Fast.</span>
            </Card.Text>
            <Card.Text className="d-md-flex flex-column justify-content-center align-items-center font-weight-bold">
              <p>Quickly Post Open Postions From Anywhere</p>
              <Button className="w-50 mt-4" variant="outline-primary">
                Learn More
              </Button>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        {/*-----  Form Component ----- */}
        <Form />
      </div>
    </div>
  );
};

export default FormContainer;
