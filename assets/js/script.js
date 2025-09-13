const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const checkIcon = document.getElementById('check-icon');

emailjs.init("4yGjmp-XLffoDuENt");

form.addEventListener('submit', function(event) {
  event.preventDefault(); // evita recarregar a página

  // Desativa o botão pra evitar múltiplos cliques
  submitBtn.disabled = true;
  submitBtn.textContent = "Enviando...";

  emailjs.sendForm('service_1j44qet', 'template_ovvb9xa', this)
    .then(() => {
      // Ao enviar com sucesso
      submitBtn.textContent = "Enviado! ";
      checkIcon.style.display = "inline"; // mostra o ícone
      form.reset(); // limpa o formulário

      // Se quiser, volta ao normal depois de alguns segundos
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = "Enviar";
        checkIcon.style.display = "none";
      }, 3000);

    }, (error) => {
      console.error('Erro:', error);
      submitBtn.disabled = false;
      submitBtn.textContent = "Enviar";
      alert('Erro ao enviar a mensagem.');
    });
});
