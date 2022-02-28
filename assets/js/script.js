var numero = 69.90;

function pegaNumber() {
   var qtd = document.getElementById('input-number').value
   var res = qtd * numero;
   document.getElementById('valor').value = res.toLocaleString("pt-BR", { minimumFractionDigits: 2, style:'currency', currency: 'BRL'});;
 }
 
 function mascara(i){
   
     var v = i.value;
    
     if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
        i.value = v.substring(0, v.length-1);
        return;
     }
    
     i.setAttribute("maxlength", "14");
     if (v.length == 3 || v.length == 7) i.value += ".";
     if (v.length == 11) i.value += "-";
  }

  document.querySelector('input[type=email]').oninvalid = function() {

   // remove mensagens de erro antigas
   this.setCustomValidity("");
 
   // reexecuta validação
   if (!this.validity.valid) {
 
       // se inválido, coloca mensagem de erro
       this.setCustomValidity("Email obrigatório");
   }
 };

  document.querySelector('input#cvv').oninvalid = function() {

   // remove mensagens de erro antigas
   this.setCustomValidity("");
 
   // reexecuta validação
   if (!this.validity.valid) {
 
       // se inválido, coloca mensagem de erro
       this.setCustomValidity("Padrão inválido para CVV");
       
   }
 };

 