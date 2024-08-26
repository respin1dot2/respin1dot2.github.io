import QrScanner from './src/qr-scanner.min.js';
console.log('linked');

const videoEl = document.getElementById('video');

const qrScanner = new QrScanner(
    videoEl,
    result => {
        document.querySelector('#scanned-value').innerText = result;
        console.log('decoded qr code:', result);
    }
)

qrScanner.start();
