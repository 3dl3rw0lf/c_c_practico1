let btnBuy = document.querySelector("#buy");

btnBuy.addEventListener("click", function calcular(){

  let nombre = document.getElementById("name").value;
  console.log(`${nombre}`);
  let typeName = "nombre";
  let apellido = document.getElementById("lastname").value;
  console.log(`${apellido}`);
  let typeLastName = "apellido";
  let email = document.getElementById("email").value;
  console.log(`${email}`);


  let quantity = document.getElementById("quantity").value;
  let choose = document.getElementById("typeViewer").value;

  if(nombre !== ""){
    validateName(nombre, typeName);
  }
  if(apellido !== ""){
    validateName(apellido, typeLastName);
  }
  if(email !== ""){
    validateMail(email);
  }
  console.log(`NAE:${nombre}, ${apellido}, ${email} `);

  console.log(`QC: ${quantity}, ${choose.toString()}`);

  function validateName(name, type){
    let expresionRegular = /^[A-Za-z]+$/
    if(expresionRegular.test(name)){
          return;
    }
    return alert(`Ingrese un ${type} válido`);
  }
  
  function validateMail(correo) {
      // Expresión regular para validar el formato del correo electrónico
      let expresionRegularM = /^[^\s@]+@(gmail\.com|yahoo\.com|yahoo\.com.ar|outlook\.com|hotmail\.com)$/i;
      if(expresionRegularM.test(correo)){
        return;
      }
       return alert(`Ingrese un email valido`);
  }
});

  

  
let btnReset = document.querySelector("#reset");

btnReset.addEventListener("click",reseteo);

function reseteo() {
    console.log(`work`);
    document.querySelector("form").reset();
}