import React from 'react';
import { hideNavigation } from "../../../public/js/modules";
import Link from "next/link";
import {useRouter} from "next/router";

export default function FixedHeader({ contact }) {
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

    function handleNavClick() {
        hideNavigation(document.getElementById('navBar'))
    }

    return (
        <header className="fixed-header">
            <nav className="navbar navbar-fixed navbar-expand-lg navbar-light w-100">
                <div className="container">
                    <Link href={`/${lang}#home`}>
                        <a>
                            <img src="/img/logo.png" alt="Logo" />
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navBar">
                        <div className="nav navbar-nav justify-content-between">
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
                            {/*<button className="btn btn-primary d-flex d-lg-none w-max-content">{ textos.btn_fale }</button>*/}
                        </div>
                    </div>
                    <Link href="#banner-inferior">
                        <a className="btn btn-primary d-none d-lg-inline-flex px-3 btn-h-40">{ btnText }</a>
                    </Link>
                </div>
            </nav>
        </header>
    )
}