import React, { Component } from 'react'
import TodoList from './todoList'


let ind = 0;
class InputFields extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.title,
            desc: props.desc,
            titleList: [],
            descList: [],
            dateList: [],
            date: props.date
        }
    }
    titleHandler = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    descHandler = (event) => {
        this.setState({
            desc: event.target.value
        })
    }
    GetInput = (e) => {
        e.preventDefault();
        let day;
        let currentDate = new Date()
        console.log(currentDate)
        let todoList = this.state.titleList
        let inputTitle = this.state.title
        let inputdesc = this.state.desc
        let todoDesc = this.state.descList
        day = this.daysInWords(currentDate.getDay());

        let inputDate = day + ", " + (parseInt(currentDate.getMonth()) + 1) + "/" + currentDate.getDate() + "/" + currentDate.getFullYear() + ". " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds()

        let todoDate = this.state.dateList

        todoList.push(inputTitle);
        todoDesc.push(inputdesc);
        todoDate.push(inputDate);

        this.setState({
            titleList: todoList,
            title: "",
            descList: todoDesc,
            inputdesc: "",
            dateList: todoDate,
            inputDate: ""
        })
        ind++;
    }
    daysInWords(day) {
        if (day === 1) {
            day = "Monday"
        }
        if (day === 2) {
            day = "Tuesday"
        }
        if (day === 3) {
            day = "Wednesday"
        }
        if (day === 4) {
            day = "Thursday"
        }
        if (day === 5) {
            day = "Friday"
        }
        if (day === 6) {
            day = "Saturday"
        }
        if (day === 7) {
            day = "Sunday"
        }
        return day
    }
    render() {

        return (
            <div className="todo-container table-responsive">
                <div className="App col" >
                    <div>
                        <h4>What to do?</h4>
                    </div>
                    <div className="dvInput-fields">
                        <form onSubmit={this.GetInput}>
                            <input type="text" id="txtTitle" value={this.state.title} placeholder="title" onChange={this.titleHandler} autocomplete = "off" required />
                            <br />
                            <textarea className="txt-textArea" placeholder="description ..." onChange={this.descHandler}></textarea>
                            <br />
                            <input type="submit" value="ADD" className="btnAdd" />
                            {this.state.title}
                        </form>
                    </div>
                </div>
                <TodoList title={this.state.titleList} desc={this.state.descList} date={this.state.dateList} />
            </div>
        )
    }

}

export default InputFields;