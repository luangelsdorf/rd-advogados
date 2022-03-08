import React from 'react';
import Link from "next/link";
import HeadContent from "../../../src/components/HeadContent";
import TopHeader from "../../../src/components/superior/TopHeader";
import FixedHeader from "../../../src/components/superior/FixedHeader";
import BannerSuperior from "../../../src/components/superior/BannerSuperior";
import BannerInferior from "../../../src/components/inferior/BannerInferior";
import SubFooter from "../../../src/components/inferior/SubFooter";
import Footer from "../../../src/components/inferior/Footer";
import FixedWhats from "../../../src/components/FixedWhats";
import {hideNavigation} from "../../../public/js/modules";

export default function AreaPage({ area, areas, textos, contact }) {

    function handleNavClick() {
        hideNavigation(document.getElementById('navbarNav'))
    }

    return (
        <>
            <FixedWhats />
            <TopHeader contact={contact} />
            <FixedHeader contact={contact} />
            <BannerSuperior title={textos.bannerTitle} subtitle={textos.bannerSubTitle} btn={false} />

            <HeadContent page="areas" title={`${area[0].title} - BRC Advogados`} />
            <div className="container-fluid px-0 flex-center position-relative" id="areas-de-atuacao">
                <img className="img-fluid position-absolute z-index-1" src="/img/themis.png" alt="Desenho"/>
                <div className="container px-5 px-sm-0">
                    <div className="row">
                        <div className="col-4 d-none d-md-block">
                            <strong className="d-block text-escuro playfair ps-3 fs-24 mb-4">Áreas de Atuação</strong>
                            <ul className="list-group list-group-flush">

                                {
                                    areas.map(area => {
                                        return (
                                            <li className="list-group-item" key={area.slug}>
                                                <Link scroll={false} href={`/${textos.locale.substring(0, 2)}/areas-de-atuacao/${area.slug}`}>
                                                    <a className=" d-inline-flex justify-content-between align-items-center w-100" id={`${area.slug}`}>
                                                        <span>{area.title}</span>
                                                        <div>
                                                            <svg height="12" width="12" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
                                                        </div>
                                                    </a>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                        <div className="col-12 col-md-8 flex-center flex-column">
                            <div className="flex-center flex-column">
                                <div>
                                    <nav className="navbar navbar-light mb-4 d-block d-md-none">
                                        <div className="container-fluid p-0">
                                            <div className="mb-3 w-100 d-flex align-items-center justify-content-between">
                                                <span className="fs-24 text-dourado playfair area-nav-title">Selecione uma <br/> Área de Atuação</span>
                                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false">
                                                    <span className="navbar-toggler-icon" />
                                                </button>
                                            </div>
                                            <div className="collapse navbar-collapse" id="navbarNav">
                                                <ul className="navbar-nav">
                                                    {
                                                        areas.map(area => {
                                                            return (
                                                                <li className="nav-item my-3" key={area.slug} onClick={ handleNavClick }>
                                                                    <Link scroll={false} href={`/${textos.lang}/areas-de-atuacao/${area.slug}`}>
                                                                        <a className=" d-inline-flex justify-content-between align-items-center w-100" id={`${area.slug}`}>
                                                                            <span>{area.title}</span>
                                                                            <div>
                                                                                <svg height="12" width="12" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
                                                                            </div>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                    <strong className="d-block text-escuro playfair fs-44 mb-4">{area[0].title}</strong>
                                    <span className="area-text" dangerouslySetInnerHTML={{__html: area[0].description}} />
                                </div>
                            </div>
                        </div>

                        <div className="row m-0">
                            <div className="col-md-4" />
                            <div className="col-12 col-md-8">
                                <div className="bg-dourado estamos-prontos flex-wrap">
                                    <div className="prontos-text">
                                        <strong className="text-center text-md-end d-block fs-24 text-white playfair">
                                            { textos.callout }
                                        </strong>
                                    </div>
                                    <a href="#banner-inferior" className="btn btn-secondary btn-h-50">Fale com um Advogado</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <BannerInferior contact={contact} areas={areas} />
            <SubFooter areas={areas} textos={textos} contact={contact} />
            <Footer contact={contact} textos={textos} />
        </>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://brcadv.com/strapi/servicos')
    const resAreas = await res.json()
    const paths = resAreas.map((area) => ({
        params: { slug: area.slug },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://brcadv.com/strapi/servicos?slug=${params.slug}`)
    const area = await res.json()

    const resAll = await fetch('https://brcadv.com/strapi/servicos')
    const areas = await resAll.json()

    const resText = await fetch('https://brcadv.com/strapi/areas-de-atuacao')
    const textos = await resText.json()

    const resRedes = await fetch('https://brcadv.com/strapi/contatos')
    const contact = await resRedes.json()

    return {
        props: {
            area, areas, textos, contact
        },
        revalidate: 1
    }
}