import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Row, ListGroup, ListGroupItem, Container, Card, CardHeader, CardTitle, CardText, CardBody, CardFooter } from "reactstrap";
import { useParams, useNavigate } from "react-router-dom";

const SavedRecipesDetail = () => {
  const { id } = useParams();
  const [responseData, setResponseData] = useState([]);
  const [stepsArray, setStepsArray] = useState([]);
  const [ingredientsArray, setIngredientsArray] = useState([]);
  const [title, setTitle] = useState("")
  const navigate = useNavigate()


  return (

    <>
      <Container style={{
      }}>
        <div className="text-center">
          <button
          style={{
            backgroundColor: '#70BA89',
            fontFamily: 'TimesNewRoman',
          }}
          className="m-3 btn btnhover btn-lg text-white"
          onClick={() => navigate('/collections')}
                >GO BACK</button>
        </div>
      </Container>
    </>
  );
};
export default SavedRecipesDetail;