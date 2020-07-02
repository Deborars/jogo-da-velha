document.addEventListener("DOMContentLoaded", ()=>{
    let squares=document.querySelectorAll(".square");

    squares.forEach((square)=>{
        square.addEventListener("click",handleClick);
    })
})

function handleClick(event){
    let square=event.target;
    let position=square.id;

    if(handleMove(position)){
        updateSquares();
        setTimeout(()=>{
            alert("Game Over");}
            ,10)
    };
    updateSquares();

}

function updateSquares(){
    let squares=document.querySelectorAll(".square");

    squares.forEach((square)=>{
    let position=square.id;
    let symbol=board[position];

    if(symbol != ""){
        square.classList.add(symbol);
    }
    });
}

const restart=document.querySelector("button");
restart.addEventListener("click", ()=>{
    location.reload(false); //será reiniciado no cache com o valor false
})
