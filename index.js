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

// merit
var management_merit=[74.1, 61.875, 68.65, 68.9, 66.95, 67.125]

// catchment
var management_ekiti=[66.95, 57.875, 60.675, 63.425, 50.325, 59.55]
var management_lagos=[71.525, 58.45, 65.725, 66.825, 65.85, 64.7]
var management_ogun=[72.85, 57.05, 67.025, 67.675, 65.3, 64.8]
var management_ondo=[68.9, "NIL", 59.9, 63.275, 59.075, 65.05]
var management_osun=[71.375, 55, 60.475, 65.925, 63.75, 63.725]
var management_oyo=[72.525, 53.675, 62.5, 65.225, 61.45, 62.525]


// Education 
var education=["adult education", "education economics", "business education", "education Islamic religious studies", "education igbo", "education English", "Early Childhood Education", "education Yoruba", "education French", "education history", "education Christian religious studies", "education geography", "educational administration", "educational foundations", "health education", "human kinetics education", "education biology", "education chemistry", "education home economics", "integrated science education", "education mathematics", "education physics", "technology education"]



// Engineering 
var engineering=["Biomedical Engineering", "chemical & petroleum engineering", "civil & environmental engineering", "computer engineering", "electrical & electronic engineering", "mechanical engineering", "metallurgical & metals engineering", "petroleum & gas engineering", "surveying & geoinformatics engineering", "systems engineering"]

// merit
var engineering_merit=[74.2, 76.675, 73.6, 79.3, 78.125, 78.8, 72.85, 73.925, 68.6, 76.475]

// catchment
var engineering_ekiti=["NIL", 62.075, 60.55, 72.875, 76.625, 62.725, 63.3, 72.375, 64.775, 74.9]

var engineering_lagos=["NIL", 70.75, 68.775, 78.275, 75.725, 74.9, 68.8, 73.075, 65.8, 75.025]

var engineering_ogun=[74.15, 74.725, 71.975, 78.125, 77.3, 73.925, 71.9, 72.7, 66.8, 75.55]

var engineering_ondo=[73.675, 74.7, 61, 77.275, 74.575, 71.6, 71.625, 69.925, 65.8, 71.225]

var engineering_osun=[71.275, 65.575, 72.375, 73.25, 72.9, 74.625, 72.375, 69.35, 66.9, 72.5]

var engineering_oyo=[73.225, 72.175, 70.625, 78.125, 74.275, 75.725, 70.7, 70.425, 67.4, 73.275]

// Environmental Science 
var environmental=["Architecture", "building", "estate management", "quantity surveying", "urban & regional planning"]

// merit
var environmental_merit=[74.725, 67.8, 65, 66.4, 62.25]

// catchment
var environmental_ekiti=[69.85, 58.65, 61.525, "NIL", "NIL"]
var environmental_lagos=[74.4, 65.575, 61.35, 65.8, 59.275]
var environmental_ogun=[72.475, 67.35, 64.1, 65.85, "NIL"]
var environmental_ondo=[68.675, 64.3, 60.875, "NIL", "NIL"]
var environmental_osun=[70.7, 65.175, 60.4, 58.6, 59.2]
var environmental_oyo=[73.475, "NIL", 57.075, 65.325, 56.375]

// Law
var law=["law"]

// merit
var law_merit=[76.5 ]

// catchment
var law_ekiti=[73.675 ]
var law_lagos=[74.225 ]
var law_ogun=[74.875 ]
var law_ondo=[73.9]
var law_osun=[73.2]
var law_oyo=[74.075]


// Pharmacy 
var pharmacy=["pharmacy"]

// merit
var pharmacy_merit=[76.125]

// catchment
var pharmacy_ekiti=[69.15 ]
var pharmacy_lagos=[74.975] 
var pharmacy_ogun=[73.05 ]
var pharmacy_ondo=[73.8]
var pharmacy_osun=[73.75]
var pharmacy_oyo=[73.275]


// Medicine 
var medicine=["dentistry", "medical laboratory science", "medicine and surgery", "Nursing Science", "pharmacology", "physiology", "physiotherapy", "radiography"]



// Science 
var science=["biochemistry", "botany", "cell biology & genetics", "chemistry", "computer science", "geology", "geophysics", "Marine biology", "fisheries", "mathematics", "industrial mathematics", "statistics", "microbiology", "physics", "zoology"]



// Social Science 
var social=["Economics", "geography", "mass communication", "political science", "psychology", "social work", "sociology"]

// merit
var social_merit=[72.875, 62.475, 72.125, 68.25, 70.05, 68.5, 67.725]

// catchment
var social_ekiti=[63.75, 51.35, 67.525, 62.375, 64.575, 67.05, 55.3]
var social_lagos=[70.35, 52.525, 69.15, 66.7, 65.525, 64.925, 63.8]
var social_ogun=[69.875, 58.525, 70.95, 65.725, 68.475, 65.45, 66.35]
var social_ondo=[67.275, 58.025, 65.5, 59.2, 60.375, NIL, 56.175]
var social_osun=[64.1, 57.125, 70.8, 57.5, 66.225, 56.475, 64.3]
var social_oyo=[67.65, 53.825, 70.025, 65.35, 66.025, 67.575, 66.925]


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
// commit12