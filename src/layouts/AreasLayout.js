import React from 'react';
import MainLayout from "./MainLayout";
import Link from "next/link";

export default function AreasLayout({ children }) {
    return (
        <div className="container-fluid px-0 flex-center position-relative" id="areas-de-atuacao">
            <img className="img-fluid position-absolute z-index-1" src="/img/themis.png" alt="Desenho"/>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <strong className="d-block text-escuro playfair ps-3 fs-24 mb-4">Áreas de Atuação</strong>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Link scroll={false} href="/areas-de-atuacao/consultivo-civel">
                                    <a className=" d-inline-flex justify-content-between w-100" id="consultivo-civel">
                                        <span>Consultivo Cível</span>
                                        <span className="fas fa-angle-right text-normal"/>
                                    </a>
                                </Link>
                            </li>

                            <li className="list-group-item">
                                <Link scroll={false} href="/areas-de-atuacao/contencioso-civil">
                                    <a className=" d-inline-flex justify-content-between w-100" id="contencioso-civil">
                                        <span>Contencioso Civil</span>
                                        <span className="fas fa-angle-right text-normal"/>
                                    </a>
                                </Link>
                            </li>

                            <li className="list-group-item">
                                <Link scroll={false} href="/areas-de-atuacao/direito-administrativo">
                                    <a className=" d-inline-flex justify-content-between w-100" id="direito-administrativo">
                                        <span>Direito Administrativo</span>
                                        <span className="fas fa-angle-right text-normal"/>
                                    </a>
                                </Link>
                            </li>

                            <li className="list-group-item">
                                <Link scroll={false} href="/areas-de-atuacao/direito-e-saude">
                                    <a className=" d-inline-flex justify-content-between w-100" id="direito-e-saude">
                                        <span>Direito e Saúde</span>
                                        <span className="fas fa-angle-right text-normal"/>
                                    </a>
                                </Link>
                            </li>

                            <li className="list-group-item">
                                <Link scroll={false} href="/areas-de-atuacao/empresarial-propriedade-intelectual">
                                    <a className=" d-inline-flex justify-content-between w-100" id="empresarial-propriedade-intelectual">
                                        <span>Empresarial/Propriedade Intelectual</span>
                                        <span className="fas fa-angle-right text-normal"/>
                                    </a>
                                </Link>
                            </li>

                            <li className="list-group-item">
                                <Link scroll={false} href="/areas-de-atuacao/lgpd">
                                    <a className=" d-inline-flex justify-content-between w-100" id="lgpd">
                                        <span>LGPD</span>
                                        <span className="fas fa-angle-right text-normal"/>
                                    </a>
                                </Link>
                            </li>

                            <li className="list-group-item">
                                <Link scroll={false} href="/areas-de-atuacao/trabalhista-previdenciario">
                                    <a className=" d-inline-flex justify-content-between w-100" id="trabalhista-previdenciario">
                                        <span>Trabalhista/Previdenciário</span>
                                        <span className="fas fa-angle-right text-normal"/>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-8 flex-center flex-column">

                        {children}

                        <div className="bg-dourado estamos-prontos">
                            <div className="prontos-text">
                                <strong className="text-right d-block fs-24 text-white playfair">
                                    Nós estamos prontos para atender você
                                </strong>
                            </div>
                            <a href="#banner-inferior" className="btn btn-secondary btn-h-50">Fale com um Advogado</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

/*
export async function getStaticPaths() {
    const response = await fetch('http://localhost:1337/areas')
    const areas = await response.json()
    const paths = areas.map(area => ({
        params: { area: area.slug }
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const response = await fetch(`http://localhost:1337/areas`)
    const areas = await response.json()

    return { props: { areas, params } }
}*/
