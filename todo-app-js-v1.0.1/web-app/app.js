const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "./");

app.use(express.urlencoded({extended:false}))
app.use(express.static(static_path))
app.set("view engine", "hbs");

app.get("/", (req, res)=>{
    res.render("index");
})
app.post("/", async(req, res)=>{
    try{
        console.log(req.body.todo-items);
        res.send(req.body.todo-items)

    }catch(error{
        res.status(400).(error)

    }
})
app.listen(port, ()=>{
    console.log(`server ${port}`) ;
})