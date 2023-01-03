import { useState } from 'react';
import './qrCode.css';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode'


function QrCode() {
    const [link, setLink] = useState('');
    const [qrCodeLink, setQrCodeLink] = useState('');

    function handleQrCode(e) {
        setLink(e.target.value);
        handleGenerate(e.target.value);
    }

    function handleGenerate(link_url) {
        QRCodeLink.toDataURL(link_url, {
            width: 600,
            margin: 3
        }, function (err, url) {
            setQrCodeLink(url);
        })
    }


    return (
        <div className="container">
            <div className='card'>
                <div className='qr-code'>
                    <QRCode value={link} size={200} bgColor={'#2B7EFA'} fgColor={'white'}/>
                </div>

                <h3 className='title'>Gerador de QRCode</h3>
                <span>Digite para Obter seu qrcode</span>

                <input
                    className='input'
                    placeholder='Digite seu link...'
                    value={link}
                    onChange={(e) => handleQrCode(e)}
                />
                <a href={qrCodeLink} download={`qrcode.png`}>Baixar QrCode</a>

            </div>
        </div>
    );
}

export default QrCode;