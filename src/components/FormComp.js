import { useRef } from "react";
import { Form, Row } from "react-bootstrap";
import { addElement } from "./list.js";
import { toast } from "react-toastify";
const FormComp = ({ addItem }) => {
  let question = useRef();
  let answer = useRef();
  let id = Math.random();
  const notify = (message, type) => {
    if (type === "Error") {
      toast.error(message);
    } else {
      toast.success(message);
    }
  };

  const add = (e) => {
    e.preventDefault();
    if (question.current.value === "" || answer.current.value === "") {
      notify("الرجاء ملىء الحقول أولا", "Error");
    } else {
      let element = {
        q: question.current.value,
        a: answer.current.value,
        id: id,
      };
      addElement(element);
      addItem(element);
      question.current.value = "";
      answer.current.value = "";
      notify("تمت اضافة السؤال بنجاح", "Success");
    }
  };
  return (
    <Row>
      <Form className="d-flex gap-3 form">
        <Form.Control type="text" placeholder="أدخل السؤال" ref={question} />
        <Form.Control type="text" placeholder="أدخل الاجابة" ref={answer} />
        <button onClick={add} className="button" type="submit">
          اضافة
        </button>
      </Form>
    </Row>
  );
};

export default FormComp;
