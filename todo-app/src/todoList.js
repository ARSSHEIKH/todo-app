import React from 'react'
let list = []
let ind = 0

const TodoList = (props) => {

    return (
        <div className="dvTable-list col">
            <h2 align="center">Lists</h2>
            <div className="container">
                {props.title.map((text,  key) => {
                ind = key
                    if (ind % 2 == 0) {
                        ind = "even"
                    }
                    else {
                        ind = "odd"
                    }

                    return (
                        <div className="dvMain">
                        <div className={ind}>
                            <div className="tbl-List col" colspan="3">
                                <div className="dvTitle">{text}</div>
                               
                                <div className="btnDeleteTitle">X</div>
                            </div>
                            <hr/>
                            <div className="dvTitle">{props.desc[key]}</div>
                               
                            <hr/>
                            <div className="dvTitle dvDate">Added on: {props.date[key]}</div>
                            
                            <div className="col EditOrDeleteText">
                                <div className="btnEditTitle">Edit</div>
                            </div>
                        </div>
                        <br/>
                        </div>
                    )
                }
                )}

            </div>
        </div>
    )
}
// function DeleteSelected(){
    
// }
export default TodoList