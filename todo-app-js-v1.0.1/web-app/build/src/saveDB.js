
const saveToDB=()=>{
    console.log(lists)
    for(let i=0;i<lists.childElementCount;i++){
        console.log(lists)

        todoList[i] = {
            SNO : lists.children[i].firstChild.firstChild.textContent.toString(),
            text : lists.children[i].firstChild.lastChild.firstChild.value.toString(),
            dateAdded : lists.children[i].firstChild.lastChild.lastChild.textContent.toString()
        
        }
    }
    const items = todoList;
    if(todoList.length === 0){
        console.log("yes")
        firebase.database().ref(`/users/${user_Username}/todoList/`).set({})

    }
    else
        deleteAll();
        firebase.database().ref(`/users/${user_Username}/todoList/`).set(items);

    
}