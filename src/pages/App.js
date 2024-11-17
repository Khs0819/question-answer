import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormComp from "../components/FormComp.js";
import ItemsList from "../components/ItemsList.js";
import list from "../components/list.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
function App() {
  const [data, setData] = useState(list);

  const addItem = (element) => {
    setData([...data, element]);
  };
  const update = (elements) => {
    setData(elements);
  };
  return (
    <div className="almarai-regular">
      <Container>
        <Row className="mt-5">
          <Col sm="4" className="fs-3 text-center">
            أسئلة و أجوبة شائعة
          </Col>
          <Col sm="8">
            <FormComp addItem={addItem} />
            <ItemsList arr={data} update={update} />
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
