function validateName(name, type){
    let expresionRegular = /^[A-Za-z]+$/
    if(expresionRegular.test(name)){
          return console.log(`existe ${type}`);
    }
    return console.log(`Ingrese un ${type}`);
  }
  
  function validateMail(correo) {
      // Expresión regular para validar el formato del correo electrónico
      let expresionRegularM = /^[^\s@]+@(gmail\.com|yahoo\.com|yahoo\.com.ar|outlook\.com|hotmail\.com)$/i;
      if(expresionRegularM.test(correo)){
        return console.log(`existe mail`);
      }
       return console.log(`Ingrese un mail`);
  }
  