import React from 'react';

export default function FaleConosco({ content, infos }) {
  return (
    <>
      <span className="line-title w-max-content">{content.title.subtitle}</span>
      <div className="d-flex flex-column text-white align-items-center align-items-md-start">
        <strong className="playfair fs-44">{content.title.title}</strong>
        <span className=" contato-text" style={{ display: 'inlineBlock', maxWidth: '310px' }}>
          <p>{content.text}</p>
        </span>
        <div className="contatos-content">
          <span className="d-block mb-3">{'CONTATO'}</span>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-xl-start">
            <div>
              <img src="/img/phone.svg" alt="Phone" />
              <span className="ps-3 pe-4">{infos.phone}</span>
            </div>
            <div>
              <img src="/img/mail.svg" alt="Mail" />
              <span className="ps-3">{infos.email}</span>
            </div>
          </div>
        </div>
        <div className="local-content">
          <span className="d-block mb-3">{'LOCALIZAÇÃO'}</span>
          <div className="d-flex align-items-center justify-content-center justify-content-xl-start">
            <img src="/img/local.svg" alt="Local" />
            <span className="ps-3 break-spaces">{infos.location}</span>
          </div>
        </div>
      </div>
    </>
  )
}