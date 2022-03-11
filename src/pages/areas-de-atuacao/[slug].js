import React from 'react';
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
      <TopHeader contact={contact} />
      <FixedHeader contact={contact} />
      <BannerSuperior bannerClass="banner-areas" title={textos.bannerTitle} subtitle={'Advocacia especializada em solucionar problemas com os melhores resultados.'} btn={false} />

      <HeadContent page="areas" title={`${area.title} - BRC Advogados`} />
      <div className="container-fluid px-0 flex-center position-relative" id="areas-de-atuacao">
        <img className="img-fluid position-absolute z-index-1" src="/img/themis.png" alt="Desenho" />
        <div className="container px-5 px-sm-0">
          <div className="row">
            <div className="col-4 d-none d-md-block">
              <div className="category-list">
                <strong className="d-block text-escuro playfair ps-3 fs-24 mb-4">Áreas de Atuação</strong>
                <div className="area-category">
                  <h5>
                    <a className="text-dourado" data-bs-toggle="collapse" href="#trab">
                      Direito Trabalhista
                    </a>
                  </h5>
                </div>
                <div class="collapse services" id="trab">
                  <ul>
                    {
                      sortedAreas.direitoTrab.map(area => {
                        return (
                          <li key={area.slug}>
                            <Link scroll={false} href={`/areas-de-atuacao/${area.slug}`}>
                              <a className=" d-inline-flex justify-content-between align-items-center" id={`${area.slug}`}>
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
                <div class="collapse services" id="civil">
                  <ul>
                    {
                      sortedAreas.direitoCivil.map(area => {
                        return (
                          <li key={area.slug}>
                            <Link scroll={false} href={`/areas-de-atuacao/${area.slug}`}>
                              <a className=" d-inline-flex justify-content-between align-items-center" id={`${area.slug}`}>
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
                <div class="collapse services" id="prev">
                  <ul>
                    {
                      sortedAreas.direitoPrev.map(area => {
                        return (
                          <li key={area.slug}>
                            <Link scroll={false} href={`/areas-de-atuacao/${area.slug}`}>
                              <a className=" d-inline-flex justify-content-between align-items-center" id={`${area.slug}`}>
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
            </div>
            <div className="col-12 col-md-8 flex-center flex-column">
              <div className="flex-center flex-column">
                <div>
                  <nav className="navbar navbar-light mb-4 d-block d-md-none">
                    <div className="container-fluid p-0">
                      <div className="mb-3 w-100 d-flex align-items-center justify-content-between">
                        <span className="fs-24 text-dourado playfair area-nav-title">Selecione uma <br /> Área de Atuação</span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false">
                          <span className="navbar-toggler-icon" />
                        </button>
                      </div>
                      <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                          {
                            areasDoc.map(area => {
                              return (
                                <li className="nav-item my-3" key={area.slug} onClick={handleNavClick}>
                                  <Link scroll={false} href={`/areas-de-atuacao/${area.slug}`}>
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
                  <strong className="d-block text-escuro playfair fs-44 mb-4">{area.title}</strong>
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

      <BannerInferior contact={contact} areas={areasDoc} />
      <SubFooter areas={areasDoc} textos={textos} contact={contact} />
      <Footer contact={contact} textos={textos} />
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
  /* const res = await fetch(`${process.env.API_URL}/servicos?slug=${params.slug}`)
  const area = await res.json() */
  const area = areasDoc.find(area => area.slug === params.slug);

  const resAll = await fetch(`${process.env.API_URL}/servicos`)
  const areas = await resAll.json()

  const resText = await fetch(`${process.env.API_URL}/areas-de-atuacao`)
  const textos = await resText.json()

  const resRedes = await fetch(`${process.env.API_URL}/contatos`)
  const contact = await resRedes.json()

  return {
    props: {
      area, areasDoc, textos, contact
    },
    revalidate: 1
  }
}