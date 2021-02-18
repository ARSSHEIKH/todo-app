let todoList = [];
const saveToDB=()=>{
    for(let i=0;i<lists.childElementCount;i++){

        todoList[i] = {
            SNO : lists.children[i].firstChild.firstChild.textContent.toString(),
            text : lists.children[i].firstChild.lastChild.firstChild.value.toString(),
            dateAdded : lists.children[i].firstChild.lastChild.lastChild.textContent.toString()
        }
    }
    firebase.database().ref(`/users/${user_Username}/todoList/`).update(todoList)
}