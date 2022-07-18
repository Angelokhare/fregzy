var express= require("express")
var body= require("body-parser")
var ejs = require("ejs")
const path= require("path")
const { request, response } = require("express")
var app = express()

app.use(body.urlencoded({extended:true}))
app.set("view engine", "ejs")
app.use(express.static("public"))




// ART
var art=["creative arts", "English", "French", "Russian", "History and Strategic Studies", "linguistics Igbo/Yoruba", "Chinese", "philosophy", "Christian religious studies", "Islamic religious studies"]



// Management Sciences
var management=["accounting", "actuarial science", "business administration", "finance", "er & HRM", "insurance"]

// Education 
var education=["adult education", "education economics", "business education", "education Islamic religious studies", "education igbo", "education English", "Early Childhood Education", "education Yoruba", "education French", "education history", "education Christian religious studies", "education geography", "educational administration", "educational foundations", "health education", "human kinetics education", "education biology", "education chemistry", "education home economics", "integrated science education", "education mathematics", "education physics", "technology education"]



// Engineering 
var engineering=["Biomedical Engineering", "chemical & petroleum engineering", "civil & environmental engineering", "computer engineering", "electrical & electronic engineering", "mechanical engineering", "metallurgical & metals engineering", "petroleum & gas engineering", "surveying & geoinformatics engineering", "systems engineering"]



// Environmental Science 
var environmental=["Architecture", "building", "estate management", "quantity surveying", "urban & regional planning"]



// Law
var law=["law"]



// Pharmacy 
var pharmacy=["pharmacy"]


// Medicine 
var medicine=["dentistry", "medical laboratory science", "medicine and surgery", "Nursing Science", "pharmacology", "physiology", "physiotherapy", "radiography"]



// Science 
var science=["biochemistry", "botany", "cell biology & genetics", "chemistry", "computer science", "geology", "geophysics", "Marine biology", "fisheries", "mathematics", "industrial mathematics", "statistics", "microbiology", "physics", "zoology"]



// Social Science 
var social=["Economics", "geography", "mass communication", "political science", "psychology", "social work", "sociology"]

app.get("/", (request, response)=>{
    day=new Date().getFullYear()
    // day= new Date().toLocaleDateString()
    console.log(day)
    response.render("index"), {fan:day}
})

app.post("/home", (request, response)=>{
    response.redirect("/")
})
app.listen(process.env.PORT || 3000, ()=>{ console.log("ready to launch!")})


// comimt1
// commit2
// commit3
// commit4
// commit5
// commit6
// commit7
// commit8
// commit9
// commit10
// commit11