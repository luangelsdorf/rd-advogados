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

    return (
        <div className="text-white px-3">
            <span className="list-title d-block playfair fs-20 text-center text-lg-start">{ areasText }</span>
            <div className="d-flex justify-content-center justify-content-lg-start">
                <ul className="first-col">
                    <li className="area-item">
                        <Link href={`/${textos.locale.substring(0, 2)}/areas-de-atuacao/consultivo-civil`}>
                            <a>{ areas[0].title }</a>
                        </Link>
                    </li>
                    <li className="area-item">
                        <Link href={`/${textos.locale.substring(0, 2)}/areas-de-atuacao/direito-empresarial`}>
                            <a>{ areas[1].title }</a>
                        </Link>
                    </li>
                    <li className="area-item">
                        <Link href={`/${textos.locale.substring(0, 2)}/areas-de-atuacao/lgpd`}>
                            <a>{ areas[2].title }</a>
                        </Link>
                    </li>
                    <li className="area-item">
                        <Link href={`/${textos.locale.substring(0, 2)}/areas-de-atuacao/direito-administrativo`}>
                            <a>{ areas[3].title }</a>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li className="area-item">
                        <Link href={`/${textos.locale.substring(0, 2)}/areas-de-atuacao/contencioso-civil`}>
                            <a>{ areas[4].title }</a>
                        </Link>
                    </li>
                    <li className="area-item">
                        <Link href={`/${textos.locale.substring(0, 2)}/areas-de-atuacao/trabalhista-previdenciario`}>
                            <a>{ areas[5].title }</a>
                        </Link>
                    </li>
                    <li className="area-item">
                        <Link href={`/${textos.locale.substring(0, 2)}/areas-de-atuacao/direito-e-saude`}>
                            <a>{ areas[6].title }</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}