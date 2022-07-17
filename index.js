var express= require("express")
var body= require("body-parser")
var ejs = require("ejs")
const path= require("path")
const { request, response } = require("express")
var app = express()

app.use(body.urlencoded({extended:true}))
app.set("view engine", "ejs")
app.use(express.static("public"))


app.get("/", (request, response)=>{
    day= new Date().toLocaleDateString()
    response.render("index"), {day:day}})
app.listen(process.env.PORT || 3000, ()=>{ console.log("ready to launch!")})


// comimt1
// commit2
// commit3
// commit4