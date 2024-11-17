let list = [];
if (localStorage.getItem("list")) {
  list = JSON.parse(localStorage.getItem("list"));
} else {
  localStorage.setItem("list", JSON.stringify(list));
}
export const addElement = (element) => {
  list = [...list, element];
  localStorage.setItem("list", JSON.stringify(list));
};
export const updateList = (data) => {
  list = data;
  localStorage.setItem("list", JSON.stringify(list));
};
export default list;
