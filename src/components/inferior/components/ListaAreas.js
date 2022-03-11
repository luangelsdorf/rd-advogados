import React from 'react';
import Link from "next/link";

export default function ListaAreas({ textos, areas }) {

  let areasText
  let lang = textos.locale.substring(0, 2)
  if (lang === 'pt') {
    areasText = 'Áreas de Atuação'
  }
  else {
    areasText = 'Areas of Expertise'
  }

  const occAreas = [
    'Contratos de Trabalho',
    'Contratos Prestação de Serviços',
    'Revisão de Contratos Bancários ',
    'Verbas Rescisórias',
    'Benefício Assistencial',
    'Consumidor ',
    'Inventário e Testamentos ',
    'Direito de Saúde ',
    'Elaboração de Contratos',
    'Acidente do Trabalho',
  ]

  const half1 = occAreas.slice(0, occAreas.length / 2);
  const half2 = occAreas.slice(occAreas.length / 2);

  return (
    <div className="text-white px-3">
      <span className="list-title d-block playfair fs-20 text-center text-lg-start">{areasText}</span>
      <div className="d-flex justify-content-center justify-content-lg-between">
        <ul className="first-col">
          {
            half1.map((area, index) => {
              return (
                <li className="area-item" key={`area-${index}`}>
                  <Link href="#">
                    <a>{area}</a>
                  </Link>
                </li>
              )
            })
          }
        </ul>

        <ul>
          {
            half2.map((area, index) => {
              return (
                <li className="area-item" key={`area-${index}`}>
                  <Link href="#">
                    <a>{area}</a>
                  </Link>
                </li>
              )
            })
          }
        </ul>

      </div>
    </div>
  )
}