import React from 'react'

let ind = 0
const TodoList = (props) => {
    let elemDisabler = true
    return (
        <div className="dvTable-list col">

            <button className="btnDeleteAll"
                onClick={() => {
                    document.querySelector(".container").innerHTML = null
                }}
            >Delete All</button>

            <h2 align="center">Lists</h2>
            <div className="container">
                {props.title.map((text, key) => {
                    ind = key
                    if (ind % 2 === 0) {
                        ind = "even";
                    }
                    else {
                        ind = "odd"
                    }
                    return (
                        <div className="dvMain" key={key}>
                            <div className={`${ind} listItem${key}`} id={key}>
                                <div className="tbl-List col" colspan="3">
                                    <input type="text" className="dvTitle" defaultValue={text} disabled={elemDisabler} />

                                    <div className="btnDeleteTitle" onClick={() => {
                                        let thisElem = document.querySelector(`.listItem${key}`)
                                        console.log(thisElem)
                                        thisElem.remove()
                                    }}>X</div>
                                </div>
                                <hr />
                                <textarea
                                    className="dvTitle dvDesc"
                                    style={{
                                        width: "100%",
                                    }}
                                    disabled={elemDisabler}
                                    defaultValue={props.desc[key]}
                                ></textarea>

                                <hr />
                                <div className="dvTitle dvDate">Added on: {props.date[key]}</div>
                                <div className="col EditOrDeleteText">
                                    <div className="btnEditTitle" onClick={() => {
                                        let mainElem = document.getElementById(key)
                                        if (elemDisabler === true) {
                                            elemDisabler = false
                                            mainElem.lastChild.firstChild.innerText = "Done";
                                            mainElem.childNodes[0].querySelector(".dvTitle").disabled = false
                                            mainElem.querySelector(".dvDesc").disabled = false
                                        }
                                        else if (elemDisabler === false) {
                                            elemDisabler = true
                                            mainElem.lastChild.firstChild.innerText = "Edit";
                                            mainElem.childNodes[0].querySelector(".dvTitle").disabled = true
                                            mainElem.querySelector(".dvDesc").disabled = true
                                        }

                                    }}>Edit</div>
                                </div>
                            </div>
                            <br />
                        </div>
                    )
                }
                )}

            </div>
        </div>
    )
}
export default TodoList