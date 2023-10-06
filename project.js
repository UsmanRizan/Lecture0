// deposit somr money
// determine the number of lines to bet on
// collect a bet amount
// spin the slot machine
// check if the user won
// give the user there winning
// play again

const prompt = require("prompt-sync")();
const ROW = 3;
const COL = 3;

const SYMBOL_COUNT = {
    A:2,
    B:4,
    C:6,
    D:8,
}
const SYMBOL_VALUES = {
    A:5,
    B:4,
    C:3,
    D:2,
}

const deposit = () =>{
    while (true){
        const depositamount = prompt("Enter amount in hand : ");
        const numberdepositamount = parseFloat(depositamount);

        if (isNaN(numberdepositamount)||numberdepositamount<=0) {
            console.log("Invalid input try again");
        }else{
            return numberdepositamount;
        }
    }
};

const getnumberoflines = () => {
    while (true){
        const lines = prompt("Enter number if lines : ");
        const numberoflines = parseFloat(lines);

        if (isNaN(numberoflines)||numberoflines<=0||numberoflines>3) {
            console.log("Invalid input try again");
        }else{
            return numberoflines;
        }
    }
}

const getbet = (balance,lines) =>{
    while (true){
        const bet = prompt("Enter bet per line : ");
        const numberbet = parseFloat(bet);

        if (isNaN(numberbet)||numberbet<=0||numberbet>balance/lines) {
            console.log("Invalid input try again");
        }else{
            return numberbet;
        }
    }
}

const spin = () =>{
    const symbols =[];
    for(const[symbol ,count] of Object.entries(SYMBOL_COUNT)){
        for (let i =0; i<count; i++){
            symbols.push(symbol)
        }
    }
    const reels = []
    for (let i=0; i < COL; i++){
        reels.push([])
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROW; j++){
                const randomIndex = Math.floor(Math.random()*reelSymbols.length);
            const selectedsymbol = reelSymbols[randomIndex];
            reels[i].push(selectedsymbol)
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
};

const reels = spin();
console.log(reels);

let balance = deposit();
const numberoflines = getnumberoflines();
const bet = getbet(balance,numberoflines);