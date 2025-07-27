let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let li=document.querySelector

btn.addEventListener("click", function(){
    let li2=document.createElement("li");
    li2.innerText=inp.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete")
    li2.append(delBtn);

    ul.append(li2);
    inp.value="";
})

let delBtns=document.querySelectorAll(".delete");
for(let b of delBtns){
    b.addEventListener("click",function(){
        this.parentElement.remove();
    })
}

