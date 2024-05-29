var contact = 0; //Valor da variavel de controle para a barra de navegação definido como zero

console.log(window.location.pathname); //Para depuração retorna no console (Ctrl=shift*i -- Console) qual o caminho para a página que está sendo exibida

if (window.location.pathname === "/suica-kelvinpalka.github.io/contact.html" || window.location.pathname === "/suica-kelvinpalka.github.io/tourism.html" || window.location.pathname === "/suica-kelvinpalka.github.io/gallery.html"  || window.location.pathname === "/suica-kelvinpalka.github.io/confirmar.html") { //verifica se a página é a de contato, ou de turismo, ou de galeria, ou de confirmação
    contact = 1; //caso positivo adiciona 1 a variavel de controle
}

window.addEventListener("scroll", function(){  //adiciona um verificador de rollagem da tela
  let scrollButton = document.querySelector(".scroll-to-top"); //seleciona a classe css .scroll-to-top
  scrollButton.classList.toggle('show', window.scrollY >  10);  //caso o verificador diga que arolagem é maior que 10 adiciona .show a classe css, o que faz a ancora aparecer
});

if (contact == 0) { //verifica se a variavel de controle é igual a zero, o que significa que as páginas são ou Home, ou History, ou Geography ou curiosities
    window.addEventListener("scroll", function(){  //adiciona um verificador de rolagem da tela
        let header = document.querySelector('#header'); //seleciona o id css #header
        header.classList.toggle('rolagem', window.scrollY > 195); //caso o verificador diga que a rolagem é maior que 195 adiciona .rolagem no id o que faz a barra de navegação mudar
       
        let button = document.querySelector('.btn-contato button'); //adiciona um verificador de rolagem da tela
        button.classList.toggle('rolagem', window.scrollY > 195 ); //caso o verificador diga que a rolagem é maior que 195 adiciona .rolagem na classe, altera a barra de navegação

        let iconText = document.querySelector('.icon-text'); //adiciona um verificador de rolagem da tela
        iconText.classList.toggle('rolagem', window.scrollY > 195); //caso o verificador diga que a rolagem é maior que 195 adiciona .rolagem na classe, o que muda o icone para trasnparente

        let iconHover = document.querySelector('.icon-hover'); //adiciona um verificador de rollagem da tela
        iconHover.classList.toggle('rolagem', window.scrollY > 195); //caso o verificador diga que a rolagem é maior que 195 adiciona .rolagem na classe, o que faz o icone aparecer
  });
} else { //caso contrário adiciona a classe aos mesmos itens sem depender da rolagem
    let header = document.querySelector('#header');
    header.classList.add('rolagem');

    let button = document.querySelector('.btn-contato button');
    button.classList.add('rolagem');

    let iconText = document.querySelector('.icon-text');
    iconText.classList.add('rolagem');

    let iconHover = document.querySelector('.icon-hover');
    iconHover.classList.add('rolagem');
}

const inputs = document.querySelectorAll(".input"); //giarda todos os elementos .input

function focusFunc() { //adiciona focus ao elemento pai, quando este se encontra em foco
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {  //retira a classe focus se o elemento perder o foco e estiver vazio
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => { //adiciona o verificador que chamará as funções quando necesárias
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

//Validação de formulário conforme ensinado na aula

function validar() {
  var Nome_do_Usuario = document.contato.Nome_do_Usuario.value;
  var email = document.contato.email.value;
  var telefone = document.contato.telefone.value;
  var telefonePattern = /^\(\d{2}\) 9\d{4}-\d{4}$/; //pagrão de telefone (DDD) 19 9XXXXX-XXXX

  if (Nome_do_Usuario == "") {
      alert("Por favor preencha o campo com o seu nome");
      document.contato.Nome_do_Usuario.focus();
      return false;
  }

  if (email == "") {
      alert("Por favor preencha o campo com o seu email");
      document.contato.email.focus();
      return false;
  }

  if (telefone == "") {
      alert("Por favor preencha o campo com o seu número de Telefone");
      document.contato.telefone.focus();
      return false;
  }

  if (!telefonePattern.test(telefone)) {
      alert("Por favor insira um número de telefone válido no formato (DDD) 9XXXX-XXXX.");
      document.contato.telefone.focus();
      return false;
  }

  return true;
}