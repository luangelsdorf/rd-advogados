import React from 'react';

export default function BannerSuperior({ title, subtitle, btn, post, lang, bannerClass }) {
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
      {
        btn ? (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="24" width="33.9411" height="33.9411" transform="rotate(-45 0 24)" fill="white" /><path d="M24.5147 32.485L16.0294 23.9998L33 23.9998L24.5147 32.485Z" fill="#E49B67" /><path d="M16.9053 23.6248L32.0652 23.6248L24.4853 16.0448L16.9053 23.6248Z" fill="#E49B67" stroke="#E49B67" stroke-width="0.75" /></svg>
        ) : null
      }
      <div className={`${bannerClass} container px-5 px-sm-0 text-white h-100 position-absolute d-${displayContainer} align-items-center top-0`}>
        <div id="banner-content">
          <strong className="playfair fs-72 d-block mb-4 break-spaces">{title}</strong>
          <span className="lh-24 d-block mb-4 break-spaces">{subtitle}</span>
          <div className="d-flex gap-3 flex-wrap">
            <a href="#areas-de-atuacao" className={`btn btn-primary btn-h-50 d-${displayBtn}`}>{btnText}</a>
            <a href="#areas-de-atuacao" className={`btn btn-transparent btn-h-50 d-${displayBtn}`}>Veja Quem Somos</a>
          </div>
        </div>
      </div>
    </div>
  )
}