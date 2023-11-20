// in this file we are going to to write javaScript for the file resumeGenerator3.html, 
//as we need to add new element dynamically and also need to make changes to that new element.

// window.alert("loading");


// there is a even , a button clicked , hence in the response there has to be some action /even suppose to happen.

// that we are going to write here.

// add skill function 


function addSkill()
{

// so I have to 1.add a new element textarea, 2.then I need to get the container in which I am going to add this new element , as only that elements insert.before/after methods I have to use to insert the new element
// 3. I need to get the element before which I ahve to add the new element.

let newSkill=document.createElement("textarea");
newSkill.setAttribute("style","width:100%;margin-top:5px;");
newSkill.setAttribute("class","fuserSkills")
var skillcont=document.getElementById("skillCont");
var skillbtnCont=document.getElementById("skillAddbtnCnt");
skillcont.insertBefore(newSkill,skillbtnCont);

// this is the statement which inserts the new tag to the html page.
//( we are using dom methodology to understand the html structure in order to manipulate dynamically)
console.log("In the addskill function");

};

// function addWorkExperience
function addWorkExp() // we do not mention the  return type, cos its any, by default.// return type is actually there , its just not visible for us.
{

    // note, we ahve to write function , if not it will not work and gives error , that function is not define is not defined.
    let newworkExp=document.createElement("textarea");// this will return the object of the element.
   newworkExp.setAttribute("class","fworkexp");

   //
//    as I wana set more than one class to the textarea(other than my own), I need classList.add();
    newworkExp.setAttribute("style","width:100%;margin-top:5px;");
    var wrkcontainer=document.getElementById("wrkexpCont");// this will give me the instance of  tag/element /node  (container for workExp )
    // you need to put this element before another element ??? and you need to take a container for sure, //
    //cos using that container object only you are going to insert new element in it.

    // 1.so first I need to create a container's element in which I wana insert new element (using container's object.insertbefore() method).
//2. I need another element here before which I can insert new element.

    var buttonCont=document.getElementById("buttonCont"); // gives us the instance / or can simply say the tag div container for button

    //return newworkObj;
    wrkcontainer.insertBefore(newworkExp,buttonCont);
    
// once adding  class attribute to  textarea feilds(inculding the new ones), once that is done you can add n number of properties to your textarea

console.log("in the addWrok Exp function");
}; 


// I need to write a function for generate Cv button , function in the respnse of clicking that button (generateCv button )

function generateCvFun(){

    // 1.the very first thing I have to do is that , I need to put the values of all the elements of form, to cv template.
    //after which I need to do 2 things, 
// 2. should be doing , as soon as the generateCv button is clicked, 
//is that ,  have to hide the form container. 3.and unhide, the cv template, which was hidden as default.


// var formCont=document.getElementById("cvFormcont");
// formCont.setAttribute("class","formContProperty")
// var cvTempCont=document.getElementById("cvTempCont");
// cvTempCont.setAttribute("class","cvTempContProperty");

// note we can use shothand code to write the above code/ // optimized code.

 document.getElementById("tname").innerHTML=document.getElementById("fname").value;
 document.getElementById("temail").innerHTML=document.getElementById("femail").value;
 //document.getElementById("tphone").value=document.getElementById("fphone").value;
 document.getElementById("tphone").innerHTML=document.getElementById("fphone").value;
 var phone=document.getElementById("tphone").value;
 console.log(phone);
 // value can be fetched and displayed on the console, but in order to put it into dom tree/html tags we need to use inner html.


//  same way the inner html text cannot be displayed on the console can we??
 document.getElementById("taddress").innerHTML=document.getElementById("faddress").value;
// objective
//
//  just checking can we get the innerhtlml from form// yes we can , just checking
document.getElementById("Tfacebk").innerHTML=document.getElementById("Ffacebk").value;

document.getElementById("tobjective").innerHTML=document.getElementById("fobjective").value;
//
//skills 
let arrayofSkilltextarea=document.getElementsByClassName("fuserSkills");
// note, in javascript we do not need [] in front of variaable, its only in java.
console.log(typeof arrayofSkilltextarea);
// note : getElementByClass() will give you array,
// as there are more than one element we are fetching, element are fetched in form of objects.. 

// I need to fetch the array of objects and then traverse it .
let string="";
for(let singletxt of arrayofSkilltextarea)
{
//console.log(typeof singletxt);
string=string+`<li>${singletxt.value}</li>`;  // we are writing singletxt.value, cos its a  single object cooming from array of objects
//console.log(string);

}

document.getElementById("tuserSkills").innerHTML=string;  // we are not writing string.value, cos it is only applicable for objects.


//
// we ahve successfully fetched the list of skills, 
//now lets fetch all the list of workexperience details user have passed

let arrayWrkExp=document.getElementsByClassName("fworkexp");  // will give you array of objects(i.e array of textarea's)

let workString="";
for(let singlewrkfeild of arrayWrkExp)
{

workString=workString+`<li> ${singlewrkfeild.value} </li>`;
console.log(workString);
}


document.getElementById("Tworkexp").innerHTML=workString;

document.getElementById("cvFormcont").style.display="none";


document.getElementById("cvTempCont").style.display="block";




}