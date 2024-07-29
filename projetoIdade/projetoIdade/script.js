function gravar() {
    var ano = new Date();
    var idadeUsuario = document.getElementById('idade');
    var geracao = (idade - ano.getFullYear);
    
    var sexo = document.getElementsByName('rad'); 
    var fundo = document.getElementById('estilo');
    var titulo = document.getElementById('titulo');
    var texto = document.getElementById('texto');
    var s = document.getElementById('s');
  
    if (sexo[0].checked) {
      fundo.style.backgroundColor = 'pink'; 
    } else if (sexo[1].checked) {
      fundo.style.backgroundColor = 'blue'; 
    }
  
  }
  
  function clicar(){
    if(geracao<15){
        s.innerHTML('imagem/crianca.jpg')
    }
}