let elements=document.querySelectorAll(".color-switcher li")

let classesList=[];

document.body.classList.add(localStorage.getItem("pageColor")||"red")

for(let i=0; i<elements.length ;i++){

classesList.push(elements[i].getAttribute("data-color"))

elements[i].addEventListener("click",function(){

document.body.classList.remove(...classesList)
document.body.classList.add(this.getAttribute("data-color"))

localStorage.setItem("pageColor",this.getAttribute("data-color"))

})

}