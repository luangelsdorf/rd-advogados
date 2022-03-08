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

    if (router.asPath.startsWith('/pt')) {
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
            <div className="container top-bar d-flex justify-content-between text-white">
                <div className="bar-section my-2">
                    <span className="divisor position-relative fs-13 pe-4">Email: { contact.email }</span>
                    <a href={ `tel:${contact.phone}` } className="fs-13 ps-4">{ tel }: { contact.phone }</a>
                </div>
                <div className="bar-section my-2">
                    <div className="divisor position-relative fs-13 pe-4">
                        <a href={contact.facebook} className="bar-link">
                            <svg height="14" width="14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" className="svg-inline--fa fa-facebook-f fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path className="icon-hover" fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                        </a>
                        <a href={contact.linkedin} className="bar-link px-3">
                            <svg height="14" width="14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" className="svg-inline--fa fa-linkedin-in fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path className="icon-hover" fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                        </a>
                        <a href={contact.instagram} className="bar-link">
                            <svg height="16" width="16" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="svg-inline--fa fa-instagram fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path className="icon-hover" fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                        </a>
                    </div>
                    <div className="fs-13 ps-4">
                        <svg height="14" width="14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe" className="me-2 svg-inline--fa fa-globe fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path className="icon" fill="currentColor" d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg>
                        <Link href={`/pt${path}`}>
                            <a className={`bar-link ${ptClass}`}>PT</a>
                        </Link>
                        <span>&nbsp;|&nbsp;</span>
                        <Link href={`/en${path}`}>
                            <a className={`bar-link ${enClass}`}>EN</a>
                        </Link>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-top navbar-expand-xl navbar-light w-100">
                <div className="container">
                    <Link href={`/${lang}#home`}>
                        <a>
                            <img src="/img/logo-ext.png" className="img-fluid" alt="Logo" />
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBarTop">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-center align-self-start" id="navBarTop">
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
                                <a onClick={ handleNavClick } className="nav-link d-flex align-items-center my-2">{ inicio }</a>
                            </Link>
                            <Link href={`/${lang}#sobre-nos`}>
                                <a onClick={ handleNavClick } className="nav-link d-flex align-items-center my-2">{ sobreNos }</a>
                            </Link>
                            <Link href={`/${lang}#areas-de-atuacao`}>
                                <a onClick={ handleNavClick } className="nav-link d-flex align-items-center my-2">{ areas }</a>
                            </Link>
                            <Link href={`/${lang}#nossa-equipe`}>
                                <a onClick={ handleNavClick } className="nav-link d-flex align-items-center my-2">{ nossaEquipe }</a>
                            </Link>
                            <Link href={`/${lang}/blog`}>
                                <a onClick={ handleNavClick } className="nav-link d-flex align-items-center my-2">{ blog }</a>
                            </Link>
                            <Link href="#banner-inferior">
                                <a onClick={ handleNavClick } className="nav-link d-flex align-items-center my-2">{ contato }</a>
                            </Link>
                            {/*<a className="btn btn-primary d-flex d-xl-none w-max-content" href="#banner-inferior">{ textos.btn_fale }</a>*/}
                        </div>
                    </div>
                    <Link href="#banner-inferior">
                        <a className="btn btn-primary hover-claro d-none d-xl-inline-flex px-3 btn-h-40 align-self-start">{ btnText }</a>
                    </Link>
                </div>
            </nav>
        </header>
    )
}