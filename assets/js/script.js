    document.getElementById("contact-form").addEventListener("submit", function(event){
        event.preventDefault();
        emailjs.sendForm('service_jhnjwvc','template_yo3exip',params)
        .then(()=>{
            alert("Mensagem Enviada com sucesso!");
        }, (error)=>{
            alert('Erro :' + JSON.stringify(error));
        });
    });