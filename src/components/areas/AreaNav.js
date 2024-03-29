import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import slugify from 'slugify';

export default function AreaNav({ areas, handleClick }) {

  useEffect(() => {
    const path = window.location.pathname.split('/');
    const slug = path[path.length - 1];
    const activeLink = document.querySelectorAll(`.${slug}`)[0];
    const activeLinks = document.querySelectorAll(`.${slug}`);
    const collapseTarget = activeLink.parentElement.parentElement.parentElement;

    document.querySelectorAll('.services a').forEach(link => link.style.color = '');

    const activeColor = getComputedStyle(document.documentElement).getPropertyValue('--orange');
    const collapse = new bootstrap.Collapse(collapseTarget, { toggle: false });
    collapse.show();
    activeLinks.forEach(link => link.style.color = activeColor);
  });

  const handler = handleClick ?? null;

  return (
    <div className="category-list" id="navegacao">
      <div className="area-category">
        <h6>
          <a className="text-dourado" data-bs-toggle="collapse" href="#trab">
            Direito Trabalhista
          </a>
        </h6>
      </div>
      <div className="collapse services" id="trab">
        <ul>
          {
            areas.direitoTrab.map(area => {
              return (
                <li key={slugify(area.title, {lower: true})}>
                  <Link scroll={false} href={`/areas-de-atuacao/${slugify(area.title, {lower: true})}`}>
                    <a onClick={handler} className={`d-inline-flex justify-content-between align-items-center ${slugify(area.title, {lower: true})}`}>
                      <span>{area.title}</span>
                    </a>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="area-category">
        <h6>
          <a className="text-dourado" data-bs-toggle="collapse" href="#civil">
            Direito Civil
          </a>
        </h6>
      </div>
      <div className="collapse services" id="civil">
        <ul>
          {
            areas.direitoCivil.map(area => {
              return (
                <li key={slugify(area.title, {lower: true})}>
                  <Link scroll={false} href={`/areas-de-atuacao/${slugify(area.title, {lower: true})}`}>
                    <a onClick={handler} className={`d-inline-flex justify-content-between align-items-center ${slugify(area.title, {lower: true})}`}>
                      <span>{area.title}</span>
                    </a>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="area-category">
        <h6>
          <a className="text-dourado" data-bs-toggle="collapse" href="#prev">
            Direito Previdenciário
          </a>
        </h6>
      </div>
      <div className="collapse services" id="prev">
        <ul>
          {
            areas.direitoPrev.map(area => {
              return (
                <li key={slugify(area.title, {lower: true})}>
                  <Link scroll={false} href={`/areas-de-atuacao/${slugify(area.title, {lower: true})}`}>
                    <a onClick={handler} className={`d-inline-flex justify-content-between align-items-center ${slugify(area.title, {lower: true})}`}>
                      <span>{area.title}</span>
                    </a>
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