// deposit somr money
// determine the number of lines to bet on
// collect a bet amount
// spin the slot machine
// check if the user won
// give the user there winning
// play again

const prompt = require("prompt-sync")();

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

const depositamount = deposit();
const numberoflines = getnumberoflines();
console.log(numberoflines);
