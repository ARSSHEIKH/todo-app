import React from 'react';
import InputFields from './InputFields.js'
import './App.css';
import {firebaseConfig} from './firebase-config'
import DatabaseList from './databaseList'
let checker = false
let userIpAdd, todoItems, todoTotalCount;
async function load() {
  
  userIpAdd =  await (await fetch("https://api.ipify.org?format=json")).json();
  
  userIpAdd = userIpAdd.ip
  for (let i = 0; i < userIpAdd.length; i++) {
    if (userIpAdd[i] == ".") {
        userIpAdd = userIpAdd.toString().replace('.', '%DOT')
    }
  }
  var starCountRef = firebaseConfig.database().ref('todosUsers/'+userIpAdd)
  starCountRef.on('value', function(getPass) {
  const getUsers = getPass.hasChildren();
  console.log(getUsers)
  if(getUsers != true){
    firebaseConfig.database().ref('todosUsers/'+userIpAdd+'/0/').set({title: ""})
      console.log("User added")
  }
  else{
    let i=0
    var getData = firebaseConfig.database().ref('todosUsers/'+userIpAdd)
    getData.on('value', function(getPass) {
      todoItems = getPass;
      // if(getPass.val().i.index == "0"){
        todoTotalCount = getPass.numChildren()
        checker = true
      // }
    });
  }
});

}
function App() {
  return (
    
    <div className="main-container">

          <h1 align="center"> To-Do App</h1>
          <InputFields title="" desc="" date=""/>

    </div>
    );
}

export default App;
