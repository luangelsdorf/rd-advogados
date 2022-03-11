import React from 'react';
import { hideNavigation } from "../../../public/js/modules";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from 'react';

export default function FixedHeader({ contact }) {

  function handleScroll() {
    if (window.scrollY > 165) {
      document.querySelector('.fixed-header').classList.add('active');
    } else {
      document.querySelector('.fixed-header').classList.remove('active');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  function handleNavClick() {
    hideNavigation(document.getElementById('navBar'))
  }

  return (
    <header className="fixed-header">
      <nav className="navbar navbar-fixed navbar-expand-lg navbar-light w-100">
        <div className="container">
          <Link href={`/#home`}>
            <a>
              <img src="/img/logo-horizontal.svg" alt="Logo" />
            </a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navBar">
            <div className="nav navbar-nav justify-content-between">
              <Link href={`#home`}>
                <a onClick={handleNavClick} className="nav-link d-flex align-items-center my-2">{'Início'}</a>
              </Link>
              <Link href={`/#sobre-nos`}>
                <a onClick={handleNavClick} className="nav-link d-flex align-items-center my-2">{'Sobre Nós'}</a>
              </Link>
              <Link href={`/#areas-de-atuacao`}>
                <a onClick={handleNavClick} className="nav-link d-flex align-items-center my-2">{'Áreas de Atuação'}</a>
              </Link>
              <Link href={`/#nossa-equipe`}>
                <a onClick={handleNavClick} className="nav-link d-flex align-items-center my-2">{'Nossa Equipe'}</a>
              </Link>
              <Link href={`/blog`}>
                <a onClick={handleNavClick} className="nav-link d-flex align-items-center my-2">{'Blog'}</a>
              </Link>
              <Link href="#banner-inferior">
                <a onClick={handleNavClick} className="nav-link d-flex align-items-center my-2">{'Contato'}</a>
              </Link>
            </div>
          </div>
          <Link href="#banner-inferior">
            <a className="btn btn-primary d-none d-lg-inline-flex px-3 btn-h-40">{'Fale com um Advogado'}</a>
          </Link>
        </div>
      </nav>
    </header>
  )
}