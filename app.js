const containerQR = document.getElementById('containerQR');
const formQr = document.getElementById('form-qr');

const QR = new QRCode(containerQR);

formQr.addEventListener('submit', e => {
	e.preventDefault();
	const value = formQr.textQr.value;
	QR.makeCode(value);
});
