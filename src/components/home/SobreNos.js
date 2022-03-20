import React from 'react';
import Img from '../Img';

export default function SobreNos({ content }) {

  return (
    <div className="container-fluid px-0 flex-center" id="sobre-nos">
      <div className="container px-4 px-sm-0">
        <div className="row g-5 align-items-center">
          <div className="col-12 col-xl-5 text-center text-xl-start">
            <span className="line-title w-max-content">{content.title.subtitle}</span>
            <strong className="playfair fs-44 d-block mb-3 break-spaces mx-auto mx-xl-0">{content.title.title}</strong>
            <div className="sobre-nos-text">
              <p>{content.text}</p>
            </div>
            <a href="#nossa-equipe" className="btn btn-primary btn-h-50 mt-4">
              {'Conheça As Sócias'}
            </a>
          </div>

          <div className="col-12 col-xl-7 position-relative">
            <div className="mosaic-wrapper">
              <div className="d-flex justify-content-center justify-content-xl-end align-items-center align-items-xl-start">
                <div className="d-flex flex-column">
                  <img className="decor-top d-none d-md-block" height="24" width="24" src="/img/decorations/square.svg" alt="" />
                  <Img className="left-img" src={content.leftImage.data.attributes} alt="" />
                </div>
                <div className="d-flex align-items-end">
                  <Img className="right-img" src={content.rightImage.data.attributes} alt="" />
                </div>
              </div>
              <div className="d-flex justify-content-center justify-content-xl-end bottom">
                <img className="d-none d-md-block" width="137" height="137" src="img/logo.svg" alt="" />
                <Img className="bottom-img" src={content.bottomImage.data.attributes} alt="" />
                <img className="img-fluid d-none d-md-block" src="/img/decorations/triangle.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}