function enviarMensagem() {
    let numero = document.getElementById("numero").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();
    
    if (numero === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }
    
    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}
