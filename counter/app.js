//set initial count
let count = 0;
//select value and button
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
btns.forEach(function (btn) {
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')){
            count--;
        }
        else if (styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        if (count < 0){
            value.style.color = 'red';
        }
        else if (count > 0){
            value.style.color = 'green'; 
        }
        else{
            value.style.color = '#173C5E' ;
        }
        value.textContent = count;
    })
});