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

// merit
var art_merit=[67.05, 68.175, 66.55, 67.65, 68.6, 61.175, 66.7, 67.4, 61.625, 60.225]

// catchment
var art_ekiti=[61.45, 62.275, 59.65, "NIL", 64.325, "NIL", 58.25, 65.875, "NIL", "NIL"]
var art_lagos=[65.7, 66.7, 65.05, 66.075, 66.95, 54.975, 63.175, 60.275, "NIL", "NIL"]
var art_ogun=[64.2, 67.65, 63.075, 61.025, 68.175, 55.3, 66.375, 66.2, "NIL", "NIL"]
var art_ondo=[61, 63.25, 56.125, "NIL", 64.35, 52.25, 63.6, 62.4, 57.325, "NIL"]
var art_osun=[64.975, 65.55, 63.4, 57.8, 64.775, 57.625, "NIL", 63.825, "NIL", "NIL"]
var art_oyo=[64.525, 66.475, 64.5, 62.325, 66.525, 56.275, "NIL", 63.025, 54.7, 58.375]


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

// merit
[77.4, 74.675, 80.8, 70.875, 72.625, 71.55, 73.75, 72.525]

// catchment
var medicine_ekiti=[71.325, 69.875, 75.625, 63.5, 69.475, 69.75, 68.875, 68.4]
var medicine_lagos=[76.125, 74.25, 79.425, 70.8, 72.175, 67.55, 73.6, 72.325]
var medicine_ogun=[76.575, 73.375, 78.925, 67.25, 70.775, 66.55, 73.175, 71.3]
var medicine_ondo=["NIL", 73.9, 77.25, 65, 68.825, 68.475, 71.675, 71.375]
var medicine_osun=[74.525, 73.125, 80.275, 70.025, "NIL", 69.825, 73.475, 70.025]
var medicine_oyo=[76.55, 72.7, 79.75, 61.975, 71.85, 71.5, 72.725, 70.35]


// Science 
var science=["biochemistry", "botany", "cell biology & genetics", "chemistry", "computer science", "geology", "geophysics", "Marine biology", "fisheries", "mathematics", "industrial mathematics", "statistics", "microbiology", "physics", "zoology"]

// merit
var science_merit=[71.625, 63.35, 70.15, 67.775, 77.875, 68.675, 67.875, 66.1, 55.375, 69.925, 69.075, 69.475, 69.55, 66.1, 62.725]

// catchment
var science_ekiti=["NIL", 56.1, 62.625, 58.225, 73.775, 60.05, "NIL", "NIL", "NIL", 65, "NIL", 65.025, 60.975, 62.4, "NIL"]
var science_lagos=[65.875, 61.575, 67.175, 61.975, 75.525, 58.925, 64.975, 63.15, "NIL", 66.875, 68.875, 69.275, 66.825, 61.9, 62.7]
var science_ogun=[67.15, 61.625, 69.15, 67.7, 74.825, 65.175, 67.85, 65.25, "NIL", 67.9, 68.5, 69.325, 64.25, 63.25, 60.1]
var science_ondo=[67.3, 58.275, 65.625, 65.075, 74.3, "NIL", 67.65, 61.15, "NIL", 64.65, 61.65, 57.3, 66.675, 63.475, 59.025]
var science_osun=[66.95, 62.825, 63.2, 63.75, 75.2, 62.675, 62.95, 64.95, "NIL", 65.925, 64.225, "NIL", 64.75, 65.6, 55.75]
var science_oyo=[69.725, 58.425, 64.625, 59.9, 73.725, 57.775, 66.4, 61.275, "NIL", 61.875, 63.55, 68.15, 67.45, 64.45, 57.825]





// Social Science 
var social=["Economics", "geography", "mass communication", "political science", "psychology", "social work", "sociology"]

// merit
var social_merit=[72.875, 62.475, 72.125, 68.25, 70.05, 68.5, 67.725]

// catchment
var social_ekiti=[63.75, 51.35, 67.525, 62.375, 64.575, 67.05, 55.3]
var social_lagos=[70.35, 52.525, 69.15, 66.7, 65.525, 64.925, 63.8]
var social_ogun=[69.875, 58.525, 70.95, 65.725, 68.475, 65.45, 66.35]
var social_ondo=[67.275, 58.025, 65.5, 59.2, 60.375, "NIL", 56.175]
var social_osun=[64.1, 57.125, 70.8, 57.5, 66.225, 56.475, 64.3]
var social_oyo=[67.65, 53.825, 70.025, 65.35, 66.025, 67.575, 66.925]


app.get("/", (request, response)=>{
    day=new Date().getFullYear()
    // day= new Date().toLocaleDateString()
    console.log(day)
    response.render("index"), {fan:day}
})

app.get("/confirm", (request, response)=>{
    day=new Date().getFullYear()
    // day= new Date().toLocaleDateString()
    console.log(day)
    response.render("confirm"), {fan:day}
})

app.post("/home", (request, response)=>{
    response.redirect("/confirm")
})
app.post("/login", (request, response)=>{
    response.redirect("/login")
})
app.get("/login", (request, response)=>{ 
    day=new Date().getFullYear()
    response.render("login", {fan:day})
})
app.get("/signup", (request, response)=>{
    day=new Date().getFullYear()
response.render("signup", {fan:day})
})






app.get("*", (request, response)=>{
    day=new Date().getFullYear()
    // day= new Date().toLocaleDateString()
    console.log(day)
    response.render("error"), {fan:day}
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
// commit13
// commit14
// commit15
// commit16
// commit17
// commit18
// commit19
// commit20
// commit21
// commit22
// commit23
// commit24
// commit25
// commit26
// commit27
// commit28
// commit29
// commit30
// commit31
// commit32
// commit33
// commit34
// commit35
// commit36
// commit37
// commit38
// commit39
// commit40
// commit41
// commit42
// commit43
// commit44
// commit45
// commit46
// commit47
// commit48
// commit49
// commit50
// commit51
// commit52
// commit53
// commit54
// commit55
// commit56
// commit57
// commit58
// commit59
// commit60
// commit61