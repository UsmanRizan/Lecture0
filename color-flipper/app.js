const colors = ["#662938", "#F34F4A", "rgba(133,122,200)", "#004073"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    //get random number 0-3
    const randomNumber = getrandomnumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getrandomnumber () {
    return Math.floor( Math.random()*colors.length);
}
