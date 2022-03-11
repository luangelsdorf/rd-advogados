import React from 'react';
import data from '../../../src/data/data.json';
import AreaCard from "./AreaCard";

export default function Areas({ areas, textos }) {

  return (
    <div className="container-fluid px-0" id="areas-de-atuacao">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-5 offset-xl-1">
            <img src="/img/areas-placeholder.png" alt="Image" className="img-fluid" />
          </div>
          <div className="col-12 col-xl-5">
            <span className="line-title w-max-content">{'NOSSOS SERVIÇOS'}</span>
            <strong className="playfair fs-44 d-block break-spaces">{'Áreas de Atuação'}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}