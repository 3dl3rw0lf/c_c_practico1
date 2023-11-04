let buy = document.querySelector("#buy");

buy.addEventListener("click", function calcular(event) {
  event.preventDefault();
  let nombre = document.getElementById("name").value;
  console.log(`${nombre}`);
  let apellido = document.getElementById("lastname").value;
  console.log(`${apellido}`);
  let email = document.getElementById("email").value;
  console.log(`${email}`);

  const nomApeRegex = /^[a-zA-Z\s]+$/; // Expresión regular para nombre y apellido
  const emailRegex =
    /^(?:[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}|[^\s@]+@(gmail\.com|yahoo\.com|yahoo\.com\.ar|outlook\.com|hotmail\.com))$/i;
  // Expresión regular para correo electrónico


   // Función para mostrar avisos
   const showAlert = (elementId, mensaje) => {
    const element = document.getElementById(elementId);
    element.innerHTML = mensaje;
    return !mensaje;
  };

  // Validación de campos
  let isValidName = showAlert('alertN', !nombre || !nomApeRegex.test(nombre) ? 'Debe ingresar un nombre válido' : '');
  let isValidLastname = showAlert('alertL', !apellido || !nomApeRegex.test(apellido) ? 'Debe ingresar un apellido válido' : '');
  let isValidEmail = showAlert('alertM', !email || !emailRegex.test(email) ? 'Debe ingresar un correo electrónico válido' : '');

  console.log(`${isValidName}, ${isValidEmail}, ${isValidLastname}`);

  // Si todas las validaciones pasan, realiza el cálculo
  if (isValidName && isValidName && isValidEmail) {
    console.log(`entra`)
    let choose = document.getElementById("typeViewer").value;
    let quantity = parseFloat(document.getElementById("quantity").value);
    
    console.log(`QC: ${quantity}, ${choose}`);

    let discount = 0;
    const price = 200;
    let result = 0

    switch (choose) {
      case "suscriptor":
        discount = 0.8;
        break;
      case "fan":
        discount = 0.5;
        break;
      case "ocasional":
        discount = 0.15;
        break;
    }

    document.getElementById("name").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = ""; 

    result = (price - (price * discount)) * quantity;
    console.log(`Resultado : ${result}`);
    document.getElementById('total').value = result;
  }
  
  console.log(`NAE:${nombre}, ${apellido}, ${email} `);

});

let btnReset = document.querySelector("#reset");

btnReset.addEventListener("click", function reseteo() {
  console.log(`work`);
  document.querySelector("form").reset();
});
