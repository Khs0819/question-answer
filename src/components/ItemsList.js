import { Accordion, Row } from "react-bootstrap";
import { updateList } from "./list.js";
import { toast } from "react-toastify";
const ItemsList = ({ arr, update }) => {
  const notify = (message, type) => {
    if (type === "Error") {
      toast.error(message);
    } else {
      toast.success(message);
    }
  };
  const remove = (id) => {
    let list = arr.filter((element) => element.id !== id);
    updateList(list);
    update(list);
    notify("تم حذف السؤال بنجاح", "Success");
  };
  return (
    <Row className="my-3">
      <Accordion>
        {arr.length > 0 ? (
          arr.map((ele, i) => {
            return (
              <Accordion.Item key={i} eventKey={ele.id}>
                <Accordion.Header>
                  <div className="mx-auto">{ele.q}</div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="p-2 d-inline">{ele.a}</div>
                  <button
                    onClick={() => remove(ele.id)}
                    className=" button mx-auto"
                  >
                    مسح
                  </button>
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          <h3 className="text-center mt-3">لا يوجد أسئلة حاليا</h3>
        )}
      </Accordion>
      {arr.length > 0 ? (
        <button
          onClick={() => {
            updateList([]);
            update([]);
            notify("تم حذف كل الأسئلة بنجاح", "Success");
          }}
          className="button my-3 mx-auto edit"
        >
          مسح الكل
        </button>
      ) : null}
    </Row>
  );
};

export default ItemsList;
