
let arrow= document.getElementById("arrow_id")

arrow.style.display="none"

window.addEventListener("scroll",(e)=>{
    if(document.documentElement.scrollTop >=400){
        arrow.style.display="block"
    }
    else{
        arrow.style.display="none"
    }
})

