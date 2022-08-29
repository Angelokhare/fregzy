

            document.querySelector(".pass-login2").addEventListener("keydown", (e)=>{
                document.querySelector(".spo").innerHTML=document.querySelector(".pass-login2").value
                var userpa=   document.querySelector(".spo").innerHTML
                if(userpa.length < 8 && userpa.length > 3){
                  document.querySelector(".yellow1").classList.remove("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.add("hid")
                  document.querySelector(".blue1").classList.add("hid")
                  document.querySelector(".moj").style.display="none"
                }
                else if(userpa.length <= 3 && userpa.length > 0){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.remove("hid")
                  document.querySelector(".green1").classList.add("hid")
                  document.querySelector(".blue1").classList.add("hid")
                  document.querySelector(".moj").style.display="none"
                }
                else if(userpa.length ==0 ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.add("hid")
                  document.querySelector(".blue1").classList.add("hid")
                  document.querySelector(".moj").style.display="block"
                }
                else if(userpa.length >= 8 && userpa.length <= 10){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.add("hid")
                  document.querySelector(".blue1").classList.remove("hid")
                  document.querySelector(".moj").style.display="none"
                }
                else if(userpa.length > 10){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.add("hid")
                  document.querySelector(".blue1").classList.remove("hid")
                  document.querySelector(".moj").style.display="none"
              
              
                  if( userpa.includes("0") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                  document.querySelector(".blue1").classList.add("hid")
                  document.querySelector(".moj").style.display="none"
                }
                if( userpa.includes("9") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                  document.querySelector(".blue1").classList.add("hid")
                  document.querySelector(".moj").style.display="none"
                }
                if( userpa.includes("8") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                  document.querySelector(".blue1").classList.add("hid")
                  document.querySelector(".moj").style.display="none"
                }
                if( userpa.includes("7") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                  document.querySelector(".blue1").classList.add("hid")
                  document.querySelector(".moj").style.display="none"
                }
                if( userpa.includes("6") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                  document.querySelector(".blue1").classList.add("hid")
                  document.querySelector(".moj").style.display="none"
                }
                if( userpa.includes("5") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                  document.querySelector(".blue1").classList.add("hid")
                  document.querySelector(".moj").style.display="none"
                }
                if( userpa.includes("4") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                 document.querySelector(".blue1").classList.add("hid")
                 document.querySelector(".moj").style.display="none"
                }
                if( userpa.includes("3") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                  document.querySelector(".blue1").classList.add("hid")
                  document.querySelector(".moj").style.display="none"
                }
                if( userpa.includes("2") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                  document.querySelector(".blue1").classList.add("hid")
                  document.querySelector(".moj").style.display="none"
                }
                if( userpa.includes("1") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                  document.querySelector(".blue1").classList.add("hid")
                  document.querySelector(".moj").style.display="none"
                } 
              
                }
                var t1=document.querySelector(".spo").innerHTML
              var t2= document.querySelector(".pass-login1").value
              if(t1!=t2){
                document.querySelector(".pack").innerHTML="Password doesn't match!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(t1==t2){
                document.querySelector(".pack").innerHTML=""
                document.querySelector(".button-signup").setAttribute("type", "submit");
              }
              
              var verify_username= document.querySelector(".username-input").value
              if(verify_username.includes(" ")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.length > 25){
                document.querySelector(".pock").innerHTML="Characters too long!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("&")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("-")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("+")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("<")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(">")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(".")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(",")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("'")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("{")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("}")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("^")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("*")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("?")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("/")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes('"')){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("`")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("~")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(";")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(":")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("]")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("[")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("|")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("%")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("@")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("(")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(")")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else{
                document.querySelector(".pock").innerHTML=""
                document.querySelector(".button-signup").setAttribute("type", "submit");
              }
              })
              
              
              
              
              
              document.querySelector(".pass-login2").addEventListener("keyup", (e)=>{
                document.querySelector(".spo").innerHTML=document.querySelector(".pass-login2").value
                var userpa=   document.querySelector(".spo").innerHTML
                if(userpa.length < 8 && userpa.length > 3){
                  document.querySelector(".yellow1").classList.remove("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.add("hid")
                  document.querySelector(".blue1").classList.add("hid")
                  document.querySelector(".moj").style.display="none"
                }
                else if(userpa.length <= 3 && userpa.length >0 ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.remove("hid")
                  document.querySelector(".green1").classList.add("hid")
                  document.querySelector(".blue1").classList.add("hid")
                  document.querySelector(".moj").style.display="none"
                }
                else if(userpa.length ==0 ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.add("hid")
                  document.querySelector(".blue1").classList.add("hid")
                  document.querySelector(".moj").style.display="block"
                }
                else if(userpa.length >= 8 && userpa.length <= 10){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.add("hid")
                  document.querySelector(".blue1").classList.remove("hid")
                  document.querySelector(".moj").style.display="none"
                }
                else if(userpa.length > 10){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.add("hid")
                  document.querySelector(".blue1").classList.remove("hid")
                  document.querySelector(".moj").style.display="none"
              
                  if( userpa.includes("0") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                  document.querySelector(".blue1").classList.add("hid")
                  document.querySelector(".moj").style.display="none"
                }
                if( userpa.includes("9") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                  document.querySelector(".blue1").classList.add("hid")
                  document.querySelector(".moj").style.display="none"
                }
                if( userpa.includes("8") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                  document.querySelector(".blue1").classList.add("hid")
                  document.querySelector(".moj").style.display="none"
                }
                if( userpa.includes("7") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                  document.querySelector(".blue1").classList.add("hid")
                  document.querySelector(".moj").style.display="none"
                }
                if( userpa.includes("6") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                  document.querySelector(".blue1").classList.add("hid")
                  document.querySelector(".moj").style.display="none"
                }
                if( userpa.includes("5") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                  document.querySelector(".blue1").classList.add("hid")
                  document.querySelector(".moj").style.display="none"
                }
                if( userpa.includes("4") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                 document.querySelector(".blue1").classList.add("hid")
                 document.querySelector(".moj").style.display="none"
                }
                if( userpa.includes("3") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                  document.querySelector(".blue1").classList.add("hid")
                  document.querySelector(".moj").style.display="none"
                }
                if( userpa.includes("2") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                  document.querySelector(".blue1").classList.add("hid")
                  document.querySelector(".moj").style.display="none"
                }
                if( userpa.includes("1") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                  document.querySelector(".blue1").classList.add("hid")
                  document.querySelector(".moj").style.display="none"
                } 
                }
                var t1=document.querySelector(".spo").innerHTML
              var t2= document.querySelector(".pass-login1").value
              if(t1!=t2){
                document.querySelector(".pack").innerHTML="Password doesn't match!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(t1==t2){
                document.querySelector(".pack").innerHTML=""
                document.querySelector(".button-signup").setAttribute("type", "submit");
              }
              var verify_username= document.querySelector(".username-input").value
              if(verify_username.includes(" ")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.length > 25){
                document.querySelector(".pock").innerHTML="Characters too long!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("&")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("-")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("+")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("<")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(">")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(".")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(",")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("'")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("{")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("}")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("^")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("*")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("?")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("/")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes('"')){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("`")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("~")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(";")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(":")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("]")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("[")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("|")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("%")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("@")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("(")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(")")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else{
                document.querySelector(".pock").innerHTML=""
                document.querySelector(".button-signup").setAttribute("type", "submit");
              }
              })
              
              
              
              
              
              
              
              document.querySelector(".pass-login1").addEventListener("keydown", (e)=>{
              var t1=document.querySelector(".spo").innerHTML
              var t2= document.querySelector(".pass-login1").value
              if(t1!=t2){
                document.querySelector(".pack").innerHTML="Password doesn't match!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(t1==t2){
                document.querySelector(".pack").innerHTML=""
                document.querySelector(".button-signup").setAttribute("type", "submit");
              }
              var verify_username= document.querySelector(".username-input").value
              if(verify_username.includes(" ")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.length > 25){
                document.querySelector(".pock").innerHTML="Characters too long!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("&")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("-")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("+")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("<")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(">")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(".")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(",")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("'")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("{")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("}")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("^")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("*")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("?")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("/")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes('"')){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("`")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("~")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(";")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(":")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("]")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("[")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("|")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("%")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("@")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("(")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(")")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else{
                document.querySelector(".pock").innerHTML=""
                document.querySelector(".button-signup").setAttribute("type", "submit");
              }
              })
              
              
              
              
              
              document.querySelector(".pass-login1").addEventListener("keyup", (e)=>{
              var t1=document.querySelector(".spo").innerHTML
              var t2= document.querySelector(".pass-login1").value
              if(t1!=t2){
                document.querySelector(".pack").innerHTML="Password doesn't match!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(t1==t2){
                document.querySelector(".pack").innerHTML=""
                document.querySelector(".button-signup").setAttribute("type", "submit");
              }
              var verify_username= document.querySelector(".username-input").value
              if(verify_username.includes(" ")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.length > 25){
                document.querySelector(".pock").innerHTML="Characters too long!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("&")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("-")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("+")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("<")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(">")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(".")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(",")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("'")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("{")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("}")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("^")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("*")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("?")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("/")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes('"')){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("`")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("~")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(";")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(":")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("]")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("[")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("|")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("%")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("@")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("(")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(")")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else{
                document.querySelector(".pock").innerHTML=""
                document.querySelector(".button-signup").setAttribute("type", "submit");
              }
              })
              
              
              
              
              
              document.querySelector(".username-input").addEventListener("keydown", (e)=>{
              var verify_username= document.querySelector(".username-input").value
              if(verify_username.includes(" ")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                // console.log("hjhkj")
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.length > 25){
                document.querySelector(".pock").innerHTML="Characters too long!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("&")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("-")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("+")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("<")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(">")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(".")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(",")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("'")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("{")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("}")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("^")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("*")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("?")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("/")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes('"')){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("`")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("~")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(";")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(":")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("]")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("[")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("|")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("%")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("@")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("(")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(")")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else{
                document.querySelector(".pock").innerHTML=""
                document.querySelector(".button-signup").setAttribute("type", "submit");
              }
              var t1=document.querySelector(".spo").innerHTML
              var t2= document.querySelector(".pass-login1").value
              if(t1!=t2){
                document.querySelector(".pack").innerHTML="Password doesn't match!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(t1==t2){
                document.querySelector(".pack").innerHTML=""
                document.querySelector(".button-signup").setAttribute("type", "submit");
              }
              })
              
              
              
              
              document.querySelector(".username-input").addEventListener("keyup", (e)=>{
                var verify_username= document.querySelector(".username-input").value
              if(verify_username.includes(" ")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                // console.log("hjhkj")
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.length > 25){
                document.querySelector(".pock").innerHTML="Characters too long!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("&")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("-")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("+")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("<")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(">")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(".")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(",")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("'")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("{")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("}")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("^")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("*")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("?")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("/")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes('"')){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("`")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("~")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(";")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(":")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("]")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("[")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("|")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("%")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("@")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("(")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(")")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else{
                document.querySelector(".pock").innerHTML=""
                document.querySelector(".button-signup").setAttribute("type", "submit");
              }
              
              var t1=document.querySelector(".spo").innerHTML
              var t2= document.querySelector(".pass-login1").value
              if(t1!=t2){
                document.querySelector(".pack").innerHTML="Password doesn't match!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(t1==t2){
                document.querySelector(".pack").innerHTML=""
                document.querySelector(".button-signup").setAttribute("type", "submit");
              }
              })
              
              
              
              document.querySelector(".username-input").addEventListener("change", (e)=>{
                var verify_username= document.querySelector(".username-input").value
              if(verify_username.includes(" ")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.length > 25){
                document.querySelector(".pock").innerHTML="Characters too long!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("&")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("-")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("+")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("<")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(">")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(".")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(",")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("'")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("{")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("}")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("^")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("*")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("?")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("/")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes('"')){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("`")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("~")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(";")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(":")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("]")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("[")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("|")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("%")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("@")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("(")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(")")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else{
                document.querySelector(".pock").innerHTML=""
                document.querySelector(".button-signup").setAttribute("type", "submit");
              }
              var t1=document.querySelector(".spo").innerHTML
              var t2= document.querySelector(".pass-login1").value
              if(t1!=t2){
                document.querySelector(".pack").innerHTML="Password doesn't match!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(t1==t2){
                document.querySelector(".pack").innerHTML=""
                document.querySelector(".button-signup").setAttribute("type", "submit");
              }
              })
              
              
              
              document.querySelector(".pass-login1").addEventListener("change", (e)=>{
              var t1=document.querySelector(".spo").innerHTML
              var t2= document.querySelector(".pass-login1").value
              if(t1!=t2){
                document.querySelector(".pack").innerHTML="Password doesn't match!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(t1==t2){
                document.querySelector(".pack").innerHTML=""
                document.querySelector(".button-signup").setAttribute("type", "submit");
              }
              var verify_username= document.querySelector(".username-input").value
              if(verify_username.includes(" ")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.length > 25){
                document.querySelector(".pock").innerHTML="Characters too long!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("&")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("-")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("+")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("<")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(">")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(".")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(",")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("'")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("{")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("}")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("^")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("*")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("?")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("/")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes('"')){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("`")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("~")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(";")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(":")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("]")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("[")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("|")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("%")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("@")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("(")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(")")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else{
                document.querySelector(".pock").innerHTML=""
                document.querySelector(".button-signup").setAttribute("type", "submit");
              }
              })
              
              document.querySelector(".pass-login2").addEventListener("change", (e)=>{
                document.querySelector(".spo").innerHTML=document.querySelector(".pass-login2").value
                var userpa=   document.querySelector(".spo").innerHTML
                if(userpa.length < 8 && userpa.length > 1){
                  document.querySelector(".yellow1").classList.remove("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.add("hid")
                  document.querySelector(".blue1").classList.add("hid")
                }
                else if(userpa.length == 0){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.remove("hid")
                  document.querySelector(".green1").classList.add("hid")
                  document.querySelector(".blue1").classList.add("hid")
                }
                else if(userpa.length >= 8 && userpa.length <= 10){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.add("hid")
                  document.querySelector(".blue1").classList.remove("hid")
                }
                else if(userpa.length > 10){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.add("hid")
                  document.querySelector(".blue1").classList.remove("hid")
              
                  if( userpa.includes("0") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                  document.querySelector(".blue1").classList.add("hid")
                }
                if( userpa.includes("9") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                  document.querySelector(".blue1").classList.add("hid")
                }
                if( userpa.includes("8") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                  document.querySelector(".blue1").classList.add("hid")
                }
                if( userpa.includes("7") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                  document.querySelector(".blue1").classList.add("hid")
                }
                if( userpa.includes("6") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                  document.querySelector(".blue1").classList.add("hid")
                }
                if( userpa.includes("5") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                  document.querySelector(".blue1").classList.add("hid")
                }
                if( userpa.includes("4") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                 document.querySelector(".blue1").classList.add("hid")
                }
                if( userpa.includes("3") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                  document.querySelector(".blue1").classList.add("hid")
                }
                if( userpa.includes("2") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                  document.querySelector(".blue1").classList.add("hid")
                }
                if( userpa.includes("1") ){
                  document.querySelector(".yellow1").classList.add("hid")
                  document.querySelector(".red1").classList.add("hid")
                  document.querySelector(".green1").classList.remove("hid")
                  document.querySelector(".blue1").classList.add("hid")
                } 
                }
                var t1=document.querySelector(".spo").innerHTML
              var t2= document.querySelector(".pass-login1").value
              if(t1!=t2){
                document.querySelector(".pack").innerHTML="Password doesn't match!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(t1==t2){
                document.querySelector(".pack").innerHTML=""
                document.querySelector(".button-signup").setAttribute("type", "submit");
              }
              var verify_username= document.querySelector(".username-input").value
              if(verify_username.includes(" ")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.length > 25){
                document.querySelector(".pock").innerHTML="Characters too long!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("&")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("-")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("+")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("<")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(">")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(".")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(",")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("'")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("{")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("}")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("^")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("*")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("?")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("/")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes('"')){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("`")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("~")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(";")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(":")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("]")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("[")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("|")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("%")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("@")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes("(")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else if(verify_username.includes(")")){
                document.querySelector(".pock").innerHTML="Space and Special characters not allowed!"
                document.querySelector(".button-signup").setAttribute("type", "button");
              }
              else{
                document.querySelector(".pock").innerHTML=""
                document.querySelector(".button-signup").setAttribute("type", "submit");
              }
              })