
var coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function firstBotMessage() {
    let firstMessage = "Hi from sender!"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "Enter some text!";
    }
    else {
        if (userText.includes("Damn")) {
            userText = userText.slice(0, userText.indexOf("Damn")) + "****" + userText.slice(userText.indexOf("Damn") + 4);
        }
        else if (userText.includes("Darn")) {
            userText = userText.slice(0, userText.indexOf("Darn")) + "****" + userText.slice(userText.indexOf("Darn") + 4);
        }
        else if (userText.includes("Bad")) {
            userText = userText.slice(0, userText.indexOf("Bad")) + "***" + userText.slice(userText.indexOf("Bad") + 3);
        }
        else if (userText.includes("Worse")) {
            userText = userText.slice(0, userText.indexOf("Worse")) + "*****" + userText.slice(userText.indexOf("Worse") + 5);
        }
        else if (userText.includes("Worst")) {
            userText = userText.slice(0, userText.indexOf("Worst")) + "*****" + userText.slice(userText.indexOf("Worst") + 5);
        }
        else if (userText.includes("Shit")) {
            userText = userText.slice(0, userText.indexOf("Shit")) + "****" + userText.slice(userText.indexOf("Shit") + 4);
        }
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)
}

function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
    getResponse();
}
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});