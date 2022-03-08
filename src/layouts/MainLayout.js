import React from 'react';
import TopHeader from "../components/superior/TopHeader";
import FixedHeader from "../components/superior/FixedHeader";
import BannerSuperior from "../components/superior/BannerSuperior";
import BannerInferior from "../components/inferior/BannerInferior";
import SubFooter from "../components/inferior/SubFooter";
import Footer from "../components/inferior/Footer";

export default function MainLayout({ children }) {
    return (
        <>
            <TopHeader />
            <FixedHeader />
            <BannerSuperior title="Áreas de Atuação" subtitle={<span>Realizando a prestação de serviços jurídicos tanto para empresas como <br/> pessoas físicas, o BRC Advogados elabora soluções jurídicas eficazes e <br/> individualizadas para melhor atender os interesses de seus clientes.</span>} btn={false} />


                {children}

            <BannerInferior />
            <SubFooter />
            <Footer />
        </>
    )
}