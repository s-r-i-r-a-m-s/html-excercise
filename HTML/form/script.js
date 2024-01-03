const arrValue = [];
function getValue(name,password){
const userDetails = {
    name : name,password : password
  };
  arrValue.push(userDetails);
  console.log(arrValue)
  cond();
  location.href="en.html";
  console.log(nameobj)
}
function cond(){
    alert("now enter");
}


function verify(){
let veri = document.getElementById("verify").value;
if(nameobj.name == veri){
alert("login successsesss!");
}
else{
alert("this enough da ");
}
}





