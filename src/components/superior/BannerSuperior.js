import React from 'react';

export default function BannerSuperior({ title, subtitle, btn, post, lang }) {
    let displayBtn
    if (btn) {
        displayBtn = 'inline-flex'
    } else {
        displayBtn = 'none'
    }

    let displayContainer
    if (post) {
        displayContainer = 'none'
    } else {
        displayContainer = 'flex'
    }

    let btnText
    if (lang === 'pt') {
        btnText = 'Conheça Nossos Serviços'
    }
    else {
        btnText = 'See Our Services'
    }

    return (
        <div className="container-fluid p-0 position-relative d-flex justify-content-center" id="banner-superior">
            <div className={`container px-5 px-sm-0 text-white h-100 position-absolute d-${displayContainer} align-items-center top-0`}>
                <div id="banner-content">
                    <strong className="playfair fs-72 d-block mb-4 break-spaces">{ title }</strong>
                    <span className="lh-24 d-block mb-4 break-spaces">{ subtitle }</span>
                    <a href="#areas-de-atuacao" className={`btn btn-primary btn-h-50 d-${displayBtn}`}>{btnText}</a>
                </div>
            </div>
        </div>
    )
}