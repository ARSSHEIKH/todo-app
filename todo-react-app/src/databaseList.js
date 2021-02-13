import { logRoles } from '@testing-library/react';
import React from 'react';
import TodoList from './todoList'

export default function DatabaseList(props){
    let i=0
    let arr=[];
    console.log("props", props);
    for(let j=0; j<props.totalChild; j++){
        arr[j] = (props.values.child(j).val())
        console.log(arr[j]);
        
        // return(
        //     <><TodoList title={arr[j].title} desc={arr[j].desc} date={""} />
        //     </>
        //     )
        
    }
    console.log(arr);
    // return <TodoList title={arr[0].title} desc={arr[0].desc} date={""}/>
           return <></>     
            
    
}
