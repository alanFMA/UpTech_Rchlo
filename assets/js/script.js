var numero = 69.90;

function pegaNumber() {
   var qtd = document.getElementById('input-number').value
   var res = qtd * numero;
   document.getElementById('valor').value = res.toLocaleString("pt-BR", { minimumFractionDigits: 2, style:'currency', currency: 'BRL'});;
 }
 
 function mascaracpf(i){
   
     var v = i.value;
    
     if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
        i.value = v.substring(0, v.length-1);
        return;
     }
    
     i.setAttribute("maxlength", "14");
     if (v.length == 3 || v.length == 7) i.value += ".";
     if (v.length == 11) i.value += "-";
  }

//   document.getElementById('cpf').oninvalid = function() {

//     // remove mensagens de erro antigas
//     this.setCustomValidity("");
  
//     // reexecuta validação
//     if (!this.validity.valid) {
  
//         // se inválido, coloca mensagem de erro
//         this.setCustomValidity("CPF inválido");
//     }
//   };

function mascaracartao(o,f){
v_obj=o
v_fun=f
setTimeout("execmascara()",1)
}
function execmascara(){
   v_obj.value=v_fun(v_obj.value)
}
function mcc(v){
   v=v.replace(/\D/g,"");
   v=v.replace(/^(\d{4})(\d)/g,"$1 $2");
   v=v.replace(/^(\d{4})\s(\d{4})(\d)/g,"$1 $2 $3");
   v=v.replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g,"$1 $2 $3 $4");
   return v;
}
function id(cc){
  return document.getElementById(cc);
}
window.onload = function(){
  id('cc').onchange = function(){
     mascaracartao(this, mcc);
  }
}


function onValidate(el, messageError) {
   el.setCustomValidity("");
   el.style.boxShadow = null;
   
   if (!el.validity.valid) {
      el.setCustomValidity(messageError);
      el.style.boxShadow = "0 0.5px 0.5px rgba(0,0,0, 0.075) inset, 0 0 5px #c22828";
   }
}