import "./index.css";

import Icon from "./RPC-JP_Logo.png";
let img = document.createElement("img");
img.src = Icon;
img.setAttribute("id", "image");
document.getElementById("root").appendChild(img);

let form = document.createElement("form");
let p = document.createElement("p");
p.textContent = "Title";
let inp = document.createElement("input");
inp.placeholder="Title";
inp.setAttribute("id", "inp1");
let inpDiv = document.createElement("div");
inpDiv.append(p,inp);
inpDiv.setAttribute("id", "inpdiv");
let p1 = document.createElement("p");
p1.textContent = "Contain";
let testarea = document.createElement("textarea");
testarea.setAttribute("id", "testarea");
testarea.rows = "10";
testarea.cols ="10";
let testDiv = document.createElement("div");
testDiv.append(p1,testarea);
testDiv.setAttribute("id", "textdiv");
let btn = document.createElement("button");
btn.textContent = "Submit";
btn.setAttribute("id", "btn");
btn.addEventListener("click", showdata);
form.append(inpDiv,testDiv, btn);
let div = document.createElement("div");
div.append(form);
document.getElementById("show").append(div);
var arr=[];
function showdata(event){
    console.log("hello")
    event.preventDefault();
    let title = document.getElementById("inp1").value;
    let data = document.getElementById("testarea").value;
    var finaldata = {
        title: title,
        data: data,
    }
    arr.push(finaldata);
    localStorage.setItem("mydatabase", JSON.stringify(arr));

    let database = JSON.parse(localStorage.getItem("mydatabase"));
    database.map((item)=>{
        let div2 = document.createElement("div");
        div2.setAttribute("class", "div2")
        let titleDiv = document.createElement("div");
        titleDiv.append(item.title);
        titleDiv.setAttribute("class", "dataDiv");
        let dataDiv = document.createElement("div");
        dataDiv.setAttribute("class", "dataDiv");
        dataDiv.append(item.data);
        div2.append(titleDiv, dataDiv);
        document.getElementById("display").append(div2);
    })
}
