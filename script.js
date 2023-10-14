document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", function() {
        const userMessage = userInput.value;
        if (userMessage.trim() === "") return;

        appendMessage("You", userMessage);
        userInput.value = "";

        // Check if the user's message is a math expression
        if (isMathExpression(userMessage)) {
            try {
                const result = eval(userMessage);
                appendMessage("Result", `${result}`);
            } catch (error) {
                appendMessage("Result", "Please provide the correct mathematical expression so that i can calculate for you.");
            }
        } else {
            // Simulate a response (you can replace this with an actual chatbot response)
            setTimeout(function() {
                const botResponse = "Hey Buddy i am a Calculator not your partner.";
                appendMessage("Yours chatBot ", botResponse);
            }, 500);
        }
    });

    function isMathExpression(message) {
        // A simple check to see if the message looks like a math expression
        const mathRegex = /[0-9+\-*/() ]+/;
        return mathRegex.test(message);
    }

    function appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.className = "message";
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatBox.appendChild(messageElement);

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
