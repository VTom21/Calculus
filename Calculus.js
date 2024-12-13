
//∫ x n dx = x n+1 / (n+1) + C

let base = document.querySelector(".base");
let power = document.querySelector(".power");

document.getElementById("btn1").addEventListener("click",(event)=>{

    event.preventDefault();
    
    let x = base.value;
    let n = parseInt(power.value);

    if(n != -1){    
        let result = `${x}^${n+1} / ${(n + 1)} + C`;
        document.querySelector(".result1").innerHTML = result;
    }
    else{
        document.querySelector(".result1").innerHTML = "Invalid Result!";
    }

})


