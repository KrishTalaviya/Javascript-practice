function renderTodoList(data) {
  const mainArea = document.getElementById("mainArea");
  mainArea.innerHTML = "";

  data.forEach((item) => {
    const childElement = document.createElement("div");
    childElement.className = "todo-item";

    const textWrapper = document.createElement("div");
    textWrapper.className = "todo-text";

    const titleSpan = document.createElement("span");
    titleSpan.innerHTML = `<strong>${item.title}</strong>`;

    const descSpan = document.createElement("span");
    descSpan.innerHTML = item.description;

    textWrapper.appendChild(titleSpan);
    textWrapper.appendChild(descSpan);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "Delete";

    // deleteBtn.onclick = function () {
    //   deleteTodo(item.id);
    // };

    childElement.appendChild(textWrapper);
    childElement.appendChild(deleteBtn);

    mainArea.appendChild(childElement);
  });
}
const data=[{
    id:1,
    title:"work",
    description:"working 2"
}]
window.setInterval(() => renderTodoList(data), 1000);


