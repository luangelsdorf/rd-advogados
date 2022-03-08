import React from 'react';

export default function SobreNos({ textos }) {

    let btnText
    let lang = textos.locale.substring(0, 2)
    if (lang === 'pt') {
        btnText = 'Conheça Nossa Equipe'
    }
    else {
        btnText = 'Meet out Team'
    }

    return (
        <div className="container-fluid px-0 flex-center" id="sobre-nos">
            <div className="container px-4 px-sm-0">
                <div className="row align-items-center">
                    <div className="col-12 col-xl-6 text-center text-xl-start">
                        <span className="line-title w-max-content">{ textos.aboutUsSubTitle }</span>
                        <strong className="playfair fs-44 d-block text-escuro mb-3 break-spaces">{ textos.aboutUsTitle }</strong>
                        <img src="/img/mosaico.png" className="img-fluid d-block d-xl-none sobre-nos-img" alt="Mosaico"/>
                        <div className="sobre-nos-text" dangerouslySetInnerHTML={{__html: textos.aboutUsText}} />
                        <a href="#nossa-equipe" className="btn btn-primary btn-h-50 mt-4">
                            { btnText } <img src="/img/icons/long-arrow-alt-down-solid.svg" className="ms-2" width="12" height="12" alt="Flecha"/>
                        </a>
                    </div>

                    <div className="col-12 col-xl-6 position-relative">
                        <img src="/img/mosaico.png" className="img-fluid d-none d-xl-block" alt="Mosaico"/>
                    </div>
                </div>
            </div>
        </div>
    )
}