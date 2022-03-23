import React from 'react'

export default function CallToAction({ content }) {
  return (
    <section id="cta" className="mx-3">
      <div className="container bg-dourado px-4 px-lg-0">
        <div className="row gap-4">
          <div className="col-12 col-xl-6 offset-xl-1">
            <div className="fs-24 text-white">{content.text}</div>
            <span className="text-white">{content.longText}</span>
          </div>
          <div className="col-12 col-xl-3 offset-xl-1 d-flex align-items-center justify-content-start justify-content-lg-end">
            <a href="#banner-inferior" className="btn btn-secondary">Fale com um Advogado</a>
          </div>
        </div>
      </div>
    </section>
  )
}
