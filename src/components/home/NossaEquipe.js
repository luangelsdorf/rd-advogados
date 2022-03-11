import React from 'react';

export default function NossaEquipe({ textos }) {

  return (
    <div className="container-fluid px-0 position-relative" id="nossa-equipe">
      <div className="container">
        <div className="w-100 text-center team-title">
          <span className="line-title w-max-content">{'NOSSA EQUIPE'}</span>
          <strong className="playfair fs-44 d-block break-spaces">{'Conheça as Sócias'}</strong>
        </div>
        <div className="row gap-5">
          <div className="col-12 col-xl-5 offset-xl-1">
            <img className="w-100" src="/img/roberta.png" alt="Roberta" />
          </div>
          <div className="col-12 col-xl-5">
            <img className="w-100" src="/img/solange.png" alt="Solange" />
          </div>
        </div>
      </div>
    </div>
  )
}