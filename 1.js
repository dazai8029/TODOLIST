const text=document.getElementById("text")
const list=document.getElementById("list")

function add(){
    if(text.value==""){
        alert("YOU NEED TO ENTER SOMETHING")
    }
    else
    {
        const li=document.createElement("li")
        li.innerHTML=text.value
        list.appendChild(li )
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    text.value=""
}

list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false)