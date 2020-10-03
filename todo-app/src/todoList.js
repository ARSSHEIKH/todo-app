import React from 'react'
let list = []
let ind = 0

const TodoList = (props) => {

    return (
        <div className="dvTable-list col">
            <h2 align="center">Lists</h2>
            <div className="container">
                {props.title.map((text, key) => {

                    if (key % 2 == 0) {
                        key = "even"
                    }
                    else {
                        key = "odd"
                    }

                    return (
                        <div>
                        <div className={key}>
                            <div className="tbl-List col" colspan="3">
                                <div className="dvTitle">{text}</div>
                                <div className="  btnDeleteTitle ">X</div>
                            </div>
                            <hr/>
                           
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

            {/* // <div className="tbl-List row">
                        //     <b>{text}</b>
                        // </div> */}

        </div>

    )
}
export default TodoList