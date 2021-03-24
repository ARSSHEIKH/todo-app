
let countList = 0
let todoList = [];
let lists = document.getElementById("listItems")
let btnAddList = document.getElementById("btnAddList");
let user_Username;
let userLogin = "Not Login Yet";

btnAddList.addEventListener("click", AddList)

function createNodes(text, date, countList) {

    //#region To create elements
    //#region initializing variables to create elements
    let inpEdit = document.createElement("textarea");
    let editSubmit = document.createElement("button");
    let editSubmitText = document.createTextNode("Submit");

    let trMain = document.createElement("tr");
    let tr = document.createElement("tr");
    let tdId = document.createElement("th");
    let td2 = document.createElement("td");
    let tdDate = document.createElement("td");
    let trDelete = document.createElement("tr");
    let tdDelete = document.createElement("td");
    let btnDelete = document.createElement("button");
    let tdEdit = document.createElement("td");
    let btnEdit = document.createElement("button");

    //#endregion

    //#region setting attributes
    tdId.setAttribute("scope", "row")
    tdId.setAttribute("id", "serialNo")
    td2.setAttribute("class", "td2Value")
    tdDate.setAttribute("class", "tdDate")
    //#endregion

    //#region setting attributes for editting
    inpEdit.setAttribute("type", "text")
    inpEdit.setAttribute("id", "inpEdit")
    inpEdit.setAttribute("disabled", "true")
    inpEdit.setAttribute("class", "form-control")
    editSubmit.setAttribute("id", "inpEditBtn")
    editSubmit.setAttribute("disabled", "true")
    editSubmit.setAttribute("onclick", "editSubmit(this)")
    editSubmit.setAttribute("class", "btn btn-success btn-sm")
    btnEdit.setAttribute("onclick", "editItem(this); return false")
    btnEdit.setAttribute("class", "btnEdit btn btn-outline-success")
    //#endregion

    //#region setting attributes for Deleting
    trDelete.setAttribute("class", "trDelete")
    btnDelete.setAttribute("class", "btnDelete btn btn-outline-danger")
    btnDelete.setAttribute("onclick", "deleteItem(this)")

    let btnDeleteText = document.createTextNode("Delete");
    let btnEditText = document.createTextNode("Edit");
    //#endregion

    //#region appending to Childs Element
    tr.appendChild(tdId)
    tr.appendChild(td2)
    lists.appendChild(trMain)
    trMain.appendChild(tr)
    trMain.appendChild(trDelete)

    trDelete.appendChild(tdEdit)
    tdEdit.appendChild(btnEdit)
    btnEdit.appendChild(btnEditText)

    trDelete.appendChild(tdDelete)
    tdDelete.appendChild(btnDelete)
    btnDelete.appendChild(btnDeleteText)

    td2.appendChild(inpEdit)
    td2.appendChild(editSubmit)
    td2.appendChild(tdDate)
    editSubmit.appendChild(editSubmitText)

    tdId.appendChild(document.createTextNode(countList));
    inpEdit.textContent = text;
    tdDate.appendChild(document.createTextNode(date));

    //#endregion
    //#endregion
}
function AddList() {
    let text = document.getElementById("inpText");
    let date = new Date()
    createNodes(text.value, date, ++countList);
}
function editItem(param) {
    let editText = param.parentNode.parentNode.parentNode;
    let inpText = editText.querySelector("#inpEdit")
    let inpEditBtn = editText.querySelector("#inpEditBtn")
    inpText.style.background = "#fff"
    inpText.disabled = false
    inpEditBtn.disabled = false
}
function editSubmit(param) {
    let parentTd = param.parentNode;
    let inpEdit = parentTd.querySelector("#inpEdit")
    let serialNo = parentTd.parentNode.querySelector("#serialNo").textContent
    let inpEditBtn = parentTd.querySelector("#inpEditBtn")
    inpEdit.style.background = "rgb(63, 128, 158)"
    inpEdit.focus = true
    inpEdit.disabled = true
    inpEditBtn.disabled = true
}
function deleteItem(param) {
    let parentTd = param.parentNode.parentNode.parentNode;
    let serialNo = parentTd.querySelector("#serialNo").textContent
    parentTd.remove();
}
function deleteAll() {
    lists.innerHTML = "";
    countList = 0;
    todoList = [];
}
