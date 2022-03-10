import React from 'react';
import { useRouter } from "next/router";
import { hideNavigation } from "../../../public/js/modules";
import Link from "next/link";

export default function TopHeader({ contact }) {
  const lang = contact.locale.substring(0, 2)
  let router = useRouter()
  let path = router.asPath.slice(3)

  let ptClass, enClass
  let inicio
  let sobreNos
  let areas
  let nossaEquipe
  let blog
  let contato
  let btnText

  if (lang === 'pt') {
    ptClass = 'active'
    enClass = ''

    inicio = 'Início'
    sobreNos = 'Sobre Nós'
    areas = 'Áreas de Atuação'
    nossaEquipe = 'Nossa Equipe'
    blog = 'Blog'
    contato = 'Contato'
    btnText = 'Fale com um Advogado'
  } else {
    ptClass = ''
    enClass = 'active'

    inicio = 'Home'
    sobreNos = 'About Us'
    areas = 'Areas of Expertise'
    nossaEquipe = 'Our Team'
    blog = 'Blog'
    contato = 'Contact'
    btnText = 'Speak with an Attorney'
  }

  let tel
  if (lang === 'pt') {
    tel = 'Fone'
  } else {
    tel = 'Phone'
  }

  function handleNavClick() {
    hideNavigation(document.getElementById('navBarTop'))
  }

  return (
    <header className="top-header" id="home">
      <div>
        <div className="container top-bar d-flex justify-content-end text-white">
          <div className="bar-section my-2">
            <a href={`tel:${contact.phone}`} className="fs-13 pe-3 divisor">{tel}: {contact.phone}</a>
            <a href={`mailto:${contact.email}`} className="fs-13 px-3 divisor">Email: {contact.email}</a>
          </div>
          <div className="bar-section my-2">
            <div className="fs-13 ps-3">
              <a href={contact.facebook} className="bar-link pe-2">
                <svg height="12" width="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 10.4797V1.52369C0.0114767 1.49107 0.0204533 1.45763 0.0268514 1.42365C0.0657554 1.09526 0.205645 0.787025 0.427213 0.541507C0.648782 0.295988 0.941104 0.125285 1.26383 0.0529596C1.35027 0.0338353 1.43745 0.0161821 1.52425 0H10.4829C10.551 0.0132399 10.6194 0.0261122 10.6874 0.0404554C11.4753 0.207057 11.9976 0.84441 11.9983 1.65535C12.0006 4.55464 12.0006 7.45393 11.9983 10.3532C11.9984 10.4664 11.9868 10.5793 11.9638 10.6901C11.796 11.4797 11.1597 11.9928 10.3454 11.995C9.55233 11.9975 8.75894 11.9931 7.96555 11.9983C7.85263 11.9983 7.82945 11.9615 7.83019 11.8589C7.83485 10.5224 7.83779 9.18615 7.83902 7.85015C7.83902 7.80932 7.84417 7.76813 7.84674 7.73209C7.85874 7.72816 7.87104 7.72521 7.88352 7.72326C8.34428 7.72326 8.80541 7.72326 9.2669 7.72326C9.45559 7.72326 9.55123 7.64713 9.57587 7.45994C9.63104 7.04656 9.67334 6.63171 9.73036 6.2187C9.77081 5.92742 9.66121 5.79208 9.36253 5.79171C8.88952 5.79171 8.4165 5.78987 7.94385 5.79171C7.85851 5.79171 7.82614 5.7656 7.82761 5.67807C7.83313 5.28345 7.82761 4.88882 7.83754 4.49457C7.84674 4.07899 8.05051 3.84545 8.46579 3.80463C8.75636 3.77594 9.05062 3.78697 9.34341 3.78146C9.57182 3.77741 9.68401 3.67112 9.68622 3.44568C9.68941 3.09776 9.68941 2.74997 9.68622 2.4023C9.68438 2.16987 9.57293 2.06285 9.33679 2.06064C9.14515 2.0588 8.95315 2.05292 8.76225 2.06064C8.39259 2.07793 8.01778 2.07204 7.65547 2.13419C7.04967 2.23864 6.57445 2.56449 6.26033 3.10438C6.00874 3.53578 5.93517 4.01058 5.92929 4.49972C5.9245 4.8903 5.92561 5.28087 5.92929 5.67182C5.92929 5.76597 5.89912 5.79208 5.80901 5.79061C5.5199 5.7862 5.23042 5.7884 4.94132 5.79061C4.65221 5.79282 4.55216 5.8888 4.55363 6.17604C4.55584 6.59015 4.55927 7.00426 4.56393 7.41838C4.56614 7.61624 4.67023 7.72106 4.86849 7.72179C5.17746 7.72363 5.48606 7.72768 5.79466 7.71958C5.9109 7.71664 5.93775 7.75636 5.93738 7.86669C5.93149 9.20294 5.92806 10.5392 5.92708 11.8754C5.92708 11.9122 5.9223 11.9508 5.91935 11.9917C5.88625 11.9942 5.86345 11.9975 5.84064 11.9975C4.43372 11.9975 3.0268 12.0045 1.62025 11.995C0.826495 11.9898 0.204141 11.4613 0.0386208 10.6864C0.0264827 10.6162 0.0136094 10.5478 0 10.4797Z" fill="currentColor" /></svg>
              </a>
              <a href={contact.instagram} className="bar-link">
                <svg height="16" width="16" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="svg-inline--fa fa-instagram fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path className="icon-hover" fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-top navbar-expand-xl navbar-light w-100">
        <div className="container">
          <Link href={`/${lang}#home`}>
            <a>
              <img src="/img/logo-symbol.svg" className="img-fluid" alt="Logo" />
            </a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBarTop">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navBarTop">
            <div className="nav navbar-nav justify-content-between text-white">
              <div className="flex-center mb-2 mt-4 d-flex d-md-none">
                <svg height="14" width="14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe" className="me-2 svg-inline--fa fa-globe fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path className="icon" fill="currentColor" d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg>
                <Link href={`/pt${path}`}>
                  <a className={`bar-link ${ptClass}`}>PT</a>
                </Link>
                <span>&nbsp;|&nbsp;</span>
                <Link href={`/en${path}`}>
                  <a className={`bar-link ${enClass}`}>EN</a>
                </Link>
              </div>
              <Link href={`/${lang}#home`}>
                <a onClick={handleNavClick} className="nav-link d-flex align-items-center my-2">{inicio}</a>
              </Link>
              <Link href={`/${lang}#sobre-nos`}>
                <a onClick={handleNavClick} className="nav-link d-flex align-items-center my-2">{sobreNos}</a>
              </Link>
              <Link href={`/${lang}#areas-de-atuacao`}>
                <a onClick={handleNavClick} className="nav-link d-flex align-items-center my-2">{areas}</a>
              </Link>
              <Link href={`/${lang}#nossa-equipe`}>
                <a onClick={handleNavClick} className="nav-link d-flex align-items-center my-2">{nossaEquipe}</a>
              </Link>
              <Link href={`/${lang}/blog`}>
                <a onClick={handleNavClick} className="nav-link d-flex align-items-center my-2">{blog}</a>
              </Link>
              <Link href="#banner-inferior">
                <a onClick={handleNavClick} className="nav-link d-flex align-items-center my-2">{contato}</a>
              </Link>
              {/*<a className="btn btn-primary d-flex d-xl-none w-max-content" href="#banner-inferior">{ textos.btn_fale }</a>*/}
            </div>
          </div>
          <Link href="#banner-inferior">
            <a className="btn btn-primary hover-claro d-none d-xl-inline-flex px-3 btn-h-40">{btnText}</a>
          </Link>
        </div>
      </nav>
    </header>
  )
}