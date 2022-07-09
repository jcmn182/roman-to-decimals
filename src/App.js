import { Container, Row, Col } from "react-bootstrap";
import Form from "./components/form";
import Title from "./components/Title";
import "./App.css";

function App() {
   return (
      <div className="App">
         <Container>
            <Title />
            <Row className="p">
               <Col />
               <Form />
               <Col />
            </Row>
         </Container>
      </div>
   );
}

export default App;
