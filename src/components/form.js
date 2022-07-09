import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Form } from "react-bootstrap";
import { decimalToRoman, romanToDecimal } from "../features/convertSlice";
import "../App.css";

function FormConverter() {
   const [optionA, setOptionA] = useState("romanos");
   const [optionB, setOptionB] = useState("decimal");
   const [payload, setPayload] = useState("");
   const result = useSelector((state) => state.convert.value);
   const dispatch = useDispatch();

   const changeOption = (e) => {
      const option = e.target.value;
      const targetId = e.target.id;
      if (targetId === "a" && option === "decimal" && optionB === "decimal") {
         setOptionA("decimal");
         setOptionB("romanos");
      } else if (
         targetId === "a" &&
         option === "romanos" &&
         optionB === "romanos"
      ) {
         setOptionA("romanos");
         setOptionB("decimal");
      } else if (
         targetId === "b" &&
         option === "decimal" &&
         optionA === "decimal"
      ) {
         setOptionA("romanos");
         setOptionB("decimal");
      } else {
         setOptionA("decimal");
         setOptionB("romanos");
      }
   };

   const convert = (e) => {
      e.preventDefault();

      if (optionB === "romanos") {
         dispatch(decimalToRoman(payload));
      } else {
         dispatch(romanToDecimal(payload));
      }
   };

   return (
      <Col>
         <Form onSubmit={(e) => convert(e)}>
            <Row>
               <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label className="text-warning">De</Form.Label>
                     <Form.Select
                        value={optionA}
                        onChange={changeOption}
                        id="a"
                     >
                        <option value="romanos">Romanos</option>
                        <option value="decimal">Decimal</option>
                     </Form.Select>
                  </Form.Group>
               </Col>
               <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label className="text-warning">A</Form.Label>
                     <Form.Select
                        id="b"
                        value={optionB}
                        onChange={changeOption}
                     >
                        <option value="romanos">Romanos</option>
                        <option value="decimal">Decimal</option>
                     </Form.Select>
                  </Form.Group>
               </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label className="text-warning">{optionA.toUpperCase()}</Form.Label>
               <Form.Control
                  type="text"
                  onChange={(e) => setPayload(e.target.value)}
               />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label className="text-warning">{optionB.toUpperCase()}</Form.Label>
               <Form.Control type="text" value={result} disabled />
            </Form.Group>

            <button type="submit" className="btnnn">
               Convertir
            </button>
         </Form>
      </Col>
   );
}

export default FormConverter;
