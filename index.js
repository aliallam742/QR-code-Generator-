function generateQRCode() {
    var textInput = document.getElementById('text-input').value;
    if (textInput.trim() !== '') {
        // Clear existing QR code
        document.getElementById('qr-code').innerHTML = '';

        // Generate new QR code
        var qrcode = new QRCode(document.getElementById('qr-code'), {
            text: textInput,
            width: 128,
            height: 128
        });
    }
}