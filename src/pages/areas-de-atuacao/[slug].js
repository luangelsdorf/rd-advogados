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
import AreaNav from '../../components/areas/AreaNav';
import { fetchAPI } from '../../utils/fetchers';
import env from '../../utils/env';

export default function AreaPage({ area, resAreas, footer, infos }) {
  const content = resAreas.data.attributes;

  function handleNavClick() {
    hideNavigation(document.getElementById('navbarNav'))
  }

  const message = encodeURI(`Olá, gostaria de falar com um advogado sobre ${area.title}`);

  const sortedAreas = {};
  sortedAreas.direitoTrab = resAreas.data.attributes.laborLaw.laborLawServices
  sortedAreas.direitoCivil = resAreas.data.attributes.civilLaw.civilLawServices
  sortedAreas.direitoPrev = resAreas.data.attributes.pensionLaw.pensionLawServices

  return (
    <>
      <FixedWhats phone={infos.data.attributes.whatsapp} />
      <TopHeader />
      <FixedHeader />
      <BannerSuperior
        bannerClass="banner-areas"
        title={content.hero.title}
        subtitle={content.hero.text}
        btn={false}
        image={content.hero.cover.data.attributes}
      />

      <HeadContent page="areas" title={`${area.title} - RD Advogados`} />
      <div className="container-fluid px-0 flex-center position-relative" id="areas-de-atuacao">
        <img className="img-fluid position-absolute z-index-1" src="/img/themis.png" alt="Desenho" />
        <div className="container px-5 px-sm-0">
          <div className="row">
            <div className="col-4 d-none d-md-block">
              <strong className="d-block text-granite playfair fs-24 mb-4">Áreas de Atuação</strong>
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
                    <a
                      href={`https://api.whatsapp.com/send?phone=${infos.data.attributes.whatsapp}&text=${message}`}
                      className="btn btn-secondary btn-h-50"
                    >
                      Fale com um Advogado
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BannerInferior content={footer.data.attributes} infos={infos.data.attributes} />
      <SubFooter
        socialMedia={infos.data.attributes.socialMedia}
        content={footer.data.attributes.callout}
        areas={resAreas}
      />
      <Footer socialMedia={infos.data.attributes.socialMedia} />
    </>
  )
}

export async function getStaticPaths() {
  const slugify = require('slugify');

  const res = await fetchAPI('areas-de-atuacao', 'areas');
  const civilAreas = res.data.attributes.civilLaw.civilLawServices;
  const laborAreas = res.data.attributes.laborLaw.laborLawServices;
  const pensionAreas = res.data.attributes.pensionLaw.pensionLawServices;
  const areas = civilAreas.concat(laborAreas).concat(pensionAreas);

  const paths = areas.map(area => {
    return {
      params: {
        slug: slugify(area.title, { lower: true })
      }
    }
  })

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const slugify = require('slugify');

  const resAreas = await fetchAPI('areas-de-atuacao', 'areas');
  const civilAreas = resAreas.data.attributes.civilLaw.civilLawServices;
  const laborAreas = resAreas.data.attributes.laborLaw.laborLawServices;
  const pensionAreas = resAreas.data.attributes.pensionLaw.pensionLawServices;
  const areas = civilAreas.concat(laborAreas).concat(pensionAreas);

  const area = areas.find(area => slugify(area.title, { lower: true }) === params.slug);
  const footer = await fetchAPI('rodape', 'footer');
  const infos = await fetchAPI('info', 'info');

  return {
    props: {
      area, resAreas, footer, infos
    },
    revalidate: 10
  }
}