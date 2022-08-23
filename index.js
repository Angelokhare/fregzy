require("dotenv").config()
var express= require("express")
var body= require("body-parser")
var ejs = require("ejs")
const path= require("path")
const cropper= require("cropperjs")
const croppie= require("croppie")
const jwt= require("jsonwebtoken")
const nmail= require("nodemailer")
const userip= require("request-ip")
const axios = require("axios");
const {v4:uuid}=require("uuid")
const { request, response } = require("express")
var app = express()
// const country = require("countries-list")
let Country = require('country-state-city').Country;
let State = require('country-state-city').State;



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
// dataffffffffffffffffffffffffffffffffffffffff

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
console.log(country_data)
console.log(new_code)
console.log(country_code)
app.get("/", (request, response)=>{
    day=new Date().getFullYear()
    // day= new Date().toLocaleDateString()
    console.log(day)
    response.render("index"), {fan:day}
})
var user_profile= userprof +"-profile"
app.get("/:jbk", (request, response)=>{
    var user_route= userprof +"-dashboard"
    var user_profile= userprof +"-profile"
console.log(userprof)
console.log(user_route)
    if(request.params.jbk.toLowerCase()=="login"){
        day=new Date().getFullYear()
        response.render("login", {fan:day})
    }
    else if(request.params.jbk.toLowerCase()=="signup"){
        day=new Date().getFullYear()
    response.render("signup", {fan:day})
    }
    else if(request.params.jbk.toLowerCase()=="confirm"){
        day=new Date().getFullYear()
    response.render("confirm", {fan:day})
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
else if (request.params.jbk.toLowerCase()==user_profile){
    var edit_country=Country.getAllCountries()
    // console.log(edit_country)
response.render("profile", {username: userprof, country:edit_country, countrt_fact:country_data, country_code:country_code})
}
else if (request.params.jbk.toLowerCase()=="user-authenticate"){
    day=new Date().getFullYear()
    // console.log(typeof request.query)
    // if(typeof(request.query)===undefined){
    //     response.render("error", {fan:day})
    // }
    // else(
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
    <p style="font-weight: 600; font-family: Roboto, sans-serif; font-size:16px; color: #000" >Hello <span style="color: #1C3879; text-transform: capitalize;">${code_user}</span>,</p>
    <p style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:14px; color: #000" >Someone tried to log in to your <span style="color: #1C3879; font-family: Roboto, sans-serif; font-width: 700">Fregzy</span> account with a new Device.</p>
    <p style="font-weight: 500;  font-family: Roboto, sans-serif; font-size:14px; color: #000" >If this was you, Please use the following code to log in:</p>
    <p style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:20px; color: #1C3879" >5d8t</p>

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
  <h5 style="color: #000; margin-top: -1%; font-family: 'Varela Round', sans-serif;" class="copyright">Copyright © 2022- ${new Date().getFullYear()} <span style="font-weight: 700;">Fregzy</span> </h5>
    `,// plain text body
   
   
   }
   transporter.sendMail(mailOptions, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info);
   }); 
    response.render("authenticate", {fan:day})
    // )
}
    else{
response.redirect("/")
    }
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
  <p style="font-weight: 700; font-family: Roboto, sans-serif; font-size:16px; color: #000" >Hello <span style="color: #1C3879; text-transform: capitalize;">${userprof}</span>,</p>
  <p style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:12px; color: #000" >Your <span style="color: #1C3879; font-family: Roboto, sans-serif; font-width: 700">Fregzy</span> account was just Logged into with a new Device.</p><br>
  <p style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:14px; color: #000;" >${eday + "," + " "+ month[new Date().getMonth()] + " " + new Date().getDate() + "th, " + new Date().getFullYear() + " at " + new Date().getHours() + ":" + new Date().getMinutes() + ut}</p>
  <p style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:14px; color: #000" >IP Address: ${parseIp(request)}</p>
  <p style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:14px; color: #000" >Location: ${gat.city},${gat.country}[${gat.countryISO2}]</p>
  <img style="width:18px" src="${gat.flag}" alt="">
  <p style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:14px; color: #000" >Greenwich Mean Time: ${gat.gmt}</p>
  <p style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:14px; color: #000" >Latitude: ${gat.latitude}°</p><br><br>
  <p style="font-weight: 500;  font-family: Roboto, sans-serif; font-size:12px; color: #000" >If this was you, carry on. <span style="color: #4f0e0e; font-family: Roboto, sans-serif; font-width: 700;">We wont notify you about logins from this device again.</span></p>
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
<h5 style="color: #000; margin-top: -1%; font-family: 'Varela Round', sans-serif;" class="copyright">Copyright © 2022- ${new Date().getFullYear()} <span style="font-weight: 700;">Fregzy</span> </h5>
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
    })




app.post("/home", (request, response)=>{
    response.redirect("/confirm")
})


app.get("/login/:hgy", (request, response)=>{ 

    response.redirect("/login")
})

app.get("/signup/:hgy", (request, response)=>{ 

    response.redirect("/signup")
})



app.post("/login", (request, response)=>{
    var usern= request.body.username.toLowerCase()
     userprof=usern
    //  console.log(userprof)
    var user_route= userprof +"-profile"
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
  <p style="font-weight: 700; font-family: Roboto, sans-serif; font-size:16px; color: #000" >Hello <span style="color: #1C3879; text-transform: capitalize;">${usern}</span>,</p>
  <p style="font-weight: 600;  font-family: Roboto, sans-serif; font-size:12px; color: #000" >Your <span style="color: #1C3879; font-family: Roboto, sans-serif; font-width: 700">Fregzy</span> account was just Logged into with a new Device.</p><br>
  <p style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:14px; color: #000;" >${eday + "," + " "+ month[new Date().getMonth()] + " " + new Date().getDate() + "th, " + new Date().getFullYear() + " at " + new Date().getHours() + ":" + new Date().getMinutes() + ut}</p>
  <p style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:14px; color: #000" >IP Address: ${parseIp(request)}</p>
  <p style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:14px; color: #000" >Location: ${gat.city},${gat.country}[${gat.countryISO2}]</p>
  <img style="width:18px" src="${gat.flag}" alt="">
  <p style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:14px; color: #000" >Greenwich Mean Time: ${gat.gmt}</p>
  <p style="font-weight: 700;  font-family: Roboto, sans-serif; font-size:14px; color: #000" >Latitude: ${gat.latitude}°</p><br><br>
  <p style="font-weight: 500;  font-family: Roboto, sans-serif; font-size:12px; color: #000" >If this was you, carry on. <span style="color: #4f0e0e; font-family: Roboto, sans-serif; font-width: 700;">We wont notify you about logins from this device again.</span></p>
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
<h5 style="color: #000; margin-top: -1%; font-family: 'Varela Round', sans-serif;" class="copyright">Copyright © 2022- ${new Date().getFullYear()} <span style="font-weight: 700;">Fregzy</span> </h5>
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

    // response.redirect("/"+user_route)
    response.redirect("/user-authenticate")
 })
      
    

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