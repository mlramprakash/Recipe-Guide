import Bowl from '../assets/imgs/bowl.jpg'
import Pie from '../assets/imgs/toast.jpg'
import { useNavigate } from 'react-router-dom';


import {
  Container,
  Col,
  Row,
  Card,
} from 'reactstrap';

function AboutUsPage(){
  return (
    <Container>
      <Card className="mb-3"
        style={{
          border: '1rem solid #70BA89'
        }}
      >
        <Row>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <div className="p-5"
            >
              <h2
                style={{
                  fontFamily: 'TimesNewRoman',
                }}
              >Our Mission</h2>
             <p>
              We believe that great meals are made not just from recipes but from the passion and creativity that individuals bring to their kitchens. Our mission is to empower people to explore, create, and share delicious dishes, fostering a vibrant community centered around food and cooking</p>
            <p>This simplified version condenses the information into a more straightforward and easy-to-understand format, highlighting the key features and benefits of your recipe guide web application.</p>
            </div>
          </Col>
          <Col className="col-auto d-flex flex-column justify-content-center align-items-center">
            <div>
              <img
                src={Bowl}
                alt="Bowl"
                style={{
                  maxWidth: '30rem'
                }}
              />
            </div>
          </Col>
        </Row>
      </Card>
      <Row className="d-flex align-items-center justify-content-center">
        <h2 
          className="text-center mt-5 mb-3"
          style={{
            fontFamily: 'TimesNewRoman',
          }}
        ></h2>
      </Row>
      <Card className="mb-3"
        style={{
          border: '1rem solid #70BA89',
          borderBottom: 'none'
        }}
      >
        <Row>
          <Col className="col-auto d-flex flex-column justify-content-center align-items-center">
            <img
              src={Pie}
              alt="Pie"
              style={{
                maxWidth: '30rem'
              }}
            />
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <div className="p-5">
              <h2
                style={{
                  fontFamily: 'TimesNewRoman',
                }}
              >About Us</h2>
                <p>Whether you're a beginner or a seasoned cook, [Recipe Guide Application] 
                  is here to support you on your cooking adventure. Come cook with us and explore the wonderful world of food!</p>

            </div>
          </Col>
        </Row>
        <div
          className="text-end"
          style={{
            backgroundColor: '#70BA89'
          }}
        >
        </div>
      </Card>
    </Container>

  );
};

export default AboutUsPage;