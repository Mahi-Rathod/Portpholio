
let tablinks= document.getElementsByClassName("tab-links");
let tabcontents= document.getElementsByClassName("tab-contents");

const opentab= (tabname)=>{
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

let bars = document.querySelector(".menu");
bars.addEventListener("click", function(){
    menubar = document.querySelector(".subhead1")
    menubar.style.display = "flex"
    bars.style.display = "none"
})

let cross = document.querySelector(".fa-times")
cross.addEventListener("click", function(){
    menubar = document.querySelector(".subhead1")
    menubar.style.display = "none"
    bars.style.display = "block"
})