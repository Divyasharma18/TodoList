var form=document.getElementById("addform");
var list=document.getElementById("list");
var event=form.addEventListener("submit",additem);
list.addEventListener("click",removeItem);

 
function additem(e)
{
    e.preventDefault();
    //now we are getting input value from input 
    var newlist=document.getElementById("inputvalue").value;
    // console.log(newlist);
    //now create new elemet for adding list in the page
    var tr=document.createElement("tr");
       tr.className= "responsive-table";
    //add text node with input value/
    tr.appendChild(document.createTextNode(newlist));
     //creating  delete button element
    //  console.log(tr);
     var dbtn=document.createElement("button");
     dbtn.className = "right waves-effect waves-light btn-small material-icons red lighten-2 delete ";
     dbtn.appendChild(document.createTextNode("delete"));
     tr.appendChild(dbtn);
     list.appendChild(tr);
     form.reset();
}
function removeItem(e) {
    if (e.target.classList.contains("delete")) {
    // if (confirm("Are You Sure?")) {
    var li = e.target.parentElement;
    list.removeChild(li);
    // }
   }
    }