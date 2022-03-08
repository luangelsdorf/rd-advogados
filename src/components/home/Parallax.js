import React from 'react';

export default function Parallax({ textos }) {

    let btnText
    let lang = textos.locale.substring(0, 2)
    if (lang === 'pt') {
        btnText = 'Fale com um Advogado'
    }
    else {
        btnText = 'Speak with an Attorney'
    }

    return (
        <div className="container-fluid px-5 px-sm-0 parallax-container text-white flex-center flex-column">
            <strong className="playfair fs-32 d-block text-center">{ textos.parallaxTitle }</strong>
            <span className="d-block w-100 text-center my-20-30" id="parallax-text">
                { textos.parallaxSubTitle }
            </span>
            <a className="btn btn-secondary btn-h-50" href="#banner-inferior">{ btnText }</a>
        </div>
    )
}