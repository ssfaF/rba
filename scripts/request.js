function sendEmail() {
    let params = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        tel: document.getElementById('tel').value,
        message: document.getElementById('message').value,
    }
    emailjs.send("service_p1sz8x8","template_fh1o9s5", params)
    .then(function (res) {
        alert('Повідомлення надіслано!');
    })
}