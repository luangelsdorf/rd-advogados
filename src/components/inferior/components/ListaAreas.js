import React from 'react';
import Link from "next/link";
import slugify from 'slugify';

export default function ListaAreas({ areas }) {

  const civilAreas = areas.data.attributes.civilLaw.civilLawServices;
  const laborAreas = areas.data.attributes.laborLaw.laborLawServices;
  const pensionAreas = areas.data.attributes.pensionLaw.pensionLawServices;
  const array = civilAreas.concat(laborAreas).concat(pensionAreas);

  array.splice(6, 1);
  array.splice(2, 1);
  array.splice(2, 1);

  const filtered = array.filter(area => area.title.length <= 25);
  const half1 = array.slice(0, filtered.length / 2);
  const half2 = array.slice(filtered.length / 2);

  return (
    <div className="text-white px-3">
      <div className="d-flex justify-content-between align-items-center list-title">
        <span>Áreas de Atuação</span>
        <Link href={`/areas-de-atuacao/${slugify(array[0].title, {lower: true})}`}>
          <a>
            <strong>Ver página completa</strong>
          </a>
        </Link>
      </div>
      <div className="d-flex justify-content-center justify-content-lg-between">
        <ul className="first-col">
          {
            half1.map((area, index) => {
              return (
                <li className="area-item" key={`area-${index}`}>
                  <Link href={`/areas-de-atuacao/${slugify(area.title, {lower: true})}`}>
                    <a>{area.title}</a>
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
                  <Link href={`/areas-de-atuacao/${slugify(area.title, {lower: true})}`}>
                    <a>{area.title}</a>
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