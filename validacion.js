export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
      validadores[tipoDeInput](input);
    }
  
    if (input.validity.valid) {
      input.parentElement.classList.remove("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
      input.parentElement.classList.add("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML =
        mostrarMensajeDeError(tipoDeInput, input);
        console.log(tipoDeInput)
    }
  }
  
  export function validatext(textarea) {
    const tipoDeInput = textarea.dataset.textarea;
    console.log("text",tipoDeInput)
  
    if (textarea.validity.valid) {
      textarea.parentElement.classList.remove("textarea-container--invalid");
      textarea.parentElement.querySelector(".textarea-message-error").innerHTML = "";
    } else {
      textarea.parentElement.classList.add("textarea-container--invalid");
      textarea.parentElement.querySelector(".textarea-message-error").innerHTML =
        mostrarMensajeDeErrorText(tipoDeInput, textarea);
        console.log("text",tipoDeInput)
    }
  }




  const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
  ];
  
  const mensajesDeError = {
    nombre: {
      valueMissing: "El campo nombre no puede estar vacío",
    },
    email: {
      valueMissing: "El campo correo no puede estar vacío",
      typeMismatch: "El correo no es válido",
    },
    password: {
      valueMissing: "El campo contraseña no puede estar vacío",
      patternMismatch:
        "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
    },
    nacimiento: {
      valueMissing: "Este campo no puede estar vacío",
      customError: "Debes tener al menos 18 años de edad",
    },
    numero: {
      valueMissing: "Este campo no puede estar vacío",
      patternMismatch: "El formato requerido es XXXXXXXXXX 10 números",
    },
    asunto: {
      valueMissing: "Este campo no puede estar vacío",
      patternMismatch: "El asunto  debe contener entre 10 a 60 caracteres.",
    },
    ciudad: {
      valueMissing: "Este campo no puede estar vacío",
      patternMismatch: "La ciudad debe contener entre 10 a 40 caracteres.",
    },
    estado: {
      valueMissing: "Este campo no puede estar vacío",
      patternMismatch: "El estado debe contener entre 10 a 40 caracteres.",
    },
    mensaje: {
      valueMissing: "Este campo no puede estar vacío",
      patternMismatch: "El mensaje debe contener entre 10 a 500 caracteres.",
    },
  };
  
  const validadores = {
    nacimiento: (input) => validarNacimiento(input),
  };
  
  function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (input.validity[error]) {
        console.log(tipoDeInput, error);
        console.log(input.validity[error]);
        console.log(mensajesDeError[tipoDeInput][error]);
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });
    return mensaje;
  }
  
  function mostrarMensajeDeErrorText(tipoDeInput, textarea) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (textarea.validity[error]) {
        console.log(tipoDeInput, error);
        console.log(textarea.validity[error]);
        console.log(mensajesDeError[tipoDeInput][error]);
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });
    return mensaje;
  }



  function validarNacimiento(input) {
    const fechaCliente = new Date(input.value);
    let mensaje = "";
    if (!mayorDeEdad(fechaCliente)) {
      mensaje = "Debes tener al menos 18 años de edad";
    }
  
    input.setCustomValidity(mensaje);
  }
  
  function mayorDeEdad(fecha) {
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
      fecha.getUTCFullYear() + 18,
      fecha.getUTCMonth(),
      fecha.getUTCDate()
    );
    return diferenciaFechas <= fechaActual;
  }
  