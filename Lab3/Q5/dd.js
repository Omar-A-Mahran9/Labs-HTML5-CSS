let fNam=document.getElementById("fname")

let lNam=document.getElementById("lname")

fNam.addEventListener("blur",()=>{
    if(fNam.value==""){
        fNam.classList.add("style")
        }
    else{
        fNam.classList.remove("style")
    }
})

lNam.addEventListener("blur",()=>{
    if(lNam.value==""){
        lNam.classList.add("style")
        }
    else{
        lNam.classList.remove("style")
    }
})