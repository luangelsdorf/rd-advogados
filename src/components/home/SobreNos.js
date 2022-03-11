import React from 'react';

export default function SobreNos({ textos }) {

  return (
    <div className="container-fluid px-0 flex-center" id="sobre-nos">
      <div className="container px-4 px-sm-0">
        <div className="row align-items-center">
          <div className="col-12 col-xl-5 text-center text-xl-start">
            <span className="line-title w-max-content">{'QUEM SOMOS'}</span>
            <strong className="playfair fs-44 d-block mb-3 break-spaces">{'Conheça a \nRossi & Dorneles'}</strong>
            <img src="/img/mosaic.png" className="img-fluid d-block d-xl-none sobre-nos-img" alt="Mosaico" />
            <div className="sobre-nos-text">
              <p className="mb-4">Há 12 anos, o escritório Rossi & Dorneles surgiu a partir da afinidade das sócias com a área de atuação que já vinham desenvolvendo e adquirindo experiência, ao longo de 20 anos de trabalho em serviços prestados em escritórios renomados e no próprio Judiciário.</p>
              <p>O objetivo do escritório é estabelecer,  junto com o cliente, a solução mais adequada para as suas demandas, na busca do melhor resultado possível, com acolhimento e agilidade.</p>
            </div>
            <a href="#nossa-equipe" className="btn btn-primary btn-h-50 mt-4">
              {'Conheça As Sócias'}
            </a>
          </div>

          <div className="col-12 col-xl-6 offset-1 position-relative">
            <img src="/img/mosaic.png" className="img-fluid d-none d-xl-block" alt="Mosaico" />
          </div>
        </div>
      </div>
    </div>
  )
}