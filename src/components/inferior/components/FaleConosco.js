import React from 'react';

export default function FaleConosco({ contact }) {
    let contato, local
    if (contact.locale.substring(0, 2) === 'pt') {
        contato = 'CONTATOS'
        local = 'LOCALIZAÇÃO'
    } else {
        contato = 'CONTACT'
        local = 'LOCATION'
    }
    return (
        <>
            <span className="line-title w-max-content">{ contact.contactSubTitle }</span>
            <div className="d-flex flex-column text-white">
                <strong className="playfair fs-44">{ contact.contactTitle }</strong>
                <span className=" contato-text">
                    {contact.contactMessage}
                </span>
                <div className="contatos-content">
                    <span className="d-block text-dourado mb-3">{ contato }</span>
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-xl-start">
                        <div>
                            <img src="/img/phone.svg" alt="Phone"/>
                            <span className="ps-3 pe-4">{ contact.phone }</span>
                        </div>
                        <div>
                            <img src="/img/mail.svg" alt="Mail"/>
                            <span className="ps-3">{ contact.email }</span>
                        </div>
                    </div>
                </div>
                <div className="local-content">
                    <span className="d-block text-dourado mb-3">{ local }</span>
                    <div className="d-flex align-items-center justify-content-center justify-content-xl-start">
                        <img src="/img/local.svg" alt="Local"/>
                        <span className="ps-3 break-spaces">{ contact.local }</span>
                    </div>
                </div>
            </div>
        </>
    )
}