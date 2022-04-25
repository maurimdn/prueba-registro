let form = document.getElementById("formulario");

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let nombre = document.getElementById("nombre").value;
    let password = document.getElementById("password").value;
    let formObj = {nombre, password}
    
    let formJson = JSON.stringify(formObj);


    fetch('http://localhost:3001/data', {
         method:"Post",
         headers: {
            "Content-Type": "application/json"
        },
         body: formJson
    })
 

})

