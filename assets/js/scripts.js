function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

function abrirWhatsapp() {
  var nome = document.getElementById("form-Name").value;
  var email = document.getElementById("form-email").value;
  var telefone = document.getElementById("form-tel").value;
  var dataDesejada = document.getElementById("form-date").value;
  // var url = "https://wa.me/5531989773977?text=" // Seu número
  var url = "https://wa.me/5533991384321?text=" // Seu número
    + "Olá, me chamo " + nome + " e gostaria de marcar uma consulta para o dia " + dataDesejada + "! %0a"
    + "%0a" // Quebra de linha
    + "*E-mail*: " + email + "%0a"
    + "*Telefone*: " + telefone + "%0a"
  window.open(url, '_blank').focus();
}

ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 800
}).reveal(`
  #homeBox header h3,
  #homeBox header h2,
  #homeBox header h1,
  #homeBox header button,
  #treatment header h2,
  #treatment header h1,
  #procedure header h2,
  #procedure header h1,
  #aurora header h2,
  #aurora header h1,
  #about header h2,
  #about header h1,
  #schedule header h2,
  #schedule header h1,
  #contact header h2,
  #contact header h1,
  #treatment .content img,
  #procedure .content img,
  #about .content img,
  p,
  h3,
  h2,
  h1 
  `)