let hamberger=document.querySelector(".ham-btn-1");
let cross=document.querySelector(".ham-btn-2");
let side=document.querySelector(".sidebar");

cross.style.display='none';

hamberger.addEventListener("click",()=>{
    side.classList.toggle("sidebargo");
    hamberger.style.display='none';
    setTimeout(()=>{
        cross.style.display='inline';
    },500);
})
cross.addEventListener("click",()=>{
    side.classList.toggle("sidebargo");
    cross.style.display='none';
    hamberger.style.display='inline';
})
