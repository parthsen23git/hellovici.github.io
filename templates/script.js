// script.js
function sendMessage() {
    var userInput = document.getElementById("user-input-box").value;
    appendMessage("user", userInput); // Display user message

    fetch("/get_response", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ input_text: userInput }),
    })
    .then(response => response.json())
    .then(data => {
        var chatbotResponse = data.response;
        appendMessage("chatbot", chatbotResponse); // Display chatbot response
    });
}

function appendMessage(sender, message) {
    var chatDisplay = document.getElementById("chat-display");
    var messageDiv = document.createElement("div");
    messageDiv.className = sender;
    messageDiv.textContent = message;
    chatDisplay.appendChild(messageDiv);
}
