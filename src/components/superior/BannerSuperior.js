import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import env from '../../utils/env';
import Img from '../Img';

export default function BannerSuperior({ title, subtitle, btn, post, bannerClass, content, image }) {
  const [active, setActive] = useState(btn ? content[0] : null);
  const [direction, setDirection] = useState('left');

  let displayBtn
  if (btn) {
    displayBtn = 'inline-flex'
  } else {
    displayBtn = 'none'
  }

  let displayContainer
  if (post) {
    displayContainer = 'none'
  } else {
    displayContainer = 'flex'
  }

  function nextSlide() {
    setDirection('left')
    let newActive = content[content.indexOf(active) + 1];
    if (newActive === undefined) {
      newActive = content[0]
    }
    setActive(newActive);
  }

  function prevSlide() {
    setDirection('right');
    let newActive = content[content.indexOf(active) - 1];
    if (newActive === undefined) {
      newActive = content[content.length - 1];
    }
    setActive(newActive);
  }

  function handleClick(e) {
    if (e.currentTarget.classList.contains('left')) {
      prevSlide();
    } else {
      nextSlide();
    }
  }

  useEffect(() => {
    document.querySelectorAll('.banner').forEach(banner => {
      banner.classList.remove('active');
      banner.classList.remove('swipe-right');
      banner.classList.remove('swipe-left');
    });
    document.getElementById(active?.id)?.classList?.add(`swipe-${direction}`);
    document.getElementById(active?.id)?.classList?.add('active');
  }, [active]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10100);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="container-fluid p-0 position-relative d-flex justify-content-center" id="banner-superior">
      {
        btn && content.length > 1 ? (
          <>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="24" width="33.9411" height="33.9411" transform="rotate(-45 0 24)" fill="white" /><path d="M24.5147 32.485L16.0294 23.9998L33 23.9998L24.5147 32.485Z" fill="#E49B67" /><path d="M16.9053 23.6248L32.0652 23.6248L24.4853 16.0448L16.9053 23.6248Z" fill="#E49B67" stroke="#E49B67" strokeWidth="0.75" /></svg>

            <div className="buttons">
              <button className="btn btn-primary left" onClick={handleClick}>
                <svg style={{ transform: 'rotateY(180deg)' }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
              </button>
              <button className="btn btn-primary right" onClick={handleClick}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
              </button>
            </div>
          </>
        ) : null
      }

      {
        btn ? (
          content.map(banner => {
            return (
              <div className="banner" id={banner.id} key={`b-${banner.id}`}>
                <Img src={banner.cover.data.attributes} alt="" />
                <div className={`${bannerClass} container px-5 px-sm-0 text-white h-100 position-absolute d-${displayContainer} align-items-center top-0`}>
                  <div id="banner-content">
                    <strong className="playfair fs-72 d-block mb-4 break-spaces">{banner.title}</strong>
                    <span className="lh-24 d-block mb-4 break-spaces">{banner.subtitle}</span>
                    <div className="d-flex gap-3 flex-wrap">
                      <Link href={banner.filledButton.section}>
                        <a className={`btn btn-primary btn-h-50 d-${displayBtn}`}>{banner.filledButton.text}</a>
                      </Link>
                      <Link href={banner.outlinedButton.section}>
                        <a className={`btn btn-transparent btn-h-50 d-${displayBtn}`}>{banner.outlinedButton.text}</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          <>
            {
              title ? <Img src={image} alt="" className="hero-img" /> : null
            }
            <div className="overlay-100" />
            <div className="overlay-50" />
            <div className={`${bannerClass} container px-5 px-sm-0 text-white h-100 position-absolute d-${displayContainer} align-items-center top-0`}>
              <div id="banner-content">
                <strong className="playfair fs-72 d-block mb-4 break-spaces">{title}</strong>
                <span className="lh-24 d-block mb-4 break-spaces">{subtitle}</span>
                <div className="d-flex gap-3 flex-wrap">
                  <a href="#areas-de-atuacao" className={`btn btn-primary btn-h-50 d-${displayBtn}`}>{'Conheça Nossos Serviços'}</a>
                  <a href="#sobre-nos" className={`btn btn-transparent btn-h-50 d-${displayBtn}`}>Veja Quem Somos</a>
                </div>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}