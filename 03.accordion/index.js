const accordionHeaders=document.querySelectorAll(".accordion-header")
accordionHeaders.forEach((header)=>{
    header.addEventListener("click",()=>{
        let content=header.nextElementSibling

        document.querySelectorAll(".accordion-content").forEach((item)=>{
            if(item!=content){
                item.style.display="none"
            }
        })

        if(content.style.display=="block"){
            content.style.display="none"
        }else{
            content.style.display="block"
        }
    })
})