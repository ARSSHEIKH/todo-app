
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/todoApp-Desktop", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>{console.log("Connection Succeeded")})
.catch((err)=>{console.log(err)})

// collection creation
const todoListSchema = new mongoose.Schema({
    SerialNo: Number,
    desc: String,
    date: String,
})
// model 
const TodoList = new mongoose.model("TodoList", todoListSchema);

        let countList = 0
// get Data
const getDocument=async()=>{
    try{
        const result = await TodoList.find();
        console.log(result)
        if(result[0] !== undefined){
            try{
                for(let i=0;i<result.length;i++){
                    createNodes(result[i].desc, result[i].date, result[i].SerialNo);
                    countList = result[i].SerialNo;
                }
            }catch(err){
                console.log(err)
            }
        }
    }catch(err){
        console.log(err)
    }
}
getDocument();
        let lists = document.getElementById("listItems")
        function createNodes(text, date, countList){
            
            let inpEdit = document.createElement("textarea");
            let editSubmit = document.createElement("button");
            let editSubmitText = document.createTextNode("Submit");

            // To Create Elements
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
            
            // setting attributes
            tdId.setAttribute("scope", "row")
            tdId.setAttribute("id", "serialNo")
            td2.setAttribute("class", "td2Value")
            tdDate.setAttribute("class", "tdDate")

             // setting attributes for editting
            inpEdit.setAttribute("type", "text")
            inpEdit.setAttribute("id", "inpEdit")
            inpEdit.setAttribute("disabled", "true")
            inpEdit.setAttribute("class", "form-control")
            editSubmit.setAttribute("id", "inpEditBtn")
            editSubmit.setAttribute("disabled", "true")
            editSubmit.setAttribute("onclick", "editSubmit(this)")
            editSubmit.setAttribute("class", "btn btn-success btn-sm")
            btnEdit.setAttribute("onclick", "editItem(this)")
            btnEdit.setAttribute("class", "btnEdit btn btn-outline-success")
            
            // setting attributes for Deleting
            trDelete.setAttribute("class", "trDelete")
            btnDelete.setAttribute("class", "btnDelete btn btn-outline-danger")
            btnDelete.setAttribute("onclick", "deleteItem(this)")


            let btnDeleteText = document.createTextNode("Delete");
            let btnEditText = document.createTextNode("Edit");
            

            //appending to Childs Element
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
            inpEdit.textContent=text;
            tdDate.appendChild(document.createTextNode(date));

        }
        function AddList() {
            let text = document.getElementById("inpText");
            let date = new Date()
            createNodes(text.value, date, ++countList);
            const createDocument= async () =>{
                try{
                    const listItems = new TodoList({SerialNo: countList, desc: text.value, date: date})
                    const result = await listItems.save();
                    console.log(result);
                }
                catch(err){
                    console.log(err)
                }
            }
            createDocument();
        }
        function editItem(param) {
            let editText = param.parentNode.parentNode.parentNode;
            let inpText = editText.querySelector("#inpEdit")
            let inpEditBtn = editText.querySelector("#inpEditBtn")
            inpText.style.background="#fff"
            inpText.disabled = false
            inpEditBtn.disabled = false
        }
        function editSubmit(param) {
            let parentTd = param.parentNode;
            console.log(parentTd.parentNode.querySelector("#serialNo").textContent)
            let inpEdit = parentTd.querySelector("#inpEdit")
            let serialNo = parentTd.parentNode.querySelector("#serialNo").textContent
            let inpEditBtn = parentTd.querySelector("#inpEditBtn")
            inpEdit.style.background="rgb(63, 128, 158)"
            inpEdit.focus = true
            inpEdit.disabled = true
            inpEditBtn.disabled = true

            const updateDocument = async (SerialNo)=>{
                try{
                    const result = await TodoList.updateOne({SerialNo},{
                        $set:{
                            desc : inpEdit.value
                        }
                    })
                }catch(err){
                    console.log(err)
                }
            }
            updateDocument(serialNo)
        }
        function deleteItem(param) {
            let parentTd = param.parentNode.parentNode.parentNode;
            let serialNo = parentTd.querySelector("#serialNo").textContent

            console.log(parentTd)
            parentTd.remove();

            const deleteDocument = async (SerialNo)=>{
                try{
                    const result = await TodoList.deleteOne({SerialNo})
                }catch(err){
                    console.log(err)
                }
            }
            deleteDocument(serialNo)
        }
        function deleteAll() {
            console.log(lists)
            lists.innerHTML = ""
            const dropAllDocument = async ()=>{
                try{
                    const result = await TodoList.deleteMany({})
                }catch(err){
                    console.log(err)
                }
            }
            dropAllDocument()
            countList=0
        }
    