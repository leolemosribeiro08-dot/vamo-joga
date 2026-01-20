const botaoSim = document.getElementById("sim");

// Botão SIM → abrir WhatsApp
botaoSim.addEventListener("click", () => {
    const numero = "5551920049759"; 
    const mensagem = encodeURIComponent("VAMOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOS");
    const url = `https://wa.me/${numero}?text=${mensagem}`;
    window.open(url, "_blank");
});

