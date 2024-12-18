function sendEmail() {
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
    }
    emailjs.send("service_myu52a2","template_3gtkhui", params)
    .then(function (res) {
        alert('Повідомлення надіслано!');
    })
}