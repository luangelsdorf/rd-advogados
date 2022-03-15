import React from 'react';

export default function FaleConosco({ contact }) {
  return (
    <>
      <span className="line-title w-max-content">{'NOSSOS CONTATOS'}</span>
      <div className="d-flex flex-column text-white align-items-center align-items-md-start">
        <strong className="playfair fs-44">{'Fale Conosco'}</strong>
        <span className=" contato-text" style={{ display: 'inlineBlock', maxWidth: '310px' }}>
          <p className="mb-3">{'Para entrar em contato com nossos profissionais utilize o formulário.'}</p>
          <p>{'Nossa equipe de atendimento retornará sua mensagem o mais breve possível.'}</p>
        </span>
        <div className="contatos-content">
          <span className="d-block mb-3">{'CONTATO'}</span>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-xl-start">
            <div>
              <img src="/img/phone.svg" alt="Phone" />
              <span className="ps-3 pe-4">{'51 3031.7222 '}</span>
            </div>
            <div>
              <img src="/img/mail.svg" alt="Mail" />
              <span className="ps-3">{'contato@rdsa.adv.br'}</span>
            </div>
          </div>
        </div>
        <div className="local-content">
          <span className="d-block mb-3">{'LOCALIZAÇÃO'}</span>
          <div className="d-flex align-items-center justify-content-center justify-content-xl-start">
            <img src="/img/local.svg" alt="Local" />
            <span className="ps-3 break-spaces">{'Rua Quinze de Janeiro, nº 184, sala 203, Bairro Centro - Canoas / RS | CEP 92010-300'}</span>
          </div>
        </div>
      </div>
    </>
  )
}