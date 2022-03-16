import React from 'react'

export default function CallToAction() {
  return (
    <section id="cta" className="mx-3">
      <div className="container bg-dourado px-4 px-lg-0">
        <div className="row gap-4">
          <div className="col-12 col-xl-6 offset-xl-1">
            <div className="fs-24 text-white">Atendemos a sua demanda de forma 100% online.</div>
            <span className="text-white">Escritório especializado em Direito do Trabalho, Direito Civil e Direito Previdenciário.</span>
          </div>
          <div className="col-12 col-xl-3 offset-xl-1 d-flex align-items-center justify-content-start justify-content-lg-end">
            <a href="#banner-inferior" className="btn btn-secondary">Fale com um Advogado</a>
          </div>
        </div>
      </div>
    </section>
  )
}
