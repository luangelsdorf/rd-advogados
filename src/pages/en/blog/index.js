import React from 'react';
import TopHeader from "../../../src/components/superior/TopHeader";
import FixedHeader from "../../../src/components/superior/FixedHeader";
import BannerSuperior from "../../../src/components/superior/BannerSuperior";
import BannerInferior from "../../../src/components/inferior/BannerInferior";
import SubFooter from "../../../src/components/inferior/SubFooter";
import Footer from "../../../src/components/inferior/Footer";
import HeadContent from "../../../src/components/HeadContent";
import PostCard from "../../../src/components/home/PostCard";
import Pagination from "../../../src/components/blog/Pagination";
import FixedWhats from "../../../src/components/FixedWhats";
import {formatCategories, filterPosts, formatDate} from "../../../public/js/modules";

export default function Blog({ posts, textos, areas, contact, cat }) {

    return (
        <>
            <HeadContent title="Blog - BRC Advogados" page="blog" />

            <FixedWhats />
            <TopHeader contact={contact} />
            <FixedHeader contact={contact} />
            <BannerSuperior title={textos.bannerTitle} subtitle={textos.bannerSubTitle} btn={false} />

            <div className="container-fluid px-0">
                <div className="container">
                    <div className="row gy-4 text-center align-items-center" id="posts-heading">
                        <div className="col-12 col-lg-6 text-center text-lg-start">
                            <span className="line-title w-max-content">{ textos.pageSubTitle }</span>
                            <div className="d-flex flex-column text-escuro">
                                <strong className="playfair fs-44">{ textos.pageTitle }</strong>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-lg-end justify-content-center">
                            <select onChange={ filterPosts } defaultValue="" className="form-select btn-h-50 border-radius-0 w-max-content" id="select-interesse">
                                <option value="" disabled="disabled">Select Your Interest</option>
                                {
                                    cat.map(category => {
                                        return (
                                            <option key={category.id} value={category.name}>{ category.name }</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="row justify-content-center justify-content-md-start gy-5">
                        {
                            posts.map(card => {
                                return (
                                    <PostCard img={`https://brcadv.com/strapi${card.cover.url}`}
                                              categoria={formatCategories(card.categorias)}
                                              date={formatDate(card.date, card.locale, true)}
                                              title={card.title}
                                              body={card.body.substring(0, 125) + '...'}
                                              href={`/${textos.locale.substring(0, 2)}/blog/${card.slug}`}
                                              key={`card-${card.id}`}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <Pagination />

            <BannerInferior contact={contact} areas={areas} />
            <SubFooter areas={areas} textos={textos} contact={contact} />
            <Footer contact={contact} textos={textos} />
        </>
    )
}

export async function getStaticProps() {
    const responsePosts  = await fetch('https://brcadv.com/strapi/posts?_locale=en')
    const posts = await responsePosts.json()

    const resText = await fetch('https://brcadv.com/strapi/blog?_locale=en')
    const textos = await resText.json()

    const resAreas = await fetch('https://brcadv.com/strapi/servicos?_locale=en')
    const areas = await resAreas.json()

    const resRedes = await fetch('https://brcadv.com/strapi/contatos?_locale=en')
    const contact = await resRedes.json()

    const resCat = await fetch('https://brcadv.com/strapi/categorias?_locale=en')
    const cat = await resCat.json()

    return {
        props: {
            posts, textos, areas, contact, cat
        },
        revalidate: 1
    }
}