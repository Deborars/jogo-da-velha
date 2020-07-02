//minhas variaveis
let board=["","","","","","","","",""];//as posições no tabuleiro
let playerTime=0;// quem joga agora?
let symbols=["o", "x"];
let gameOver=false;

let winStates=[
    [0,1,2],//0
    [3,4,5],//1
    [6,7,8],//2
    [0,3,6],//3
    [1,4,7],//4
    [2,5,8],//5
    [0,4,8],//6
    [2,4,6]]; //7

function handleMove(position){
    
    if(gameOver){
        return;
    }
    
    if(board[position]==""){
        board[position]= symbols[playerTime];

        gameOver=isWin();

        if(gameOver==false){
            playerTime = (playerTime == 0) ? 1 : 0;
        }
    }

    return gameOver;
}

function isWin(){

        for(let i=0; i<winStates.length;i++){
            let seq=winStates[i];
            
            let pos1=seq[0];
            let pos2=seq[1];
            let pos3=seq[2];

            if(board[pos1]==board[pos2]&&
                board[pos1]==board[pos3]&&
                board[pos1]!=""){

                return true;
                }
        }
        return false;
    
}