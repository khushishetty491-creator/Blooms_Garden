function showMessage() {

    let messages = [
        "You are blooming beautifully! 🌸",
        "Have a lovely day! 🌷",
        "Keep growing and shining! 🌻",
        "Life is beautiful, just like flowers! 🌹"
    ];

    let randomNumber = Math.floor(Math.random() * messages.length);

    document.getElementById("message").innerHTML =
        messages[randomNumber];
}