const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br>
                         Email: ${email.value}<br>
                         Phone Number: ${phone.value}<br>
                         Message: ${message.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "projectexample66@gmail.com",
        Password: "2F7FB38656B35C9CF66DF3EFA1EA71CEC77D", 
        To: 'projectexample66@gmail.com',
        From: "projectexample66@gmail.com",
        Subject: subject.value || "No Subject",
        Body: bodyMessage
    }).then(
        response => alert("Email sent successfully!"),
        error => alert("Failed to send email: " + error)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    sendEmail(); 
});