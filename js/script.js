document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome-usuario").value != "" && document.getElementById("email").value != "" && document.getElementById("tel").value != ""){
    alert("Prontinho! Você receberá as novidades por email e sms.")
  }else{
    alert("Por favor, preencha os campos nome, email e telefone!")
  }
}

