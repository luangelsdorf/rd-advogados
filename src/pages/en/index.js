import React from "react";
import HeadContent from "../../src/components/HeadContent";
import MainLayout from "../../src/layouts/MainLayout";
import SobreNos from "../../src/components/home/SobreNos";
import NossaEquipe from "../../src/components/home/NossaEquipe";
import Parallax from "../../src/components/home/Parallax";
import Areas from "../../src/components/home/Areas";
import Recentes from "../../src/components/home/Recentes";
import TopHeader from "../../src/components/superior/TopHeader";
import FixedHeader from "../../src/components/superior/FixedHeader";
import BannerSuperior from "../../src/components/superior/BannerSuperior";
import BannerInferior from "../../src/components/inferior/BannerInferior";
import SubFooter from "../../src/components/inferior/SubFooter";
import Footer from "../../src/components/inferior/Footer";
import FixedWhats from "../../src/components/FixedWhats";



export default function Home({ areas, posts, textos, contact }) {
    return (
        <>
            <HeadContent title="BRC Advogados" page="home" />
            <FixedWhats />
            <TopHeader contact={contact} />
            <FixedHeader contact={contact} />
            <BannerSuperior lang={textos.locale.substring(0, 2)} title={textos.bannerTitle} subtitle={textos.bannerSubtitle} btn={true} />

            <div className="container-fluid p-0 position-relative home">
                <img src="/img/parallax.png" className="parallax" loading="lazy" alt=""/>
                <SobreNos textos={textos} />
                <NossaEquipe textos={textos} />
                <Parallax textos={textos} />
                <Areas textos={textos} areas={areas} />
                <Recentes textos={textos} posts={posts} />
            </div>

            <BannerInferior contact={contact} areas={areas} />
            <SubFooter areas={areas} textos={textos} contact={contact} />
            <Footer contact={contact} textos={textos} />
        </>
    )
}

export async function getStaticProps() {
    const responseAreas = await fetch(`https://brcadv.com/strapi/servicos?_locale=en`)
    const areas = await responseAreas.json()

    const  responsePosts  = await fetch('https://brcadv.com/strapi/posts?_locale=en')
    const posts = await responsePosts.json()

    const  responseTextos  = await fetch('https://brcadv.com/strapi/inicio?_locale=en')
    const textos = await responseTextos.json()

    const responseContact = await fetch('https://brcadv.com/strapi/contatos?_locale=en')
    const contact = await responseContact.json()

    return {
        props: {
            areas, posts, textos, contact
        },
        revalidate: 1
    }
}