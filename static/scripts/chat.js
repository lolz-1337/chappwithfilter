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
        if (userText.match(/[Dd][Aa][MmRr][Nn]/)) {
            while (userText.match(/[Dd][Aa][MmRr][Nn]/)) {
                index = userText.match(/[Dd][Aa][MmRr][Nn]/).index;
                userText = userText.slice(0, index) + "****" + userText.slice(index + 4);
            }
        }
        if (userText.match(/[Ss][Hh][Ii][Tt]/)) {
            while (userText.match(/[Ss][Hh][Ii][Tt]/)) {
                index = userText.match(/[Ss][Hh][Ii][Tt]/).index;
                userText = userText.slice(0, index) + "****" + userText.slice(index + 4);
            }
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