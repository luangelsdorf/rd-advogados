import HeadContentPost from "../../../src/components/HeadContentPost";
import TopHeader from "../../../src/components/superior/TopHeader";
import FixedHeader from "../../../src/components/superior/FixedHeader";
import BannerSuperior from "../../../src/components/superior/BannerSuperior";
import PostCard from "../../../src/components/home/PostCard";
import BannerInferior from "../../../src/components/inferior/BannerInferior";
import SubFooter from "../../../src/components/inferior/SubFooter";
import Footer from "../../../src/components/inferior/Footer";
import React from "react";
import Link from 'next/link';
import FixedWhats from "../../../src/components/FixedWhats";
import {formatCategories, formatDate} from "../../../public/js/modules";
import { useRouter } from "next/router";

export default function Post({ post, posts, areas, contact }) {
    let quantity = [0, 1, 2]
    let router = useRouter()
    let url = router.asPath
    let img = `https://brcadv.com/strapi${post[0].cover.url}`
    let desc = post[0].body
    let ogTags = {
        url: url,
        img: img,
        desc: desc,
    }

    function handleClick(e) {
        let target
        if (e.target.localName !== 'button'){
            target = e.target.parentElement.id
        } else {
            target = e.target.id
        }

        if (target === 'facebook') {
            window.open(`https://www.facebook.com/sharer/sharer.php?u=https://brcadv.com${window.location.pathname}`,
                'facebook-share-dialog',
                'width=800,height=600'
            );
        }

        if (target === 'twitter') {
            window.open(`https://twitter.com/intent/tweet?text=https://brcadv.com${window.location.pathname}`,
                    'twitter-share',
                'width=800,height=600'
            );
        }

        if (target === 'linkedin') {
            window.open(`https://www.linkedin.com/cws/share?url=https://brcadv.com${window.location.pathname}`,
                'linkedin-share',
                'width=800,height=600'
            );
        }
    }


    return (
        <>
            {/*Load Facebook SDK for JavaScript*/}
            <div id="fb-root" />
            <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v10.0&appId=223759669479290&autoLogAppEvents=1" nonce="f8cnNIhN" />

            <HeadContentPost tags={ogTags} post={true} title={`${post[0].title} - BRC Advogados`} page="post" />
            <FixedWhats />
            <TopHeader contact={contact} />
            <FixedHeader contact={contact} />
            <BannerSuperior />

            <div className="container post-container position-relative">
                <div className="row">
                    <div className="col-1" />

                    <div className="col-10">
                        <strong className="d-block text-center text-white playfair fs-44 mx-auto mb-4" style={{maxWidth: 530 + 'px'}}>{ post[0].title }</strong>
                        <div className="flex-center" id="post-date-row">
                            <svg width="12" height="12" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar-alt" className="fs-13 text-white mb-1 mx-2 svg-inline--fa fa-calendar-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path></svg>
                            <span className="post-date fs-13 text-white">{ formatDate(post[0].date, post[0].locale, false) }</span>
                        </div>
                        <div>
                            <div className="img-placeholder mx-auto">
                                <img src={`https://brcadv.com/strapi${post[0].cover.url}`} alt="Imagem" className="mx-auto w-100 h-100 object-fit-cover" />
                            </div>
                            <div className="text-escuro fs-20 post-body" id="texto-post" dangerouslySetInnerHTML={{__html: post[0].body}} />
                            <div className="fs-20 text-escuro">
                                <span className="d-block">Gostou do texto?</span>
                                <span className="d-block">Compartilhe nas Redes Sociais:</span>
                                <button id="facebook" role="link" className="btn social-btn-post facebook-btn btn-h-45" onClick={ handleClick }>
                                    <img height="16" width="16" className="mb-1 me-2" src="/img/icons/facebook-f.svg" alt="Logo Facebook"/>
                                    <strong>FACEBOOK</strong>
                                </button>
                                <button id="twitter" role="link" className="btn social-btn-post twitter-btn btn-h-45" onClick={ handleClick }>
                                    <img height="16" width="16" className="me-2" src="/img/icons/twitter.svg" alt="Logo Twitter"/>
                                    <strong>TWITTER</strong>
                                </button>
                                <button id="linkedin" role="link" className="btn social-btn-post linkedin-btn btn-h-45" onClick={ handleClick }>
                                    <img height="16" width="16" className="mb-1 me-2" src="/img/icons/linkedin.svg" alt="Logo Linkedin"/>
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
                        <Link href={`/${contact.locale.substring(0, 2)}/blog`}>
                            <a className="btn btn-primary btn-h-50 d-inline-flex justify-content-center" id="ver-todas">Ver Todas as Publicações<img src="/img/seta.svg" alt="Seta" /></a>
                        </Link>
                    </div>
                </div>
                <div className="row g-5 m-0 w-100 justify-content-center">
                    {
                        quantity.map(card => {
                            return (
                                <PostCard img={`https://brcadv.com/strapi${posts[card].cover.url}`}
                                          categoria={formatCategories(posts[card].categorias)}
                                          date={formatDate(posts[card].date, posts[card].locale, true)}
                                          title={posts[card].title}
                                          body={posts[card].body.substring(0, 125) + '...'}
                                          href={`/${contact.locale.substring(0, 2)}/blog/${posts[card].slug}`}
                                          lang={contact.locale.substring(0, 2)}
                                          key={`card-${posts[card].id}`}
                                />

                            )
                        })
                    }
                </div>

            </div>

            <BannerInferior contact={contact} areas={areas} />
            <SubFooter areas={areas} contact={contact} textos={contact} />
            <Footer contact={contact} />
        </>
    )
}


export async function getStaticPaths() {
    const response = await fetch('https://brcadv.com/strapi/posts')
    const posts = await response.json()

    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://brcadv.com/strapi/posts?slug=${params.slug}`)
    const post = await res.json()

    const resp = await fetch('https://brcadv.com/strapi/posts')
    const posts = await resp.json()

    const resAreas = await fetch('https://brcadv.com/strapi/servicos')
    const areas = await resAreas.json()

    const resRedes = await fetch('https://brcadv.com/strapi/contatos')
    const contact = await resRedes.json()

    return {
        props: {
            post, posts, areas, contact
        },
        revalidate: 1
    }
}