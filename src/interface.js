document.addEventListener("DOMContentLoaded", ()=>{
    let squares=document.querySelectorAll(".square");


    squares.forEach((square)=>{
        square.addEventListener("click", (event)=>{
            console.log(event.target);
        })
    })
    

})
