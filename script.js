
const form = document.querySelector(".formulario form");


form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    
    const nome = form.querySelector('input[placeholder="Seu nome completo:"]');
    const email = form.querySelector('input[placeholder="Seu e-mail:"]');
    const celular = form.querySelector('input[placeholder="Seu celular:"]');
    const mensagem = form.querySelector('textarea[placeholder="Sua mensagem"]');

   
    if (!nome.value.trim()) {
        alert("Por favor, preencha o campo Nome.");
        nome.focus();
        return;
    }

    if (!email.value.trim() || !validateEmail(email.value)) {
        alert("Por favor, insira um e-mail válido.");
        email.focus();
        return;
    }

    if (!mensagem.value.trim()) {
        alert("Por favor, escreva sua mensagem.");
        mensagem.focus();
        return;
    }

    
    const formData = {
        nome: nome.value,
        email: email.value,
        celular: celular.value,
        mensagem: mensagem.value,
    };

    console.log("Dados enviados:", formData);

    
    alert("Mensagem enviada com sucesso!");
    form.reset(); 
});


function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


document.querySelectorAll('.menu-desktop a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        
        const targetId = this.getAttribute('href').slice(1); 
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
           
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
