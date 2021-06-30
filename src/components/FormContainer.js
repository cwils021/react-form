import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import Form from "./Form/Form";
import SuccessfulPost from "./SuccessfulPost";
import useForm from "../hooks/useForm";

import fakeLogo from "../assets/fakeLogo.png";

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

  if (show && validated) {
    return (
      <div>
        <TitleBar values={[title, subtitle]} />
        <SuccessfulPost />
      </div>
    );
  }

  return (
    <div className="d-flex flex-column">
      <TitleBar values={[title, subtitle]} />
      <div className="jumbotron jumbotron-fluid d-flex flex-row flex-fill justify-content-around align-items-center m-5 ">
        <Card className="m-4">
          <Card.Img
            as={Image}
            src={fakeLogo}
            fluid={true}
            alt="Fake Logo"
            custom
          />
          <Card.ImgOverlay className="d-flex flex-column justify-content-between">
            <Card.Text className="d-flex flex-column-reverse justify-content-between flex-fill display-4 font-weight-bold text-dark">
              <p>Intuitive.</p>
              <p>Simple.</p>
              <p>Fast.</p>
            </Card.Text>
            <Card.Text className="d-flex flex-column justify-content-center align-items-center font-weight-bold">
              <p className="text-decoration-none">
                Quickly Post Open Postions From Anywhere
              </p>
              <Button className="w-50" variant="outline-primary">
                Learn More
              </Button>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Form />
      </div>
    </div>
  );
};

export default FormContainer;
