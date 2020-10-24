document.getElementById("submit").addEventListener("click", checker);


function checker(){
    const email = document.getElementById("email").value;
    const son = email.split(".");
    
    if (son[1].includes("com") || son[1].includes("co")){

        document.getElementById("result").innerText = "This is valid email adress"
        

    } 
    else{
        document.getElementById("result").innerText = "This is invalid email adress"
    }
}