import React from 'react'
import ServiceCard from 'src/components/common/ServiceCard';
import HeadContent from 'src/components/HeadContent'
import BannerInferior from 'src/components/inferior/BannerInferior';
import Footer from 'src/components/inferior/Footer';
import SubFooter from 'src/components/inferior/SubFooter';
import AboutUs from 'src/components/landing-page/AboutUs';
import CallToAction from 'src/components/landing-page/CallToAction';
import LandingBanner from 'src/components/landing-page/LandingBanner';
import Services from 'src/components/landing-page/Services';
import Testimonials from 'src/components/landing-page/Testimonials';
import FixedHeader from 'src/components/superior/FixedHeader';
import TopHeader from 'src/components/superior/TopHeader';
import { fetchAPI } from 'src/utils/fetchers';

export default function DireitoDeSucessao({ page, footer, infos, areas }) {
  return (
    <>
      <HeadContent title="Direito de Sucessão - RD Advogados" />
      <TopHeader infos={infos.data.attributes} />
      <FixedHeader infos={infos.data.attributes} />

      <LandingBanner content={page.data.attributes.hero} area="sucessorio" size="short" phone={infos.data.attributes.whatsapp} />
      <Services content={page.data.attributes.services}>
        {
          page.data.attributes.services.serviceCards.map(card => (
            <ServiceCard
              key={card.id}
              length="short"
              size={6}
              icon={card.icon.data.attributes}
              title={card.title}
              description={card.description}
            />
          ))
        }
      </Services>
      <CallToAction content={page.data.attributes.cta} color="orange" container="container-fluid" phone={infos.data.attributes.whatsapp} />
      <AboutUs content={page.data.attributes.about} type="wide" wppText="Fale Conosco" phone={infos.data.attributes.whatsapp} />
      <Testimonials content={page.data.attributes.testimonials} cardSize="6" />

      <BannerInferior content={footer.data.attributes} infos={infos.data.attributes} />
      <SubFooter
        socialMedia={infos.data.attributes.socialMedia}
        content={footer.data.attributes.callout}
        areas={areas}
      />
      <Footer socialMedia={infos.data.attributes.socialMedia} />
    </>
  )
}

export async function getStaticProps() {

  const page = await fetchAPI('lp-direito-de-sucessao');
  const footer = await fetchAPI('rodape');
  const infos = await fetchAPI('info');
  const areas = await fetchAPI('areas-de-atuacao');

  return {
    props: {
      page, footer, infos, areas
    },
    revalidate: 10
  }
}