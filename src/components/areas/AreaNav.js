import Link from 'next/link';
import React, { useEffect, useState } from 'react';

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
    <div className="category-list">
      <div className="area-category">
        <h5>
          <a className="text-dourado" data-bs-toggle="collapse" href="#trab">
            Direito Trabalhista
          </a>
        </h5>
      </div>
      <div className="collapse services" id="trab">
        <ul>
          {
            areas.direitoTrab.map(area => {
              return (
                <li key={area.slug}>
                  <Link scroll={false} href={`/areas-de-atuacao/${area.slug}`}>
                    <a onClick={handler} className={`d-inline-flex justify-content-between align-items-center ${area.slug}`}>
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
        <h5>
          <a className="text-dourado" data-bs-toggle="collapse" href="#civil">
            Direito Civil
          </a>
        </h5>
      </div>
      <div className="collapse services" id="civil">
        <ul>
          {
            areas.direitoCivil.map(area => {
              return (
                <li key={area.slug}>
                  <Link scroll={false} href={`/areas-de-atuacao/${area.slug}`}>
                    <a onClick={handler} className={`d-inline-flex justify-content-between align-items-center ${area.slug}`}>
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
        <h5>
          <a className="text-dourado" data-bs-toggle="collapse" href="#prev">
            Direito Previdenciário
          </a>
        </h5>
      </div>
      <div className="collapse services" id="prev">
        <ul>
          {
            areas.direitoPrev.map(area => {
              return (
                <li key={area.slug}>
                  <Link scroll={false} href={`/areas-de-atuacao/${area.slug}`}>
                    <a onClick={handler} className={`d-inline-flex justify-content-between align-items-center ${area.slug}`}>
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