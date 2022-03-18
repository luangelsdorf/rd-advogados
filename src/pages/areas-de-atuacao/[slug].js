import React, { useEffect } from 'react';
import Link from "next/link";
import HeadContent from "../../components/HeadContent";
import TopHeader from "../../components/superior/TopHeader";
import FixedHeader from "../../components/superior/FixedHeader";
import BannerSuperior from "../../components/superior/BannerSuperior";
import BannerInferior from "../../components/inferior/BannerInferior";
import SubFooter from "../../components/inferior/SubFooter";
import Footer from "../../components/inferior/Footer";
import FixedWhats from "../../components/FixedWhats";
import { hideNavigation } from "../../../public/js/modules";
import areasDoc from '../../data.json';
import AreaNav from '../../components/areas/AreaNav';

export default function AreaPage({ area, areasDoc, textos, contact }) {

  function handleNavClick() {
    hideNavigation(document.getElementById('navbarNav'))
  }

  const sortedAreas = {};
  sortedAreas.direitoTrab = areasDoc.slice(0, 5)
  sortedAreas.direitoCivil = areasDoc.slice(5, 10)
  sortedAreas.direitoPrev = areasDoc.slice(10)

  return (
    <>
      <FixedWhats />
      <TopHeader />
      <FixedHeader />
      <BannerSuperior
        bannerClass="banner-areas"
        title={'Áreas de Atuação'}
        subtitle={'Advocacia especializada em solucionar problemas com os melhores resultados.'}
        btn={false} />

      <HeadContent page="areas" title={`${area.title} - RD Advogados`} />
      <div className="container-fluid px-0 flex-center position-relative" id="areas-de-atuacao">
        <img className="img-fluid position-absolute z-index-1" src="/img/themis.png" alt="Desenho" />
        <div className="container px-5 px-sm-0">
          <div className="row">
            <div className="col-4 d-none d-md-block">
              <strong className="d-block text-granite playfair ps-3 fs-24 mb-4">Áreas de Atuação</strong>
              <AreaNav areas={sortedAreas} />
            </div>
            <div className="col-12 col-md-8 flex-center flex-column">
              <div className="flex-center flex-column">
                <div>
                  <nav className="navbar navbar-light mb-4 d-block d-md-none nav-mobile">
                    <div className="container-fluid p-0">
                      <div className="mb-3 w-100 d-flex align-items-center justify-content-between">
                        <span className="fs-24 text-dourado playfair area-nav-title">Selecione uma <br /> Área de Atuação</span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false">
                          <span className="navbar-toggler-icon" />
                        </button>
                      </div>
                      <div className="collapse navbar-collapse" id="navbarNav">
                        <AreaNav areas={sortedAreas} handleClick={handleNavClick} />
                      </div>
                    </div>
                  </nav>
                  <strong className="d-block text-granite playfair fs-44 mb-4">{area.title}</strong>
                  <span className="area-text" dangerouslySetInnerHTML={{ __html: area.description }} />
                  <div className="bg-dourado estamos-prontos flex-wrap">
                    <div className="prontos-text">
                      <strong className="d-block fs-24 text-white playfair">
                        Estamos prontos para lhe ajudar
                      </strong>
                      <small>Clique para falar conosco no WhatsApp</small>
                    </div>
                    <a href="#banner-inferior" className="btn btn-secondary btn-h-50">Fale com um Advogado</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BannerInferior />
      <SubFooter />
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const paths = areasDoc.map((area) => ({
    params: { slug: area.slug },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const area = areasDoc.find(area => area.slug === params.slug);

  /* const resAll = await fetch(`${process.env.API_URL}/servicos`)
  const areas = await resAll.json()

  const resText = await fetch(`${process.env.API_URL}/areas-de-atuacao`)
  const textos = await resText.json()

  const resRedes = await fetch(`${process.env.API_URL}/contatos`)
  const contact = await resRedes.json() */

  return {
    props: {
      area, areasDoc, /* textos, contact */
    },
    revalidate: 1
  }
}