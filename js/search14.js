function countdown(timer, onComplete) {
    const intervalId = setInterval(() => {
        if (timer > 0) {
            console.log(timer + " seconds remaining");
            timer--;
        } else {
            console.log("Time's up!");
            clearInterval(intervalId);
            if (typeof onComplete === 'function') {
                onComplete(); // chama o callback ao finalizar
            }
        }
    }, 5000);
}

function startCounter(timer, callback) {
    console.log("Starting counter for " + timer + " seconds");
    console.log("Counter started");
    countdown(timer, callback);
}

// Exemplo de uso com callback:
startCounter(5, () => {
    console.log("Contador finalizado! Executando ação do callback...");
});
