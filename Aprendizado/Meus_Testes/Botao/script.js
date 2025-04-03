document.getElementById("botao").addEventListener("click", function() {
    let cores = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33", "#33FFFF"];
    let corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
    
    let tamanhos = ["200px", "500px", "700px", "10px", "5px"];
    let tamanhoAleatorio = tamanhos[Math.floor(Math.random() * cores.length)];
    document.getElementById("botao").style.width = tamanhoAleatorio;
    document.getElementById("botao").style.height = tamanhoAleatorio;
    
});