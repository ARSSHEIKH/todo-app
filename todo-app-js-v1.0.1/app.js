
        let lists = document.getElementById("listItems")
        let countList = 0
        function AddList() {
            let date = new Date()
            let text = document.getElementById("inpText")
            let trMain = document.createElement("tr");
            let tr = document.createElement("tr");
            let tdId = document.createElement("th");
            let td2 = document.createElement("td");
            let inpEdit = document.createElement("textarea");
            let editSubmit = document.createElement("button");
            let editSubmitText = document.createTextNode("Submit");
            tdId.setAttribute("scope", "row")
            inpEdit.setAttribute("type", "text")
            inpEdit.textContent=text.value
            inpEdit.setAttribute("class", "form-control")
            // td2.setAttribute("rowspan", "5")
            // td2.setAttribute("style", "5")
            td2.setAttribute("class", "td2Value")
            inpEdit.setAttribute("id", "inpEdit")
            editSubmit.setAttribute("id", "inpEditBtn")
            inpEdit.setAttribute("disabled", "true")
            editSubmit.setAttribute("disabled", "true")
            editSubmit.setAttribute("class", "btn btn-success btn-sm")
            editSubmit.setAttribute("onclick", "editSubmit(this)")
            let tdDate = document.createElement("td");
            tdDate.setAttribute("class", "tdDate")
            let trDelete = document.createElement("tr");
            let tdDelete = document.createElement("td");
            let btnDelete = document.createElement("button");
            let tdEdit = document.createElement("td");
            let btnEdit = document.createElement("button");
            trDelete.setAttribute("class", "trDelete")
            btnEdit.setAttribute("class", "btnEdit btn btn-outline-success")
            btnEdit.setAttribute("onclick", "editItem(this)")
            btnDelete.setAttribute("class", "btnDelete btn btn-outline-danger")
            btnDelete.setAttribute("onclick", "deleteItem(this)")
            let btnDeleteText = document.createTextNode("Delete");
            let btnEditText = document.createTextNode("Edit");
            tr.appendChild(tdId)
            tr.appendChild(td2)
            // tr.appendChild(tdDate)
            lists.appendChild(trMain)
            trMain.appendChild(tr)
            trMain.appendChild(trDelete)
            trDelete.appendChild(tdEdit)
            tdEdit.appendChild(btnEdit)
            trDelete.appendChild(tdDelete)
            tdDelete.appendChild(btnDelete)
            btnDelete.appendChild(btnDeleteText)
            // trDelete.appendChild(tdEdit)
            tdEdit.appendChild(btnEdit)
            btnEdit.appendChild(btnEditText)
            tdId.appendChild(document.createTextNode(++countList));
            td2.appendChild(inpEdit)
            td2.appendChild(editSubmit)
            td2.appendChild(tdDate)
            editSubmit.appendChild(editSubmitText)
            tdDate.appendChild(document.createTextNode(date));
            console.log(tr)
        }
        function deleteItem(param) {
            console.log(param.parentNode.parentNode.parentNode)
            param.parentNode.parentNode.parentNode.remove();
        }
        function editItem(param) {
            let editText = param.parentNode.parentNode.parentNode;
            console.log(editText)
            let inpText = editText.querySelector("#inpEdit")
            let inpEditBtn = editText.querySelector("#inpEditBtn")
            inpText.style.background="#fff"
            inpText.disabled = false
            inpEditBtn.disabled = false
        }
        function deleteAll() {
            console.log(lists)
            lists.innerHTML = ""
            countList=0
        }
        function editSubmit(param) {
            let parentTd = param.parentNode;

            let inpEdit = parentTd.querySelector("#inpEdit")
            let inpEditBtn = parentTd.querySelector("#inpEditBtn")
            inpEdit.style.background="rgb(63, 128, 158)"
            inpEdit.focus = true
            inpEdit.disabled = true
            inpEditBtn.disabled = true
        }
    