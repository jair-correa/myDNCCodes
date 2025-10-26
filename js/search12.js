function startCounter(timer) {
    console.log("Starting counter for " + timer + " seconds");

    const intervalId = setInterval(() => {
        if (timer > 0) {
            console.log(timer + " seconds remaining");
            timer--;
        } else {
            console.log("Time's up!");
            clearInterval(intervalId);
        }
    }, 1000);

    console.log("Counter started");
}

startCounter(5);
// startCounter(10);