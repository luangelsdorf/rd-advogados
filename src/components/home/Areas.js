import React from 'react';

export default function Areas({ content }) {

  console.log(content);

  return (
    <div className="container-fluid" id="areas-de-atuacao">
      <div className="container">
        <div className="row g-5">
          <div className="col-12 col-xl-5 offset-xl-1">
            <div className="areas-img-container">
              <img src="/img/areas-image.png" alt="Image" className="" />
              <div className="overlay-90" />
              <div className="overlay-60" />
              <img src="/img/logo.svg" alt="" className="areas-logo" />
            </div>
          </div>
          <div className="col-12 col-xl-5">
            <span className="line-title w-max-content text-dourado mt-3">{content.title.subtitle}</span>
            <strong className="playfair fs-44 d-block break-spaces">{content.title.title}</strong>
            <span className="areas-text">{content.description}</span>
            <div className="our-services">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <img src="/img/area-cards/consultivo-civel.svg" alt="" />
                  <div>
                    <strong className="fs-24 d-block">Direito Trabalhista</strong>
                    <small>Contratos, Verbas e Acordos</small>
                  </div>
                </div>
                <a className="btn btn-primary flex-center" style={{ padding: '0', height: '40px', width: '40px' }} href="/areas-de-atuacao/contratos-de-trabalho">
                  <svg height="12" width="12" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                </a>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <img src="/img/area-cards/contencioso-civil.svg" alt="" />
                  <div>
                    <strong className="fs-24 d-block">Direito Civil</strong>
                    <small>Inventários, Testamentos e Saúde</small>
                  </div>
                </div>
                <a className="btn btn-primary flex-center" style={{ padding: '0', height: '40px', width: '40px' }} href="/areas-de-atuacao/contratos-de-trabalho">
                  <svg height="12" width="12" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                </a>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <img src="/img/area-cards/trabalhista-e-previdenciario.svg" alt="" />
                  <div>
                    <strong className="fs-24 d-block">Direito Previdenciário</strong>
                    <small>Aposentadoria, Benefícios e Auxílios</small>
                  </div>
                </div>
                <a className="btn btn-primary flex-center" style={{ padding: '0', height: '40px', width: '40px' }} href="/areas-de-atuacao/contratos-de-trabalho">
                  <svg height="12" width="12" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}