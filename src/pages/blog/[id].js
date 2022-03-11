import HeadContentPost from "../../components/HeadContentPost";
import TopHeader from "../../components/superior/TopHeader";
import FixedHeader from "../../components/superior/FixedHeader";
import BannerSuperior from "../../components/superior/BannerSuperior";
import PostCard from "../../components/home/PostCard";
import BannerInferior from "../../components/inferior/BannerInferior";
import SubFooter from "../../components/inferior/SubFooter";
import Footer from "../../components/inferior/Footer";
import React from "react";
import Link from 'next/link';
import FixedWhats from "../../components/FixedWhats";
import { formatCategories, formatDate } from "../../../public/js/modules";
import { useRouter } from "next/router";
import postList from '../../posts.json'

export default function Post({ post, posts, areas, contact }) {
  let quantity = [0, 1, 2]
  let router = useRouter()
  let url = router.asPath
  let img = post.cover
  let desc = post.body
  let ogTags = {
    url: url,
    img: img,
    desc: desc,
  }

  function handleClick(e) {
    let target
    if (e.target.localName !== 'button') {
      target = e.target.parentElement.id
    } else {
      target = e.target.id
    }

    if (target === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
        'facebook-share-dialog',
        'width=800,height=600'
      );
    }

    if (target === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${window.location.href}`,
        'twitter-share',
        'width=800,height=600'
      );
    }

    if (target === 'linkedin') {
      window.open(`https://www.linkedin.com/cws/share?url=${window.location.href}`,
        'linkedin-share',
        'width=800,height=600'
      );
    }
  }

  return (
    <>
      <HeadContentPost tags={ogTags} post={true} title={`${post.title} - RD Advogados`} page="post" />
      <FixedWhats />
      <TopHeader />
      <FixedHeader />
      <BannerSuperior />

      <div className="container post-container position-relative">
        <div className="row">
          <div className="col-1" />

          <div className="col-10">
            <strong className="d-block text-center text-white playfair fs-44 mx-auto mb-4" style={{ maxWidth: '600px' }}>{post.title}</strong>
            <div className="flex-center" id="post-date-row">
              <svg width="12" height="12" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar-alt" className="fs-13 text-white mb-1 mx-2 svg-inline--fa fa-calendar-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path></svg>
              <span className="post-date fs-13 text-white">10 de março de 2022</span>
            </div>
            <div>
              <div className="img-placeholder mx-auto">
                <img src={post.cover} alt="Imagem" className="mx-auto w-100 h-100 object-fit-cover" />
              </div>
              <div className="fs-20 post-body" id="texto-post" dangerouslySetInnerHTML={{ __html: post.body }} />
              <div className="fs-20">
                <strong className="d-block">Gostou do conteúdo?</strong>
                <span className="d-block">Compartilhe nas Redes Sociais:</span>
                <button id="facebook" role="link" className="btn social-btn-post facebook-btn btn-h-45" onClick={handleClick}>
                  <img height="16" width="16" className="mb-1 me-2" src="/img/icons/facebook-f.svg" alt="Logo Facebook" />
                  <strong>FACEBOOK</strong>
                </button>
                <button id="twitter" role="link" className="btn social-btn-post twitter-btn btn-h-45" onClick={handleClick}>
                  <img height="16" width="16" className="me-2" src="/img/icons/twitter.svg" alt="Logo Twitter" />
                  <strong>TWITTER</strong>
                </button>
                <button id="linkedin" role="link" className="btn social-btn-post linkedin-btn btn-h-45" onClick={handleClick}>
                  <img height="16" width="16" className="mb-1 me-2" src="/img/icons/linkedin.svg" alt="Logo Linkedin" />
                  <strong>LINKEDIN</strong>
                </button>
              </div>
            </div>

            <hr />

          </div>

          <div className="col-1" />

        </div>

        <div className="row gy-4 text-center align-items-center" id="related">
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <span className="line-title w-max-content">POSTS RECENTES DO BLOG</span>
            <div className="d-flex flex-column text-escuro">
              <strong className="playfair fs-44">Notícias e Artigos</strong>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-lg-end justify-content-center">
            <Link href={`/blog`}>
              <a className="btn btn-primary btn-h-50 d-inline-flex justify-content-center" id="ver-todas">Ver Todas as Publicações<img src="/img/seta.svg" alt="Seta" /></a>
            </Link>
          </div>
        </div>
        <div className="row g-5 m-0 w-100 justify-content-center">
          <div className="col-10 col-md-6 col-xl-4">
            <Link href="/blog/1">
              <a>
                <img src="/img/post-card-1.png" className="img-fluid" alt="Card" />
              </a>
            </Link>
          </div>
          <div className="col-10 col-md-6 col-xl-4">
            <Link href="/blog/2">
              <a>
                <img src="/img/post-card-2.png" className="img-fluid" alt="Card" />
              </a>
            </Link>
          </div>
          <div className="col-10 col-md-6 col-xl-4">
            <Link href="/blog/3">
              <a>
                <img src="/img/post-card-3.png" className="img-fluid" alt="Card" />
              </a>
            </Link>
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
  const paths = postList.map((post) => ({
    params: { id: post.id },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const post = postList.find(post => post.id === params.id)

  /* const resp = await fetch(`${process.env.API_URL}/posts`)
  const posts = await resp.json()

  const resAreas = await fetch(`${process.env.API_URL}/servicos`)
  const areas = await resAreas.json()

  const resRedes = await fetch(`${process.env.API_URL}/contatos`)
  const contact = await resRedes.json() */

  return {
    props: {
      post,/*  posts, areas, contact */
    },
    revalidate: 1
  }
}