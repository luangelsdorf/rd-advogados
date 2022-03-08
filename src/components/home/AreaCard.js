import React from 'react';
import Link from 'next/link';

export default function AreaCard(props) {

  let lerMais
  if (props.lang === 'pt') {
    lerMais = 'Ler Mais'
  }
  else {
    lerMais = 'Read More'
  }

  return (
    <div className="col-10 col-md-6 col-lg-4">
      <Link href={props.href}>
        <a className="area-card cursor-pointer bg-white">
          <img className="d-block pb-3" src={`/img/area-cards/${props.icon}.svg`} alt={props.icon} />
          <div className="text-escuro playfair fs-22">{props.title}</div>
          <div className="py-4 text-normal">{props.children}</div>
          <span className="ler-mais">{lerMais} <span className="flecha">&rarr;</span></span>
        </a>
      </Link>
    </div>
  )
}