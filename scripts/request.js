function sendEmail() {
    let params = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        tel: document.getElementById('tel').value,
        message: document.getElementById('message').value,
    }
    emailjs.send("service_myu52a2","template_3gtkhui", params)
    .then(function (res) {
        alert('Повідомлення надіслано!');
    })
}