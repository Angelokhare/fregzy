require("dotenv").config()
var express= require("express")
var body= require("body-parser")
var ejs = require("ejs")
var mongoose= require("mongoose")
const path= require("path")
const cropper= require("cropperjs")
const croppie= require("croppie")
const bcrypt= require("bcrypt")
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt= require("jsonwebtoken")
const nmail= require("nodemailer")
const userip= require("request-ip")
const axios = require("axios");
const session= require("express-session");
const passport= require("passport")
const {v4:uuid}=require("uuid")
const { request, response } = require("express")
const { verify } = require("crypto")
var app = express()
// const country = require("countries-list")
let Country = require('country-state-city').Country;
let State = require('country-state-city').State;



app.use(session({
  secret: "yes secret",
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(body.urlencoded({extended:true}))
app.set("view engine", "ejs")
app.use(express.static("public"))
// mongo "mongodb+srv://fregzy.3ki58ak.mongodb.net/myFirstDatabase" --username angelokhare
// mongodb+srv://angelokhare:${process.env.MONGODBDATABASE}@fregzy.3ki58ak.mongodb.net/fregzy
// mongodb://localhost:27017/fregzy
mongoose.connect("mongodb+srv://angelokhare:" + process.env.MONGODBDATABASE + "@fregzy.3ki58ak.mongodb.net/fregzy")
var newuser= new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    maxLength: 25
  },
  email: {
    type: String,
    required: true
  },
  dateBirth: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minLength: 8
  },
  verifiedemail: {
    type: Boolean,
    required: true
  },
  codeauto:{
    type: Boolean,
    required: true
  },
  linkweb: {
    type: String,
    required: true
  },
  forgotpass: {
    type: String,
    required: true
  },
  dateforgot:{
    type: Number,
    required: true
  },
  datelink:{
    type: Number,
    required: true
  },
  image:{
    type: String,
  }
})
var newletter= new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
})
var detail= new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
})
var User= new mongoose.model("User", newuser)
var Letter= new mongoose.model("Letter", newletter)
var Follower= new mongoose.model("Follower", detail)
var Following= new mongoose.model("Following", detail)















passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/secret",
  userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
},
function( accessToken, refreshToken, profile, cb){
 User.findOrCreate({googleId: profile.id}, function(err, user){
  return cb(err, user)
 });
}
))


















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
// dataffffffffffffffffffffffffffffffffffffffff




var lame=[]
var country_data=[]
var country_code=[]
var edit_country=Country.getAllCountries()
for(let i=0; i<250; i++){
    var new_country=edit_country[i].name
    country_data.push(new_country)
    }
    for(let i=0; i<250; i++){
        var new_code=edit_country[i].isoCode
        country_code.push(new_code)
        }
      var gencode=""  
      var global_error_code=""
      var jwtcode=""
console.log(country_data)
console.log(new_code)
console.log(country_code)
var globallinkquery=""

globalsignemail=""
globalsignfullname=""
globalsignusername=""
globalsigndate= ""
globalsigncountry= ""
globalsignpassword=""
globalsignconfirm=""
globalsigngender=""
  app.get("/user-authenticate", vetty, (request, response)=>{
jwt.verify(request.token, "angelo", (err, authuser)=>{
if(err){
  response.send("sorry")
}
else{
    var day=new Date().getFullYear()
    // console.log(typeof request.query)
    // if(typeof(request.query)===undefined){
    //     response.render("error", {fan:day})
    // }
    // else(

    response.render("authenticate", {fan:day, global: global_error_code})
    // )
  }
  })
})



app.get("/su", (request, response)=>{
  response.render("summary")
})



app.get("/password-recovery",(request, response)=>{
  day=new Date().getFullYear()
  var linkquery= request.query.check_password
console.log(linkquery)

if(linkquery==undefined){
  response.redirect("/login")
}
else{
  var forgotpasslist=[]
User.find({}, function(err, users) {
  for (let x in users){
   var combineemail=users[x].forgotpass
   forgotpasslist.push(combineemail)
  }
  console.log(forgotpasslist)

if(forgotpasslist.includes(linkquery)){
  User.findOne({forgotpass:linkquery}, (err, found)=>{

    var checkingForgetTime= new Date().getTime() - found.dateforgot
if(checkingForgetTime > 300000){
  day=new Date().getFullYear()
  // day= new Date().toLocaleDateString()
  // console.log(day)
  response.render("error", {fan:day})
}
else{
    var checkpassing=""
    response.render("passwordrecovery", {fan:day, pad:checkpassing, pass1:checkpassing, pass2:checkpassing})
}
  })
  globallinkquery= linkquery
}
else{
  day=new Date().getFullYear()
    // day= new Date().toLocaleDateString()
    // console.log(day)
    response.render("error", {fan:day})
}
}
)
}

})


var globalview=""
var userprof=""
var globaluser_route=""
var siginverify=""
var emailsigncode=""
   var day=new Date().getFullYear()
app.get("/", (request, response)=>{
   var day=new Date().getFullYear()
    // day= new Date().toLocaleDateString()
    console.log(day)
    response.render("index", {fan:day})
})
var emailcheck=""
var user_profile= globaluser_route
app.get("/:jbk", (request, response)=>{
  var day=new Date().getFullYear()
    var user_route= userprof +"-dashboard"
    var user_profile= userprof +"-profile"
console.log(userprof)
console.log(user_route)
    if(request.params.jbk.toLowerCase()=="login"){
        day=new Date().getFullYear()
        var usern=""
        var passloginpost=""
        var userres=""
        var userpasscheck=""
        response.render("login", {fan:day, user:usern, pass:passloginpost, usernotfound:userres, passnotfound:userpasscheck})
    }
    else if(request.params.jbk.toLowerCase()=="signup"){
      var signusernamelist=[]
      var signemaillist=[]
    User.find({}, function(err, users) {
      for (let x in users) {
       var combinename=users[x].username
       signusernamelist.push(combinename)
       var combineemail=users[x].email
       signemaillist.push(combineemail)
      }
    
      var edit_country=Country.getAllCountries()
        day=new Date().getFullYear()
        var bn=""
  response.render("signup", {fullname:bn, username:bn, date:bn, gender:"Male", email:bn, countryf:"Nigeria", password: bn, confirm:bn, character:bn, fan:day, country:edit_country, pas:bn, signemaillist:signemaillist, signusernamelist:signusernamelist, chock:bn,})

    })
    }

  else if(request.params.jbk.toLowerCase()=="suggestion"){
    day=new Date().getFullYear()
response.render("suggestion", {fan:day})

}
else if(request.params.jbk.toLowerCase()=="careers"){
  day=new Date().getFullYear()
  response.render("job", {fan:day})
}
else if(request.params.jbk.toLowerCase()=="account-recovery"){
  day=new Date().getFullYear()
  response.render("accountrecovery", {fan:day, det:emailcheck})
}
else if(request.params.jbk.toLowerCase()=="verify-email"){
  day=new Date().getFullYear()
    response.render("verifyemail", {fan: day, global:emailsigncode})

}
    else if (request.params.jbk.toLowerCase()==user_route){
    day=new Date().getFullYear()
    var greet= ''
    var time= new Date().getHours()
    console.log(time)
    if(time<12){
        greet="Good Morning"
        console.log(greet)
    }
    else if(time>=12 && time<18){
        greet="Good Afternoon"
        console.log(greet)
    }
    else if(time>=18 && time<21){
        greet="Good Evening"
        console.log(greet)
    }
    else{
        greet="Good Night"
        console.log(greet)
    }
console.log(greet)
    response.render("dashboard", {fan:day, username: userprof, greet:greet})
}
else if (request.params.jbk.toLowerCase()==globaluser_route){
    var edit_country=Country.getAllCountries()
    console.log(globalview)
    var proflink= request.query.user_authenticate
    if(proflink==undefined){
      response.redirect("/login")
    }
    else{
    var viewlist=[]
    User.find({}, function(err, users) {
      for (let x in users){
       var combineemail=users[x].linkweb
       viewlist.push(combineemail)
      }
   if(viewlist.includes(proflink)){

      User.findOne({linkweb:proflink}, (err, found)=>{
        var slicingCountry= found.country.slice(0,1).toUpperCase()
        var checkingSlicedCountry= slicingCountry + (found.country.slice(1, (found.country.length)))
        console.log(checkingSlicedCountry)
        var slicingGender= found.gender.slice(0,1).toUpperCase()
        var checkingSlicedGender= slicingGender + (found.gender.slice(1, (found.gender.length)))
        console.log(checkingSlicedGender)
        response.render("profile", { username:found.username, fullname:found.fullname, countryf:checkingSlicedCountry, email:found.email, gender:checkingSlicedGender, date:found.dateBirth, country:edit_country, countrt_fact:country_data, country_code:country_code})
        })
      }
   else{
        day=new Date().getFullYear()
          // day= new Date().toLocaleDateString()
          // console.log(day)
          response.render("error", {fan:day})
      }
      })
}
}
else if (request.params.jbk.toLowerCase()=="push-code"){


  var ty= uuid()
  var ui=ty.replaceAll("-", "e")
  var sed= ui.slice(15, 20)
  siginverify= sed
  console.log(sed)

var transporter = nmail.createTransport({
service: 'gmail',
auth: {
   user: process.env.USER_GMAIL,
   pass: process.env.GMAIL_PASSWORD
}
});

const mailOptions = {
from:' "Fregzyapp 🌳" <angelobeckan794@gmail.com>', // sender address
bcc: globalsignemail, // list of receivers
subject: 'Email verification', // Subject line
html: `
<style>
@import url('https://fonts.googleapis.com/css2?family=DynaPuff&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto');
.ve{
display: inline-block;
padding: 2px 25px;
}
.docking {
list-style: none;
} 
</style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div style="background-color: #fff;">
<img style="width:100px; display:block; margin-left:auto; margin-right:auto;" src=" https://fregzyapp.herokuapp.com/static/fullfregzy.png" alt="fregzy name">
<p style="font-weight: 700; font-family: Roboto, sans-serif; font-size:16px; color: #000" >Hello <span style="color: #1C3879; text-transform: capitalize;">${globalsignusername}</span>,</p>
<img style="width:100px; display:block; margin-left:auto; margin-right:auto; border-radius:15px;" src="https://fregzyapp.herokuapp.com/static/chill.png" alt="celebration">
<div style="margin: 0 20px;">
<h1 style=" text-align:center; font-family: Roboto, sans-serif; font-size:14px; color: #000; margin-bottom:40px;" >Welcome to Fregzy -we are excited you are <span style="color: #1C3879; font-family: Roboto, sans-serif; font-width: 700">here!</span>.</h1>
<h1 style=" text-align:center; font-family: Roboto, sans-serif; font-size:14px; color: #000; margin-bottom:40px;" >Fregzy is an application that provides educational services and helps you enhance your academic skills and<span style="color: #1C3879; font-family: Roboto, sans-serif; font-width: 700"> assessment flexibility</span>.</h1>

<h1 style="font-family: Roboto, sans-serif; font-size:14px; color: #000; text-align:center;" >Please verify your email address to finish setting up your <span style="color: #1C3879;">Fregzy</span> account, in other to have full access to all services. Use the code below:</h1>
<h1 style="font-weight:700; font-family: Roboto, sans-serif; font-size:25px; color: #1C3879; text-align:center;" >${siginverify}</h1>
<div style="display:block; margin-left:auto; margin-right:auto;">
<img class="" style="width: 350px; display:block; margin-left:auto; margin-right:auto;" src=" https://fregzyapp.herokuapp.com/static/together.png" alt="">
</div>

<h1 style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:30px; color: #1C3879; text-align:center;" >Thank you for signing up</h1>
<p style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:14px; color: #000;" >Don't forget to rate us.</p>
<p style="font-family: Roboto, sans-serif; font-size:14px; color: #000; font-weight:700;"  >We also strongly recommend you <a href="www.fregzyapp.herokuapp.com" style="color: #4f0e0e; font-family: Roboto, sans-serif; font-width: 700">turn on two-factor authentication for your account</a>. It only takes a few minutes and dramatically improves your account security.</p>
<p style="font-weight: 700; font-family: Roboto, sans-serif; font-size:14px; color: #4f0e0e"> Fregzy <span style="color: #000">cares</span></p>
<ul style=" list-style: none; ">
<li style="display: inline-block; padding: 2px 1px;">
<img style="width:15%" src="https://img.icons8.com/fluency/240/000000/twitter.png"/>
</li>
<li style="display: inline-block; padding: 2px 1px; margin-left:-10%">
<img style="width:15%" src="https://img.icons8.com/fluency/240/000000/instagram-new.png"/>
</li>
<li style="display: inline-block; margin-left:-10px">
<img style="width:15%" src="https://img.icons8.com/color/240/000000/linkedin-circled--v1.png"/>
</li>
<li style="display: inline-block; margin-left:-10px">
<img style="width:15%" src="https://img.icons8.com/windows/240/000000/github.png"/>
</li>
</ul><br>
<h5 style="color: #000; margin-top: -1%; font-family: 'Varela Round', sans-serif; text-align:center;" class="copyright">Copyright © 2022- ${new Date().getFullYear()} <span style="font-weight: 700;">Fregzy</span> </h5>
<hr>
<img style="width:550px; display:block; margin-left:auto; margin-right:auto; border-radius:15px;" src="https://fregzyapp.herokuapp.com/static/castle.png" alt="celebration">
</div>
</div>
`,// plain text body


}
transporter.sendMail(mailOptions, function (err, info) {
if(err)
console.log(err)
else{
console.log(info);
}
}); 

response.redirect("/verify-email")
}
else if (request.params.jbk.toLowerCase()=="resend-code"){
    global_error_code= ""
    var ty= uuid()
    var ui=ty.replaceAll("-", "e")
    var bt= ui.slice(15, 20)
    gencode=bt
    console.log(bt)
    var code_user=userprof
var transporter = nmail.createTransport({
service: 'gmail',
auth: {
       user: process.env.USER_GMAIL,
       pass: process.env.GMAIL_PASSWORD
   }
});

const mailOptions = {
from:' "Fregzyapp 🌳" <angelobeckan794@gmail.com>', // sender address
bcc: "edmundobiegue@gmail.com, pinocchio794@gmail.com", // list of receivers
subject: 'Your Authentication Code!', // Subject line
html: `
<style>
@import url('https://fonts.googleapis.com/css2?family=DynaPuff&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto');
.ve{
    display: inline-block;
    padding: 2px 25px;
  }
  .docking {
    list-style: none;
  } 
</style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div style="width:100%; background-color: #fff;">
<img style="width:70px; margin-left:auto; margin-right:auto; display:block;" src=" https://fregzyapp.herokuapp.com/static/icon1.webp" alt="">
</div>
<p style="font-weight: 600; font-family: Roboto, sans-serif; font-size:16px; color: #000" >Hello <a style="color: #1C3879; text-transform: capitalize; text-decoration: none;">${code_user}</a>,</p>
<div style="margin: 0 20px;">
<p style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:14px; color: #000" >Someone tried to log in to your <span style="color: #1C3879; font-family: Roboto, sans-serif; font-width: 700">Fregzy</span> account with a new Device.</p>
<p style="font-weight: 500;  font-family: Roboto, sans-serif; font-size:14px; color: #000" >If this was you, Please use the following code to log in:</p>
<p style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:20px; color: #1C3879" >${bt}</p>
<p style="font-weight: 500;  font-family: Roboto, sans-serif; font-size:12px; color: #000" >If you don't recognize this activity, <a href="www.fregzyapp.herokuapp.com" style="color: #4f0e0e; font-family: Roboto, sans-serif; font-width: 700;">Please reset your password</a></p>
<p style="font-weight: 500;  font-family: Roboto, sans-serif; font-size:12px; color: #000"  >We also strongly recommend you <a href="www.fregzyapp.herokuapp.com" style="color: #4f0e0e; font-family: Roboto, sans-serif; font-width: 700">turn on two-factor authentication for your account</a>. It only takes a few minutes and dramatically improves your account security.</p><br><br>
<p style="font-weight: 700; font-family: Roboto, sans-serif; font-size:14px; color: #4f0e0e"> Fregzy <span style="color: #000">cares</span></p>
<hr>
<ul style=" list-style: none; ">
<li style="display: inline-block; padding: 2px 1px;">
  <img style="width:15%" src="https://img.icons8.com/fluency/240/000000/twitter.png"/>
</li>
<li style="display: inline-block; padding: 2px 1px; margin-left:-10%">
<img style="width:15%" src="https://img.icons8.com/fluency/240/000000/instagram-new.png"/>
</li>
<li style="display: inline-block; margin-left:-10px">
 <img style="width:15%" src="https://img.icons8.com/color/240/000000/linkedin-circled--v1.png"/>
</li>
<li style="display: inline-block; margin-left:-10px">
<img style="width:15%" src="https://img.icons8.com/windows/240/000000/github.png"/>
</li>
</ul><br>
<h5 style="color: #000; margin-top: -1%; font-family: 'Varela Round', sans-serif; text-align:center;" class="copyright">Copyright © 2022- ${new Date().getFullYear()} <span style="font-weight: 700;">Fregzy</span> </h5>
</div>
<img style="width:550px; display:block; margin-left:auto; margin-right:auto; border-radius:15px;" src="https://fregzyapp.herokuapp.com/static/castle.png" alt="celebration">
`,// plain text body


}
transporter.sendMail(mailOptions, function (err, info) {
  if(err)
    console.log(err)
  else{
    console.log(info);
  }
}); 
    response.redirect("/user-authenticate")

}

    else{
response.redirect("/")
    }
})


app.post("/jobs", (request, response)=>{
  response.redirect("/careers")
})


app.post("/get-started", (request, response)=>{

  if(siginverify != request.body.code){
    emailsigncode="Invalide code"
    response.redirect("/verify-email")
  }
  else{
    var conditions = { username: globalsignusername,};
    var update = { verifiedemail: true };
  User.findOneAndUpdate(conditions, update, function (err){
  if (err){
      response.json('nope');
  }
  else{
     emailsigncode=""
    day=new Date().getFullYear()
    response.render("summary", {fan:day})
    // response.render("signemailver", {fan:day})
  }
})
}
})

// If the filter condition is empty, it means all
// User.remove({}, function ( err ) { 
//   console .log( "success" );
// });

// const adduser= new User({
//   fullname:"fullname",
//   username: "signusername",
//   dateBirth: "signdate",
//   country: "signcountry",
//   gender: "signgender",
//   email: "signemail",
//   password: "hashsssssssssssssssssssssssssssssssss",
//   verifiedemail: "no",
//   codeauto: "no",
//   forgotpass: "yuu",
//   linkweb:"jhug",
//   dateforgot: new Date().getTime(),
//   datelink: new Date().getTime()
// })

// adduser.save(function(err){
//   if(err){
//     console.log(err)
//   }
//   else{
//   }
// })






app.post("/signup", (request, response)=>{
  var signfullname= request.body.fullname.toLowerCase().trim()
  var signusername= request.body.username.toLowerCase().trim()
  console.log(signusername)
  var signdate= request.body.date.toLowerCase().trim()
  var signgender= request.body.gender.toLowerCase().trim()
  var signemail= request.body.email.toLowerCase().trim()
  console.log(signemail + "tt")
  var signcountry= request.body.country.toLowerCase()
  var signpassword= request.body.password
  var signconfirm= request.body.confirm


  var signusernamelist=[]
  var signemaillist=[]
User.find({}, function(err, users) {
  for (let x in users) {
   var combinename=users[x].username
   signusernamelist.push(combinename)
   var combineemail=users[x].email
   signemaillist.push(combineemail)
  }


  if(signusername.includes(" ") && signpassword != signconfirm){
    day=new Date().getFullYear()
    var edit_country=Country.getAllCountries()
    var newsignfullname= signfullname
    var newsignusername= signusername
    var newsigndate= signdate
    var newsigngender= signgender
    var newsignemail= signemail
    var newsigncountry= signcountry
    var newsignpassword= signpassword
    var newsignconfirm= signconfirm
    var chs="Space and Special characters not allowed!"
    var fh="Password doesn't match!"
    var sd=""

    var slicingCountry= newsigncountry.slice(0,1).toUpperCase()
    var checkingSlicedCountry= slicingCountry + (newsigncountry.slice(1, (newsigncountry.length)))
    console.log(checkingSlicedCountry)

    var slicingGender= newsigngender.slice(0,1).toUpperCase()
    var checkingSlicedGender= slicingGender + (newsigngender.slice(1, (newsigngender.length)))
    console.log(checkingSlicedGender)
  
    response.render("signup", {fullname:newsignfullname, username:newsignusername, date:newsigndate, email:newsignemail, countryf:checkingSlicedCountry, password: newsignpassword, confirm:newsignconfirm, character:chs, fan:day, country:edit_country, pas:fh, chock:sd, signemaillist:signemaillist, signusernamelist:signusernamelist, gender:checkingSlicedGender})
  }


else if(signusername.includes(" ")){
  day=new Date().getFullYear()
  var edit_country=Country.getAllCountries()
  var newsignfullname= signfullname
  var newsignusername= signusername
  var newsigndate= signdate
  var newsigngender= signgender
  var newsignemail= signemail
  var newsigncountry= signcountry
  var newsignpassword= signpassword
  var newsignconfirm= signconfirm
  var chs="Space and Special characters not allowed!"
  var fh=""

  var slicingCountry= newsigncountry.slice(0,1).toUpperCase()
  var checkingSlicedCountry= slicingCountry + (newsigncountry.slice(1, (newsigncountry.length)))
  console.log(checkingSlicedCountry)

  var slicingGender= newsigngender.slice(0,1).toUpperCase()
  var checkingSlicedGender= slicingGender + (newsigngender.slice(1, (newsigngender.length)))
  console.log(checkingSlicedGender)


  response.render("signup", {fullname:newsignfullname, username:newsignusername, date:newsigndate, email:newsignemail, countryf:checkingSlicedCountry, password: newsignpassword, confirm:newsignconfirm, character:chs, fan:day, country:edit_country, pas:fh, chock:fh, signemaillist:signemaillist, signusernamelist:signusernamelist, gender:checkingSlicedGender})
}
else if(signpassword != signconfirm){
 var day=new Date().getFullYear()
  var edit_country=Country.getAllCountries()
  var newsignfullname= signfullname
  var newsignusername= signusername
  var newsigndate= signdate
  var newsigngender= signgender
  var newsignemail= signemail
  var newsigncountry= signcountry
  var newsignpassword= signpassword
  var newsignconfirm= signconfirm
  var chs=""
  var fh="Password doesn't match!"

  var slicingGender= newsigngender.slice(0,1).toUpperCase()
    var checkingSlicedGender= slicingGender + (newsigngender.slice(1, (newsigngender.length)))
    console.log(checkingSlicedGender)
  

  var slicingCountry= newsigncountry.slice(0,1).toUpperCase()
  var checkingSlicedCountry= slicingCountry + (newsigncountry.slice(1, (newsigncountry.length)))
  console.log(checkingSlicedCountry)

  response.render("signup", {fullname:newsignfullname, username:newsignusername, date:newsigndate, email:newsignemail, countryf:checkingSlicedCountry, password: newsignpassword, confirm:newsignconfirm, character:chs, fan:day, country:edit_country, pas:fh, chock:chs, signemaillist:signemaillist, signusernamelist:signusernamelist, gender:checkingSlicedGender})
}

else{
  var usernamelist=[]
  var emaillist=[]
User.find({}, function(err, users) {
  for (let x in users) {
   var combinename=users[x].username
   usernamelist.push(combinename)
   var combineemail=users[x].email
   emaillist.push(combineemail)
  }
  console.log(usernamelist)
  console.log(emaillist)

  if(usernamelist.includes(signusername) && emaillist.includes(signemail)){
    day=new Date().getFullYear()
    var edit_country=Country.getAllCountries()
    var newsignfullname= signfullname
    var newsignusername= signusername
    var newsigndate= signdate
    var newsigngender= signgender
    var newsignemail= signemail
    var newsigncountry= signcountry
    var newsignpassword= signpassword
    var newsignconfirm= signconfirm
    var chs="Username is already taken!"
    var echs="Email is already taken!"
    var fh=""
  
    var slicingCountry= newsigncountry.slice(0,1).toUpperCase()
    var checkingSlicedCountry= slicingCountry + (newsigncountry.slice(1, (newsigncountry.length)))
    console.log(checkingSlicedCountry)

    var slicingGender= newsigngender.slice(0,1).toUpperCase()
    var checkingSlicedGender= slicingGender + (newsigngender.slice(1, (newsigngender.length)))
    console.log(checkingSlicedGender)
  

    response.render("signup", {fullname:newsignfullname, username:newsignusername, date:newsigndate, email:newsignemail, countryf:checkingSlicedCountry, password: newsignpassword, confirm:newsignconfirm, character:chs, fan:day, country:edit_country, pas:fh, chock:echs, signemaillist:signemaillist, signusernamelist:signusernamelist, gender:checkingSlicedGender})
}


  else if(usernamelist.includes(signusername)){
    day=new Date().getFullYear()
    var edit_country=Country.getAllCountries()
    var newsignfullname= signfullname
    var newsignusername= signusername
    var newsigndate= signdate
    var newsigngender= signgender
    var newsignemail= signemail
    var newsigncountry= signcountry
    var newsignpassword= signpassword
    var newsignconfirm= signconfirm
    var chs="Username is already taken!"
    var fh=""

    var slicingCountry= newsigncountry.slice(0,1).toUpperCase()
    var checkingSlicedCountry= slicingCountry + (newsigncountry.slice(1, (newsigncountry.length)))
    console.log(checkingSlicedCountry)
  
    var slicingGender= newsigngender.slice(0,1).toUpperCase()
    var checkingSlicedGender= slicingGender + (newsigngender.slice(1, (newsigngender.length)))
    console.log(checkingSlicedGender)
  

    response.render("signup", {fullname:newsignfullname, username:newsignusername, date:newsigndate, email:newsignemail, countryf:checkingSlicedCountry, password: newsignpassword, confirm:newsignconfirm, character:chs, fan:day, country:edit_country, pas:fh, chock:fh, signemaillist:signemaillist, signusernamelist:signusernamelist, gender:checkingSlicedGender})
}
  else if(emaillist.includes(signemail)){
    day=new Date().getFullYear()
    var edit_country=Country.getAllCountries()
    var newsignfullname= signfullname
    var newsignusername= signusername
    var newsigndate= signdate
    var newsigngender= signgender
    var newsignemail= signemail
    var newsigncountry= signcountry
    var newsignpassword= signpassword
    var newsignconfirm= signconfirm
    var chs="Email is already taken!"
    var fh=""


    var slicingCountry= newsigncountry.slice(0,1).toUpperCase()
    var checkingSlicedCountry= slicingCountry + (newsigncountry.slice(1, (newsigncountry.length)))
    console.log(checkingSlicedCountry)

    var slicingGender= newsigngender.slice(0,1).toUpperCase()
    var checkingSlicedGender= slicingGender + (newsigngender.slice(1, (newsigngender.length)))
    console.log(checkingSlicedGender)
  

    response.render("signup", {fullname:newsignfullname, username:newsignusername, date:newsigndate, email:newsignemail, countryf:checkingSlicedCountry, password: newsignpassword, confirm:newsignconfirm, character:fh, fan:day, country:edit_country, pas:fh, chock:chs, signemaillist:signemaillist, signusernamelist:signusernamelist, gender:checkingSlicedGender})
}
else{
  globalsignemail=signemail
  globalsignfullname= signfullname
  globalsignusername= signusername
  globalsigndate= signdate
  globalsigncountry= signcountry
  globalsignpassword= signpassword
  globalsignconfirm= signconfirm
  globalsigngender= signgender


  var newslist=[]
  Letter.find({}, function(err, users) {
    for (let x in users) {
     var newemail=users[x].email
     newslist.push(newemail)
    }
    console.log(newslist)
    var newreq= request.body.email.toLowerCase().trim()
    if(newslist.includes(newreq)){
      console.log("top")
    }
    else{
  const addnewsletter= new Letter({
    email:signemail
  })
  addnewsletter.save(function(err){
    if(err){
      console.log(err)
    }
    else{
      console.log("sure")
    }
  })
}
  })
  const saltRounds = 10;
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(signpassword, salt, function(err, hash) {
      const saltRounds2 = 12;
      bcrypt.genSalt(saltRounds2, function(err, solt) {
        bcrypt.hash(signemail, solt, function(err, hash2) {
          bcrypt.genSalt(saltRounds2, function(err, selt) {
            bcrypt.hash(signusername, selt, function(err, hash3) {
    // Store hash in database here
  console.log(hash2)
  var ur= uuid()
  var sed= ur.slice(0, 14)
  var std= ur.slice(14, 28)
  var splithash21= hash2.slice(0, 10)
  var splithash22= hash2.slice(10, 20)
  var splithash23= hash2.slice(20, 30)

  var swr= sed +  splithash23 + hash + std + splithash22 + splithash21
  var sor= std + splithash21  + splithash23 + hash3 + sed + hash2 + splithash22


const adduser= new User({
  fullname:signfullname,
  username:signusername,
  dateBirth: signdate,
  country: signcountry,
  gender: signgender,
  email: signemail,
  password: hash,
  verifiedemail: false,
  codeauto: false,
  forgotpass: swr,
  linkweb: sor,
  dateforgot:new Date().getTime(),
  datelink:new Date().getTime()
})

adduser.save(function(err){
  if(err){
    console.log(err)
  }
  else{

  // var day=new Date().getFullYear()
  day=new Date().getFullYear()
  
  var ty= uuid()
  var ui=ty.replaceAll("-", "e")
  var sed= ui.slice(15, 20)
  siginverify= sed
  console.log(sed)

var transporter = nmail.createTransport({
service: 'gmail',
auth: {
   user: process.env.USER_GMAIL,
   pass: process.env.GMAIL_PASSWORD
}
});

const mailOptions = {
from:' "Fregzyapp 🌳" <angelobeckan794@gmail.com>', // sender address
bcc: signemail, // list of receivers
subject: 'Email verification', // Subject line
html: `
<style>
@import url('https://fonts.googleapis.com/css2?family=DynaPuff&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto');
.ve{
display: inline-block;
padding: 2px 25px;
}
.docking {
list-style: none;
} 
</style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div style="background-color: #fff;">
<img style="width:100px; display:block; margin-left:auto; margin-right:auto;" src=" https://fregzyapp.herokuapp.com/static/fullfregzy.png" alt="fregzy name">
<p style="font-weight: 700; font-family: Roboto, sans-serif; font-size:16px; color: #000" >Hello <span style="color: #1C3879; text-transform: capitalize;">${signusername}</span>,</p>
<img style="width:100%; display:block; margin-left:auto; margin-right:auto; border-radius:15px;" src="https://fregzyapp.herokuapp.com/static/chill.png" alt="celebration">
<div style="margin: 0 20px;">
<h1 style=" text-align:center; font-family: Roboto, sans-serif; font-size:14px; color: #000; margin-bottom:40px;" >Welcome to Fregzy -we are excited you are <span style="color: #1C3879; font-family: Roboto, sans-serif; font-width: 700">here!</span>.</h1>
<h1 style=" text-align:center; font-family: Roboto, sans-serif; font-size:14px; color: #000; margin-bottom:40px;" >Fregzy is an application that provides educational services and helps you enhance your academic skills and<span style="color: #1C3879; font-family: Roboto, sans-serif; font-width: 700"> assessment flexibility</span>.</h1>
<h1 style="font-family: Roboto, sans-serif; font-size:14px; color: #000; text-align:center;" >Please verify your email address to finish setting up your <span style="color: #1C3879;">Fregzy</span> account, in other to have full access to all services. Use the code below:</h1>
<h1 style="font-weight:700; font-family: Roboto, sans-serif; font-size:25px; color: #1C3879; text-align:center;" >${siginverify}</h1>
<div style="display:block; margin-left:auto; margin-right:auto;">
<img class="" style="width: 74%; display:block; margin-left:auto; margin-right:auto;" src=" https://fregzyapp.herokuapp.com/static/together.png" alt="">
</div>
<h1 style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:30px; color: #1C3879; text-align:center;" >Thank you for signing up</h1>
<p style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:14px; color: #000;" >Don't forget to rate us.</p>
<p style="font-family: Roboto, sans-serif; font-size:14px; color: #000; font-weight:700;"  >We also strongly recommend you <a href="www.fregzyapp.herokuapp.com" style="color: #4f0e0e; font-family: Roboto, sans-serif; font-width: 700">turn on two-factor authentication for your account</a>. It only takes a few minutes and dramatically improves your account security.</p>
<p style="font-weight: 700; font-family: Roboto, sans-serif; font-size:14px; color: #4f0e0e"> Fregzy <span style="color: #000">cares</span></p>
<ul style=" list-style: none; ">
<li style="display: inline-block; padding: 2px 1px;">
<img style="width:15%" src="https://img.icons8.com/fluency/240/000000/twitter.png"/>
</li>
<li style="display: inline-block; padding: 2px 1px; margin-left:-10%">
<img style="width:15%" src="https://img.icons8.com/fluency/240/000000/instagram-new.png"/>
</li>
<li style="display: inline-block; margin-left:-10px">
<img style="width:15%" src="https://img.icons8.com/color/240/000000/linkedin-circled--v1.png"/>
</li>
<li style="display: inline-block; margin-left:-10px">
<img style="width:15%" src="https://img.icons8.com/windows/240/000000/github.png"/>
</li>
</ul><br>
<h5 style="color: #000; margin-top: -1%; font-family: 'Varela Round', sans-serif; text-align:center;" class="copyright">Copyright © 2022- ${new Date().getFullYear()} <span style="font-weight: 700;">Fregzy</span> </h5>
<hr>
<img style="width:100%; display:block; margin-left:auto; margin-right:auto; border-radius:15px;" src="https://fregzyapp.herokuapp.com/static/castle.png" alt="celebration">
</div>
</div>
`,// plain text body


}
transporter.sendMail(mailOptions, function (err, info) {
if(err)
console.log(err)
else{
console.log(info);
}
}); 


  response.redirect("/verify-email")
}
}
)
//  llllllllllllllllllllllllllllllllllllllllllllllllllll
})
})
  })
 })
});
});
}

})
}
})
})

app.post("/suggestion", (request, response)=>{

  var nam= "Angelokhare"
  var sugname= request.body.name
  var sugemail= request.body.gmail
  var sugtext= request.body.text

  var transporter = nmail.createTransport({
    service: 'gmail',
    auth: {
           user: process.env.USER_GMAIL,
           pass: process.env.GMAIL_PASSWORD
       }
    });
    
    const mailOptions = {
    from:' "Fregzyapp 🌳" <angelobeckan794@gmail.com>', // sender address
    bcc: "angelobeckan794@gmail.com", // list of receivers
    subject: 'User Suggestion!', // Subject line
    html: `
    <style>
    @import url('https://fonts.googleapis.com/css2?family=DynaPuff&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    .ve{
        display: inline-block;
        padding: 2px 25px;
      }
      .docking {
        list-style: none;
      } 
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div style="width:100%; background-color: #fff;">
    <img style="width:200px; display:block; margin-left:auto; margin-right:auto;" src=" https://fregzyapp.herokuapp.com/static/fullfregzy.png" alt="fregzy name">
    </div>
    <p style="font-weight: 700; font-family: Roboto, sans-serif; font-size:16px; color: #000" >Hello <a style="color: #1C3879; text-transform: capitalize; text-decoration: none;">${nam}</a>,</p>
    <div style="margin: 0 20px;">
    <p style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:14px; color: #000" >a user named <span style="color: #1C3879; font-family: Roboto, sans-serif; font-width: 700">${sugname}</span> with an email of <span style="color: #1C3879; font-family: Roboto, sans-serif; font-width: 700">${sugemail}</span>.</p>
    <p style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:14px; color: #000" >Suggested that your company,<span style="color: #1C3879; font-family: Roboto, sans-serif; font-width: 700"> Fregzy</span>:</p>
    <p style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:14px; color: #1C3879;">${sugtext}</p>
    <p style="font-weight: 700; font-family: Roboto, sans-serif; font-size:14px; color: #4f0e0e"> Fregzy <span style="color: #000">cares</span></p>
    <hr>
    <ul style=" list-style: none; ">
    <li style="display: inline-block; padding: 2px 1px;">
      <img style="width:15%" src="https://img.icons8.com/fluency/240/000000/twitter.png"/>
    </li>
    <li style="display: inline-block; padding: 2px 1px; margin-left:-10%">
    <img style="width:15%" src="https://img.icons8.com/fluency/240/000000/instagram-new.png"/>
    </li>
    <li style="display: inline-block; margin-left:-10px">
     <img style="width:15%" src="https://img.icons8.com/color/240/000000/linkedin-circled--v1.png"/>
    </li>
    <li style="display: inline-block; margin-left:-10px">
    <img style="width:15%" src="https://img.icons8.com/windows/240/000000/github.png"/>
    </li>
    </ul><br>
    <h5 style="color: #000; margin-top: -1%; font-family: 'Varela Round', sans-serif; text-align:center;" class="copyright">Copyright © 2022- ${new Date().getFullYear()} <span style="font-weight: 700;">Fregzy</span> </h5>
    </div>
    `,// plain text body
    
    
    }
    transporter.sendMail(mailOptions, function (err, info) {
      if(err)
        console.log(err)
      else{
        console.log(info);
      }
    }); 

  response.redirect("/")
})




var lame=[]

app.post("/passwordrecovery", (request, response)=>{
  var pass1= request.body.password
  var pass2= request.body.Confirmpassword
  var nam= lame[0]
  console.log(globallinkquery)
  User.findOne({forgotpass:globallinkquery}, (err, found)=>{
  
  

if(pass1==pass2){
  const saltRounds2 = 10;
  bcrypt.genSalt(saltRounds2, function(err, solt) {
    bcrypt.hash(pass1, solt, function(err, hash2) {
 
  var conditions = {forgotpass:globallinkquery};
  var update = { password: hash2 };
User.findOneAndUpdate(conditions, update, function (err){

  var transporter = nmail.createTransport({
    service: 'gmail',
    auth: {
           user: process.env.USER_GMAIL,
           pass: process.env.GMAIL_PASSWORD
       }
    });
    
    const mailOptions = {
    from:' "Fregzyapp 🌳" <angelobeckan794@gmail.com>', // sender address
    bcc: found.email, // list of receivers
    subject: 'Change of Password!', // Subject line
    html: `
    <style>
    @import url('https://fonts.googleapis.com/css2?family=DynaPuff&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    .ve{
        display: inline-block;
        padding: 2px 25px;
      }
      .docking {
        list-style: none;
      } 
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div style="width:100%; background-color: #fff;">
    <img style="width:100px; display:block; margin-left:auto; margin-right:auto;" src=" https://fregzyapp.herokuapp.com/static/fullfregzy.png" alt="fregzy name">
    </div>
    <p style="font-weight: 700; font-family: Roboto, sans-serif; font-size:16px; color: #000" >Hello <a style="color: #1C3879; text-transform: capitalize; text-decoration: none;">${found.username}</a>, We are confirming that...</p>
    <img style="width:200px; display:block; margin-left:auto; margin-right:auto; border-radius:15px;" src="https://fregzyapp.herokuapp.com/static/organizer.png" alt="celebration">
    <div style="margin: 0 20px;">
    <h1 style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:14px; color: #000; text-align:center;" >Your <span style="color: #1C3879; font-family: Roboto, sans-serif; font-width: 700">Password</span> has been updated on <span style="color: #1C3879; font-family: Roboto, sans-serif; font-width: 700">Fregzy</span>.</h1>
    <p style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:14px; color: #000" >We'll always let you know when there is any activity on your <span style="color: #1C3879; font-family: Roboto, sans-serif; font-width: 700">Fregzy</span> account. This helps keep your account safe.</p>
      </div>
      <img style="width:50%; display:block; margin-left:auto; margin-right:auto; border-radius:15px;" src="https://cdn.dribbble.com/users/1573866/screenshots/6791067/first-screen.gif" alt="">
      <div style="margin: 0 20px;">
    <p style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:14px; color: #000" >If you did not request a new password, <a href="www.fregzyapp.herokuapp.com" style="color: #4f0e0e; font-family: Roboto, sans-serif; font-width: 700;">Please let us know.</a></p>
    <p style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:14px; color: #000"  >We also strongly recommend you <a href="www.fregzyapp.herokuapp.com" style="color: #4f0e0e; font-family: Roboto, sans-serif; font-width: 700">turn on two-factor authentication for your account</a>. It only takes a few minutes and dramatically improves your account security.</p><br><br>
    <p style="font-weight: 700; font-family: Roboto, sans-serif; font-size:14px; color: #4f0e0e"> Fregzy <span style="color: #000">cares</span></p>
    <hr>
    <ul style=" list-style: none; ">
    <li style="display: inline-block; padding: 2px 1px;">
      <img style="width:15%" src="https://img.icons8.com/fluency/240/000000/twitter.png"/>
    </li>
    <li style="display: inline-block; padding: 2px 1px; margin-left:-10%">
    <img style="width:15%" src="https://img.icons8.com/fluency/240/000000/instagram-new.png"/>
    </li>
    <li style="display: inline-block; margin-left:-10px">
     <img style="width:15%" src="https://img.icons8.com/color/240/000000/linkedin-circled--v1.png"/>
    </li>
    <li style="display: inline-block; margin-left:-10px">
    <img style="width:15%" src="https://img.icons8.com/windows/240/000000/github.png"/>
    </li>
    </ul><br>
    <h5 style="color: #000; margin-top: -1%; font-family: 'Varela Round', sans-serif; text-align:center;" class="copyright">Copyright © 2022- ${new Date().getFullYear()} <span style="font-weight: 700;">Fregzy</span> </h5>
    </div>
<img style="width:100%; display:block; margin-left:auto; margin-right:auto; border-radius:15px;" src="https://fregzyapp.herokuapp.com/static/elders.png" alt="groupy">
    `,// plain text body
    
    
    }
    transporter.sendMail(mailOptions, function (err, info) {
      if(err)
        console.log(err)
      else{
        console.log(info);
      }
    }); 

  response.redirect("/login")
})
})
})
}
else{
var choking="Password doesn't match"
  response.render("passwordrecovery", {pad:choking, pass1:pass1, pass2:pass2})
}
})

})

// console.log(new Date().getMinutes())
// let i = 1;
// var b=47
// while (i < 2) {
//   console.log(i);
//   if(b ==new Date().getMinutes()){
//     i=1
//   }
//   else{
//     i=2;
//   console.log("here");
//   }
// }


app.post("/accountrecovery", (request, response)=>{


var emaillist=[]
User.find({}, function(err, users) {
  for (let x in users) {
   var newemail=users[x].email
   emaillist.push(newemail)
  }
  var checkgmail= request.body.auth_gmail.toLowerCase().trim()

  if(emaillist.includes(checkgmail)){
    User.findOne({email:checkgmail}, (err, found)=>{

 
var ted=""

  var forgotlist=[]
  User.find({}, function(err, users) {
    for (let x in users) {
     var neweforgot=users[x].forgotpass
     forgotlist.push(neweforgot)
    }



let w = 1;
while (w < 2){

  const saltRounds = 12;
  var hash=  bcrypt.hashSync(found.password, saltRounds);
  var hash2=  bcrypt.hashSync(found.email, saltRounds);
  var hash3=  bcrypt.hashSync(found.username, saltRounds);


  console.log(hash2)
  var ur= uuid()
  var sed= ur.slice(0, 14)
  var std= ur.slice(14, 28)
  var splithash21= hash2.slice(0, 10)
  var splithash22= hash2.slice(10, 20)
  var splithash23= hash2.slice(20, 30)

  var swr= sed +  splithash23 + hash + std + splithash22 + splithash21
  var sor= std + splithash21  + splithash23 + hash3 + sed + hash2 + splithash22




if(forgotlist.includes(swr)){
  w=1
}

// }
else{
  w=2
      var conditions = {email:checkgmail};
      var update = { forgotpass: swr, dateforgot: new Date().getTime() };
    User.findOneAndUpdate(conditions, update, function (err){





  emailcheck=""
var searchedemail= checkgmail
var gmailowner= found.username
lame.push(gmailowner)
  var transporter = nmail.createTransport({
    service: 'gmail',
    auth: {
           user: process.env.USER_GMAIL,
           pass: process.env.GMAIL_PASSWORD
       }
    });
    
    const mailOptions = {
    from:' "Fregzyapp 🌳" <angelobeckan794@gmail.com>', // sender address
    bcc: checkgmail, // list of receivers
    subject: 'Password Recovery!', // Subject line
    html: `
    <style>
    @import url('https://fonts.googleapis.com/css2?family=DynaPuff&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    .ve{
        display: inline-block;
        padding: 2px 25px;
      }
      .docking {
        list-style: none;
      } 
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <img style="width:100px; display:block; margin-left:auto; margin-right:auto;" src=" https://fregzyapp.herokuapp.com/static/fullfregzy.png" alt="fregzy name">
    <p style="font-weight: 700; font-family: Roboto, sans-serif; font-size:16px; color: #000" >Hello <a style="color: #1C3879; text-transform: capitalize; text-decoration: none;">${gmailowner}</a>,</p>
    <img style="display:block; margin-left:auto; margin-right:auto;" src=" https://fregzyapp.herokuapp.com/static/security.png" alt="fregzy name">
    <div style="margin: 0 20px;">
    <h1 style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:14px; color: #000; text-align: center; margin-top:40px;" >We've received a request to reset the password for the <span style="color: #1C3879; font-family: Roboto, sans-serif; font-width: 700">Fregzy</span> account associated with ${searchedemail}. No changes have been made to your account yet.</h1>
    <h1 style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:18px; color: #000; text-align: center; margin-top:40px; margin-bottom:20px;" >You can reset your password by clicking the link below:</h1>
    <button href="www.fregzyapp.herokuapp.com"  class="btn button-auth" style="font-family: 'Varela Round', sans-serif; background-color: #1C3879; color: #fff; text-decoration: none; font-weight: 700; display: block; margin-left: auto; margin-right: auto; padding: 1rem 20%; border-radius: 15px" ><a style="text-decoration: none; font-family: Roboto, sans-serif; font-size:16px; color:#fff" href="http://fregzyapp.herokuapp.com/password-recovery?check_password=${swr}">Reset your password </a></button>
    <p style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:14px; color: #000;  margin-top:20px;" > OR copy the link bellow:</p>
    <p style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:14px; color: #000";> http://fregzyapp.herokuapp.com/password-recovery?check_password=${swr}</p>
    <p style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:14px; color: #000" >If you did not request a new password, <a href="www.fregzyapp.herokuapp.com" style="color: #4f0e0e; font-family: Roboto, sans-serif; font-width: 700;">Please let us know.</a></p>
    <p style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:14px; color: #000"  >We also strongly recommend you <a href="www.fregzyapp.herokuapp.com" style="color: #4f0e0e; font-family: Roboto, sans-serif; font-width: 700">turn on two-factor authentication for your account</a>. It only takes a few minutes and dramatically improves your account security.</p><br><br>
    <p style="font-weight: 700; font-family: Roboto, sans-serif; font-size:14px; color: #4f0e0e"> Fregzy <span style="color: #000">cares</span></p>
    <hr>
    <ul style=" list-style: none; ">
    <li style="display: inline-block; padding: 2px 1px;">
      <img style="width:15%" src="https://img.icons8.com/fluency/240/000000/twitter.png"/>
    </li>
    <li style="display: inline-block; padding: 2px 1px; margin-left:-10%">
    <img style="width:15%" src="https://img.icons8.com/fluency/240/000000/instagram-new.png"/>
    </li>
    <li style="display: inline-block; margin-left:-10px">
     <img style="width:15%" src="https://img.icons8.com/color/240/000000/linkedin-circled--v1.png"/>
    </li>
    <li style="display: inline-block; margin-left:-10px">
    <img style="width:15%" src="https://img.icons8.com/windows/240/000000/github.png"/>
    </li>
    </ul><br>
    <h5 style="color: #000; margin-top: -1%; font-family: 'Varela Round', sans-serif; text-align:center;" class="copyright">Copyright © 2022- ${new Date().getFullYear()} <span style="font-weight: 700;">Fregzy</span> </h5>
   </div>
    `,// plain text body
    
    
    }
    transporter.sendMail(mailOptions, function (err, info) {
      if(err)
        console.log(err)
      else{
        console.log(info);
      }
    }); 

response.render("emailreceived", {fan:day})



})

}
  }
// })
// })
      // })
    // })
  // })
// })


})
  })
}
else{
  emailcheck="Sorry, this email is not found!"
  response.redirect("/account-recovery")
}
})
})




const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
if(new Date().getHours()<12){
    var ut= "am"
   }
   else if(new Date().getHours()>=12){
    var ut= "pm"
   }
   var eday= weekday[new Date().getDay()]
   const evar= eday + "," + " "+ month[new Date().getMonth()] + " " + new Date().getDate() + "th, " + new Date().getFullYear() + " at " + new Date().getHours() + ":" + new Date().getMinutes() + ut
var userprof= ""
app.post("/authenticate", (request, response)=>{
var inputcode= request.body.code
    if(inputcode==gencode){
    ght= userprof + "-profile"
    
const parseIp = (request) =>
request.headers['x-forwarded-for']?.split(',').shift()
|| request.socket?.remoteAddress

console.log(parseIp(request))
var clientIp = userip.getClientIp(request);
console.log(clientIp)


const options = {
  method: 'GET',
  url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
  params: {ip: parseIp(request), apikey: '873dbe322aea47f89dcf729dcc8f60e8'},
  headers: {
    'X-RapidAPI-Key': '3c87ec6a25msh46b7d04fc169e7dp1cc42djsnd64003f09b54',
    'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
    var gat= response.data

var transporter = nmail.createTransport({
  service: 'gmail',
  auth: {
         user: process.env.USER_GMAIL,
         pass: process.env.GMAIL_PASSWORD
     }
 });

 const mailOptions = {
  from:' "Fregzyapp 🌳" <angelobeckan794@gmail.com>', // sender address
  bcc: "edmundobiegue@gmail.com, pinocchio794@gmail.com", // list of receivers
  subject: 'New Login detect!', // Subject line
  html: `
  <style>
  @import url('https://fonts.googleapis.com/css2?family=DynaPuff&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  .ve{
      display: inline-block;
      padding: 2px 25px;
    }
    .docking {
      list-style: none;
    } 
  </style>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div style="width:100%; background-color: #fff;">
  <img style="width:70px; display:block; margin-left:auto; margin-right:auto;" src=" https://fregzyapp.herokuapp.com/static/icon1.webp" alt="">
  </div>
  <p style="font-weight: 700; font-family: Roboto, sans-serif; font-size:16px; color: #000" >Hello <a style="color: #1C3879; text-transform: capitalize; text-decoration: none;">${userprof}</a>,</p>
  <div style="margin: 0 20px;">
  <p style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:12px; color: #000" >Your <span style="color: #1C3879; font-family: Roboto, sans-serif; font-width: 700">Fregzy</span> account was just Logged into with a new Device.</p><br>
  <p style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:14px; color: #000;" >${eday + "," + " "+ month[new Date().getMonth()] + " " + new Date().getDate() + "th, " + new Date().getFullYear() + " at " + new Date().getHours() + ":" + new Date().getMinutes() + ut}</p>
  <p style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:14px; color: #000" >IP Address: ${parseIp(request)}</p>
  <p style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:14px; color: #000" >Location: ${gat.city},${gat.country}[${gat.countryISO2}]</p>
  <img style="width:18px" src="${gat.flag}" alt="">
  <p style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:14px; color: #000" >Greenwich Mean Time: ${gat.gmt}</p>
  <p style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:14px; color: #000" >Latitude: ${gat.latitude}°</p><br><br>
  <p style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:12px; color: #000" >If this was you, carry on. <span style="color: #4f0e0e; font-family: Roboto, sans-serif; font-width: 700;">We wont notify you about logins from this device again.</span></p>
  <p style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:12px; color: #000" >If you don't recognize this activity, <a href="www.fregzyapp.herokuapp.com" style="color: #4f0e0e; font-family: Roboto, sans-serif; font-width: 700;">Please reset your password</a></p>
  <p style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:12px; color: #000"  >We also strongly recommend you <a href="www.fregzyapp.herokuapp.com" style="color: #4f0e0e; font-family: Roboto, sans-serif; font-width: 700">turn on two-factor authentication for your account</a>. It only takes a few minutes and dramatically improves your account security.</p><br><br>
  <p style="font-weight: 700; font-family: Roboto, sans-serif; font-size:14px; color: #4f0e0e"> Fregzy <span style="color: #000">cares</span></p>
  <hr>
  <ul style=" list-style: none; ">
  <li style="display: inline-block; padding: 2px 1px;">
    <img style="width:15%" src="https://img.icons8.com/fluency/240/000000/twitter.png"/>
</li>
<li style="display: inline-block; padding: 2px 1px; margin-left:-10%">
<img style="width:15%" src="https://img.icons8.com/fluency/240/000000/instagram-new.png"/>
</li>
<li style="display: inline-block; margin-left:-10px">
   <img style="width:15%" src="https://img.icons8.com/color/240/000000/linkedin-circled--v1.png"/>
</li>
<li style="display: inline-block; margin-left:-10px">
<img style="width:15%" src="https://img.icons8.com/windows/240/000000/github.png"/>
</li>
</ul><br>
<h5 style="color: #000; margin-top: -1%; font-family: 'Varela Round', sans-serif; text-align:center;" class="copyright">Copyright © 2022- ${new Date().getFullYear()} <span style="font-weight: 700;">Fregzy</span> </h5>
</div>  
`,// plain text body
 
 
 }
 transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });  


}).catch(function (error) {
	console.error(error);
});

    response.redirect("/"+ght)
}
else{
    var error_code= "Invalid code!"
    global_error_code= error_code
    response.redirect("/user-authenticate")
}
    })

    // Letter.findOneAndRemove({email: 'angelobeckan794@gmail.com'}, function(err){console.log("the work is done!")});


var tu= "28-04-2022"
console.log(new Date().getDate())

    var datelist=[]
    User.find({}, function(err, users) {
      for (let x in users) {
       var newdate=users[x].dateBirth
       datelist.push(newdate)
      }
      console.log(datelist)
      var latestmonthlenght= new Date().getMonth().toString().length
      var latestmonth= (new Date().getMonth() + 1).toString()
      if(latestmonthlenght==1){
       var glatestmonth= "0" + latestmonth
      }
      else{
        var glatestmonth= latestmonth
       }
      console.log(glatestmonth)
      var latestdaylenght= new Date().getDate().toString().length
      var latestday=new Date().getDate().toString()
      if(latestdaylenght==1){
       var glatestday= "0" + latestday
      }
      else{
        var glatestday= latestday
       }
      console.log(glatestday)
      for( let ty in datelist){
      if(datelist[ty][5] + datelist[ty][6]==glatestmonth){
        if(datelist[ty][8] + datelist[ty][9]== glatestday){
          console.log("happy birthday")
          // var transporter = nmail.createTransport({
          //   service: 'gmail',
          //   auth: {
          //      user: process.env.USER_GMAIL,
          //      pass: process.env.GMAIL_PASSWORD
          //   }
          //   });
            
          //   const mailOptions = {
          //   from:' "Fregzyapp 🌳" <angelobeckan794@gmail.com>', // sender address
          //   bcc: newreq, // list of receivers
          //   subject: 'Newsletter subscription', // Subject line
          //   html: `
          //   <style>
          //   @import url('https://fonts.googleapis.com/css2?family=DynaPuff&display=swap');
          //   @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
          //   @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
          //   @import url('https://fonts.googleapis.com/css?family=Roboto');
          //   .ve{
          //   display: inline-block;
          //   padding: 2px 25px;
          //   }
          //   .docking {
          //   list-style: none;
          //   } 
          //   </style>
          //   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
          //   <div style="background-color: #fff;">
          //   <img style="width:150px; display:block; margin-left:auto; margin-right:auto;" src=" https://fregzyapp.herokuapp.com/static/fullfregzy.png" alt="fregzy name">
          //   <p style="font-weight: 700; font-family: Roboto, sans-serif; font-size:16px; color: #000" >Hello <span style="color: #1C3879; text-transform: capitalize;">dear</span>,</p>
          //   <img style="width:350px; display:block; margin-left:auto; margin-right:auto; border-radius:15px;" src="https://fregzyapp.herokuapp.com/static/joy.png" alt="celebration">
          //   <div style="margin: 0 20px;">
          //   <h1 style=" text-align:center; font-family: Roboto, sans-serif; font-size:14px; color: #000; margin-bottom:40px;" >Thank you for subscribing to <span style="color: #1C3879; font-family: Roboto, sans-serif; font-width: 700">Fregzy!</span> We're so excited to welcome you. The fregzy newsletter is the best way to find out about our current updates, and product developments.</h1>
          //   <h1 style=" text-align:center; font-family: Roboto, sans-serif; font-size:14px; color: #000; margin-bottom:40px;" >Once or Twice a month, you will receive a newsletter with information about our products major updates, special offers, great services on <span style="color: #1C3879; font-family: Roboto, sans-serif; font-width: 700">Fregzy</span> apps, and much more.</h1>
          //   <div style="display:block; margin-left:auto; margin-right:auto;">
          //   <img class="" style="width: 220px; display:block; margin-left:auto; margin-right:auto;" src=" https://fregzyapp.herokuapp.com/static/thank-you.png" alt="">
          //   </div>
          //   <p style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:14px; color: #000;" >Don't forget to rate us.</p>
          //   <p style="font-weight: 700; font-family: Roboto, sans-serif; font-size:14px; color: #4f0e0e"> Fregzy <span style="color: #000">cares</span></p>
          //   <ul style=" list-style: none; ">
          //   <li style="display: inline-block; padding: 2px 1px;">
          //   <img style="width:15%" src="https://img.icons8.com/fluency/240/000000/twitter.png"/>
          //   </li>
          //   <li style="display: inline-block; padding: 2px 1px; margin-left:-10%">
          //   <img style="width:15%" src="https://img.icons8.com/fluency/240/000000/instagram-new.png"/>
          //   </li>
          //   <li style="display: inline-block; margin-left:-10px">
          //   <img style="width:15%" src="https://img.icons8.com/color/240/000000/linkedin-circled--v1.png"/>
          //   </li>
          //   <li style="display: inline-block; margin-left:-10px">
          //   <img style="width:15%" src="https://img.icons8.com/windows/240/000000/github.png"/>
          //   </li>
          //   </ul><br>
          //   <h5 style="color: #000; margin-top: -1%; font-family: 'Varela Round', sans-serif; text-align:center;" class="copyright">Copyright © 2022- ${new Date().getFullYear()} <span style="font-weight: 700;">Fregzy</span> </h5>
          //   <hr>
          //   <img style="width:550px; display:block; margin-left:auto; margin-right:auto; border-radius:15px;" src="https://fregzyapp.herokuapp.com/static/castle.png" alt="celebration">
          //   </div>
          //   </div>
          //   `,// plain text body
            
            
            // }
            // transporter.sendMail(mailOptions, function (err, info) {
            // if(err)
            // console.log(err)
            // else{
            // console.log(info);
            // }
            // }); 
        }
        else{
          console.log(datelist[ty][5] + datelist[ty][6])
        }
      }
      else{
        console.log(datelist[ty][5] + datelist[ty][6])
      }
    }
    })




app.post("/home", (request, response)=>{
  var newslist=[]
  Letter.find({}, function(err, users) {
    for (let x in users) {
     var newemail=users[x].email
     newslist.push(newemail)
    }
    console.log(newslist)
    var newreq= request.body.current.toLowerCase().trim()
    if(newslist.includes(newreq)){
      console.log("top")
      day=new Date().getFullYear()
      response.render("alreadyconfirm", {fan:day})
    }
    else{
  const addnewsletter= new Letter({
    email: newreq
  })
  addnewsletter.save(function(err){
    if(err){
      console.log(err)
    }
    else{
      console.log("sure")
    }
  })
    day=new Date().getFullYear()
    var transporter = nmail.createTransport({
      service: 'gmail',
      auth: {
         user: process.env.USER_GMAIL,
         pass: process.env.GMAIL_PASSWORD
      }
      });
      
      const mailOptions = {
      from:' "Fregzyapp 🌳" <angelobeckan794@gmail.com>', // sender address
      bcc: newreq, // list of receivers
      subject: 'Newsletter subscription', // Subject line
      html: `
      <style>
      @import url('https://fonts.googleapis.com/css2?family=DynaPuff&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
      @import url('https://fonts.googleapis.com/css?family=Roboto');
      .ve{
      display: inline-block;
      padding: 2px 25px;
      }
      .docking {
      list-style: none;
      } 
      </style>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <div style="background-color: #fff;">
      <img style="width:150px; display:block; margin-left:auto; margin-right:auto;" src=" https://fregzyapp.herokuapp.com/static/fullfregzy.png" alt="fregzy name">
      <p style="font-weight: 700; font-family: Roboto, sans-serif; font-size:16px; color: #000" >Hello <span style="color: #1C3879; text-transform: capitalize;">dear</span>,</p>
      <img style="width:350px; display:block; margin-left:auto; margin-right:auto; border-radius:15px;" src="https://fregzyapp.herokuapp.com/static/joy.png" alt="celebration">
      <div style="margin: 0 20px;">
      <h1 style=" text-align:center; font-family: Roboto, sans-serif; font-size:14px; color: #000; margin-bottom:40px;" >Thank you for subscribing to <span style="color: #1C3879; font-family: Roboto, sans-serif; font-width: 700">Fregzy!</span> We're so excited to welcome you. The fregzy newsletter is the best way to find out about our current updates, and product developments.</h1>
      <h1 style=" text-align:center; font-family: Roboto, sans-serif; font-size:14px; color: #000; margin-bottom:40px;" >Once or Twice a month, you will receive a newsletter with information about our products major updates, special offers, great services on <span style="color: #1C3879; font-family: Roboto, sans-serif; font-width: 700">Fregzy</span> apps, and much more.</h1>
      <div style="display:block; margin-left:auto; margin-right:auto;">
      <img class="" style="width: 220px; display:block; margin-left:auto; margin-right:auto;" src=" https://fregzyapp.herokuapp.com/static/thank-you.png" alt="">
      </div>
      <p style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:14px; color: #000;" >Don't forget to rate us.</p>
      <p style="font-weight: 700; font-family: Roboto, sans-serif; font-size:14px; color: #4f0e0e"> Fregzy <span style="color: #000">cares</span></p>
      <ul style=" list-style: none; ">
      <li style="display: inline-block; padding: 2px 1px;">
      <img style="width:15%" src="https://img.icons8.com/fluency/240/000000/twitter.png"/>
      </li>
      <li style="display: inline-block; padding: 2px 1px; margin-left:-10%">
      <img style="width:15%" src="https://img.icons8.com/fluency/240/000000/instagram-new.png"/>
      </li>
      <li style="display: inline-block; margin-left:-10px">
      <img style="width:15%" src="https://img.icons8.com/color/240/000000/linkedin-circled--v1.png"/>
      </li>
      <li style="display: inline-block; margin-left:-10px">
      <img style="width:15%" src="https://img.icons8.com/windows/240/000000/github.png"/>
      </li>
      </ul><br>
      <h5 style="color: #000; margin-top: -1%; font-family: 'Varela Round', sans-serif; text-align:center;" class="copyright">Copyright © 2022- ${new Date().getFullYear()} <span style="font-weight: 700;">Fregzy</span> </h5>
      <hr>
      <img style="width:550px; display:block; margin-left:auto; margin-right:auto; border-radius:15px;" src="https://fregzyapp.herokuapp.com/static/castle.png" alt="celebration">
      </div>
      </div>
      `,// plain text body
      
      
      }
      transporter.sendMail(mailOptions, function (err, info) {
      if(err)
      console.log(err)
      else{
      console.log(info);
      }
      }); 
response.render("confirm", {fan:day})

}
  })
})


app.get("/login/:hgy", (request, response)=>{ 

    response.redirect("/login")
})

app.get("/signup/:hgy", (request, response)=>{ 

    response.redirect("/signup")
})

// kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

app.post("/login", (request, response)=>{
    var usern= request.body.username.toLowerCase().trim()
    var passloginpost= request.body.password






    var loginusernamelist=[]
    var loginemaillist=[]
  User.find({}, function(err, users) {
    for (let x in users) {
     var combinename=users[x].username
     loginusernamelist.push(combinename)
     var combineemail=users[x].email
     loginemaillist.push(combineemail)
    }

    if(loginusernamelist.includes(usern)){
      User.findOne({username:usern}, (err, found)=>{
      bcrypt.compare(passloginpost, found.password, (err, got)=>{
        if(got){
         
   
     userprof=usern
    //  console.log(userprof)
    var user_route= userprof +"-profile"
    globaluser_route= user_route
    globalview= found.linkweb
// console.log(    request.headers['x-forwarded-for'].split(',').shift() || request.socket.remoteAddress)
var usert = userip.getClientIp(request); // on localhost > 127.0.0.1
console.log(usert)

const parseIp = (request) =>
request.headers['x-forwarded-for']?.split(',').shift()
|| request.socket?.remoteAddress

console.log(parseIp(request))
var clientIp = userip.getClientIp(request);
console.log(clientIp)


const options = {
  method: 'GET',
  url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
  params: {ip: parseIp(request), apikey: '873dbe322aea47f89dcf729dcc8f60e8'},
  headers: {
    'X-RapidAPI-Key': '3c87ec6a25msh46b7d04fc169e7dp1cc42djsnd64003f09b54',
    'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
    var gat= response.data

var transporter = nmail.createTransport({
  service: 'gmail',
  auth: {
         user: process.env.USER_GMAIL,
         pass: process.env.GMAIL_PASSWORD
     }
 });

 const mailOptions = {
  from:' "Fregzyapp 🌳" <angelobeckan794@gmail.com>', // sender address
  bcc: found.email, // list of receivers
  subject: 'New Login detect!', // Subject line
  html: `
  <style>
  @import url('https://fonts.googleapis.com/css2?family=DynaPuff&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  .ve{
      display: inline-block;
      padding: 2px 25px;
    }
    .docking {
      list-style: none;
    } 
  </style>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div style="width:100%; background-color: #fff;">
  <img style="width:70px; display:block; margin-left:auto; margin-right:auto;" src=" https://fregzyapp.herokuapp.com/static/icon1.webp" alt="">
  </div>
  <p style="font-weight: 700; font-family: Roboto, sans-serif; font-size:16px; color: #000" >Hello <a style="color: #1C3879; text-transform: capitalize; text-decoration: none;">${usern}</a>,</p>
  <div style="margin: 0 20px;">
  <p style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:12px; color: #000" >Your <span style="color: #1C3879; font-family: Roboto, sans-serif; font-width: 700">Fregzy</span> account was just Logged into with a new Device.</p><br>
  <p style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:14px; color: #000;" >${eday + "," + " "+ month[new Date().getMonth()] + " " + new Date().getDate() + "th, " + new Date().getFullYear() + " at " + new Date().getHours() + ":" + new Date().getMinutes() + ut}</p>
  <p style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:14px; color: #000" >IP Address: ${parseIp(request)}</p>
  <p style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:14px; color: #000" >Location: ${gat.city},${gat.country}[${gat.countryISO2}]</p>
  <img style="width:18px" src="${gat.flag}" alt="">
  <p style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:14px; color: #000" >Greenwich Mean Time: ${gat.gmt}</p>
  <p style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:14px; color: #000" >Latitude: ${gat.latitude}°</p><br><br>
  <p style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:12px; color: #000" >If this was you, carry on. <span style="color: #4f0e0e; font-family: Roboto, sans-serif; font-width: 700;">We wont notify you about logins from this device again.</span></p>
  <p style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:12px; color: #000" >If you don't recognize this activity, <a href="www.fregzyapp.herokuapp.com" style="color: #4f0e0e; font-family: Roboto, sans-serif; font-width: 700;">Please reset your password</a></p>
  <p style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:12px; color: #000"  >We also strongly recommend you <a href="www.fregzyapp.herokuapp.com" style="color: #4f0e0e; font-family: Roboto, sans-serif; font-width: 700">turn on two-factor authentication for your account</a>. It only takes a few minutes and dramatically improves your account security.</p><br><br>
  <p style="font-weight: 700; font-family: Roboto, sans-serif; font-size:14px; color: #4f0e0e"> Fregzy <span style="color: #000">cares</span></p>
  <hr>
  <ul style=" list-style: none; ">
  <li style="display: inline-block; padding: 2px 1px;">
    <img style="width:15%" src="https://img.icons8.com/fluency/240/000000/twitter.png"/>
</li>
<li style="display: inline-block; padding: 2px 1px; margin-left:-10%">
<img style="width:15%" src="https://img.icons8.com/fluency/240/000000/instagram-new.png"/>
</li>
<li style="display: inline-block; margin-left:-10px">
   <img style="width:15%" src="https://img.icons8.com/color/240/000000/linkedin-circled--v1.png"/>
</li>
<li style="display: inline-block; margin-left:-10px">
<img style="width:15%" src="https://img.icons8.com/windows/240/000000/github.png"/>
</li>
</ul><br>
<h5 style="color: #000; margin-top: -1%; font-family: 'Varela Round', sans-serif; text-align:center;" class="copyright">Copyright © 2022- ${new Date().getFullYear()} <span style="font-weight: 700;">Fregzy</span> </h5>
</div> 
`,// plain text body
 
 
 }
 transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });  


}).catch(function (error) {
	console.error(error);
});


if(found.codeauto==true){
var ty= uuid()
var ui=ty.replaceAll("-", "e")
var bt= ui.slice(15, 20)
gencode=bt
console.log(bt)
var code_user=userprof
var transporter = nmail.createTransport({
service: 'gmail',
auth: {
   user: process.env.USER_GMAIL,
   pass: process.env.GMAIL_PASSWORD
}
});

const mailOptions = {
from:' "Fregzyapp 🌳" <angelobeckan794@gmail.com>', // sender address
bcc: found.email, // list of receivers
subject: 'Your Authentication Code!', // Subject line
html: `
<style>
@import url('https://fonts.googleapis.com/css2?family=DynaPuff&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto');
.ve{
display: inline-block;
padding: 2px 25px;
}
.docking {
list-style: none;
} 
</style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div style="width:100%; background-color: #fff;">
<img style="width:70px; display:block; margin-left:auto; margin-right:auto;" src=" https://fregzyapp.herokuapp.com/static/icon1.webp" alt="">
</div>
<p style="font-weight: 600; font-family: Roboto, sans-serif; font-size:16px; color: #000" >Hello <span style="color: #1C3879; text-transform: capitalize;">${code_user}</span>,</p>
<div style="margin: 0 20px;">
<p style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:14px; color: #000" >Someone tried to log in to your <span style="color: #1C3879; font-family: Roboto, sans-serif; font-width: 700">Fregzy</span> account with a new Device.</p>
<p style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:14px; color: #000" >If this was you, Please use the following code to log in:</p>
<p style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:20px; color: #1C3879" >${bt}</p>

<p style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:12px; color: #000" >If you don't recognize this activity, <a href="www.fregzyapp.herokuapp.com" style="color: #4f0e0e; font-family: Roboto, sans-serif; font-width: 700;">Please reset your password</a></p>
<p style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:12px; color: #000"  >We also strongly recommend you <a href="www.fregzyapp.herokuapp.com" style="color: #4f0e0e; font-family: Roboto, sans-serif; font-width: 700">turn on two-factor authentication for your account</a>. It only takes a few minutes and dramatically improves your account security.</p><br><br>
<p style="font-weight: 700; font-family: Roboto, sans-serif; font-size:14px; color: #4f0e0e"> Fregzy <span style="color: #000">cares</span></p>
<hr>
<ul style=" list-style: none; ">
<li style="display: inline-block; padding: 2px 1px;">
<img style="width:15%" src="https://img.icons8.com/fluency/240/000000/twitter.png"/>
</li>
<li style="display: inline-block; padding: 2px 1px; margin-left:-10%">
<img style="width:15%" src="https://img.icons8.com/fluency/240/000000/instagram-new.png"/>
</li>
<li style="display: inline-block; margin-left:-10px">
<img style="width:15%" src="https://img.icons8.com/color/240/000000/linkedin-circled--v1.png"/>
</li>
<li style="display: inline-block; margin-left:-10px">
<img style="width:15%" src="https://img.icons8.com/windows/240/000000/github.png"/>
</li>
</ul><br>
<h5 style="color: #000; margin-top: -1%; font-family: 'Varela Round', sans-serif; text-align:center;" class="copyright">Copyright © 2022- ${new Date().getFullYear()} <span style="font-weight: 700;">Fregzy</span> </h5>
</div>
`,// plain text body


}
transporter.sendMail(mailOptions, function (err, info) {
if(err)
console.log(err)
else{
console.log(info);
}
}); 


// const namein={
//   name: usern,
//   gmail:"angelobeckan794@gmail.com",
//   job: "engineer"
// }
// jwt.sign({namein}, "angelo" , {expiresIn: "5m"},(err, tokeni)=>{
//   tokeni
//   console.log(tokeni)
// })
// console.log(jwtcode)



    // response.redirect("/"+user_route)
    response.redirect("/signup")
}
else{
response.redirect("/"+ globaluser_route + "?user_authenticate=" + found.linkweb)
}
  }
  else{
   var day=new Date().getFullYear()
    var userres=""
    var userpasscheck="Password doesn't match"
    response.render("login", {fan:day, user:usern, pass:passloginpost, usernotfound:userres, passnotfound:userpasscheck})
  }
})
})
}

else if(loginemaillist.includes(usern)){
User.findOne({email:usern}, (err, found)=>{
bcrypt.compare(passloginpost, found.password, (err, got)=>{
  if(got){
    response.redirect("/")
  }
  else{
   var day=new Date().getFullYear()
    var userres=""
    var userpasscheck="Password doesn't match"
    response.render("login", {fan:day, user:usern, pass:passloginpost, usernotfound:userres, passnotfound:userpasscheck})
  }
})
})
}
else{
var day=new Date().getFullYear()
 var userres="Username not found!"
 var userpasscheck=""
 response.render("login", {fan:day, user:usern, pass:passloginpost, usernotfound:userres, passnotfound:userpasscheck})
}
})
 })
      
function vetty(request, response, next){
const jve= request.headers['authorization']
console.log(jve)
if(typeof jve !== "undefined"){
const slittoken = jve.split(" ")[1]
request.tokeni= slittoken
console.log(request.tokeni)
// const slit= sliceTken[1]
next()
}
else{
  // day=new Date().getFullYear()
  response.redirect("/")
}
}    


 app.post("/profile-adjestment", (request, response)=>{
    response.redirect("/"+ userprof + "-profile")
    console.log(userprof)
    console.log(user_profile)
})


app.get("*", (request, response)=>{
    day=new Date().getFullYear()
    // day= new Date().toLocaleDateString()
    console.log(day)
    response.render("error", {fan:day})
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
// commit62
// commit63
// commit64
// commit65
// commit66
// commit67
// commit68
// commit69
// commit70
// commit71
// commit72
// commit73
// commit74
// commit75
// commit76
// commit77
// commit78
// commit79
// commit80
// commit81
// commit82
// commit83
// commit84
// commit86
// commit87
// commit88
// commit89
// commit90
// commit91
// commit92
// commit93
// commit94
// commit95
// commit96
// commit97
// commit98
// commit99
// commit100
// commit101
// commit102
// commit103
// commit104
// commit105
// commit106
// commit107
// commit108
// commit109
// commit110
// commit111
// commit112
// commit113
// commit114
// commit115
// commit116
// commit117
// commit118
// commit119
// commit120
// commit121
// commit122
// commit123
// commit124
// commit125
// commit126
// commit127
// commit128
// commit129
// commit130
// commit131
// commit132