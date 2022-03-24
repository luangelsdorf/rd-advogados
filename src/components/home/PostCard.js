import React from 'react';
import Link from "next/link";
import Img from '../Img';

export default function PostCard(props) {

  return (
    <div className="col-10 col-md-6 col-xl-4 post-card">
      <div>
        <div className="post-card-overlay">
          <Img src={props.img} className="w-100 h-100 object-fit-cover" alt="Card Img" />
          <a className="categoria cursor-pointer px-3">{props.category}</a>
        </div>
        <div className="post-card-body flex-center">
          <div>
            <span className="d-block text-dourado mt-4">{props.date}</span>
            <Link href={props.href}>
              <a className="d-block playfair post-title-link fs-22 mt-4 mb-3">{props.title}</a>
            </Link>
            <small className="mb-3 d-block">{props.body + '...'}</small>
            <Link href={props.href}>
              <a className="ler-mais">Ler Mais&nbsp;<span className="flecha">&rarr;</span></a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}