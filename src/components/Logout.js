import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Col,
  Row,
  Card,
  CardTitle
} from 'reactstrap';
import PastaImg from '../assets/imgs/pasta2.jpg'

const LogoutForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onSubmitHandler = e => {
    e.preventDefault();
    navigate('/login');
  }

  return (
    <Container>
      <Row>
        <Col className="d-flex align-items-center justify-content-center">
          <Card
            style={{
              width: '70rem',
              height: '40rem',
              fontFamily: 'TimesNewRoman',
              border: '1rem solid #70BA89'
            }}
          >
            <Row>
              <Col className="d-flex flex-column align-items-center justify-content-center">
                <div style={{
                  width: '30rem',
                  height: '38rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <img
                    src={PastaImg}
                    alt="Profile Picture"
                    style={{
                      display: 'inline',
                      margin: '0 auto',
                      height: 'auto',
                      width: '100%'
                    }}
                  />
                </div>
              </Col>
              <Col className="p-5">
                <CardTitle tag="h2" className="text-center">
                  Thank You For Visiting our Page<br></br>
                  Visit Again
                </CardTitle>
                <form onSubmit={onSubmitHandler}>
                  
                <div className="text-center mb-3">
                      <button
                        style={{
                          backgroundColor: '#70BA89',
                          fontFamily: 'TimesNewRoman',
                        }}
                        className="btn btnhover text-white">LOGOUT</button>
                    </div>
                  
                </form>
               
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container >
  );
};

export default LogoutForm;