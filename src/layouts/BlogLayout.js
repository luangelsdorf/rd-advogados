import React from 'react';
import TopHeader from "../components/superior/TopHeader";
import FixedHeader from "../components/superior/FixedHeader";
import BannerSuperior from "../components/superior/BannerSuperior";
import BannerInferior from "../components/inferior/BannerInferior";
import SubFooter from "../components/inferior/SubFooter";
import Footer from "../components/inferior/Footer";

export default function BlogLayout({ children }) {
    return (
        <>
            <TopHeader />
            <FixedHeader />
            <BannerSuperior  />

            {children}

            <BannerInferior />
            <SubFooter />
            <Footer />
        </>
    )
}