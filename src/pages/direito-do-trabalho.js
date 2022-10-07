import React from 'react'
import ServiceCard from 'src/components/common/ServiceCard';
import HeadContent from 'src/components/HeadContent'
import BannerInferior from 'src/components/inferior/BannerInferior';
import Footer from 'src/components/inferior/Footer';
import SubFooter from 'src/components/inferior/SubFooter';
import AboutUs from 'src/components/landing-page/AboutUs';
import CallToAction from 'src/components/landing-page/CallToAction';
import CommonCases from 'src/components/landing-page/CommonCases';
import LandingBanner from 'src/components/landing-page/LandingBanner';
import Services from 'src/components/landing-page/Services';
import Testimonials from 'src/components/landing-page/Testimonials';
import FixedHeader from 'src/components/superior/FixedHeader';
import TopHeader from 'src/components/superior/TopHeader';
import { fetchAPI } from 'src/utils/fetchers';

export default function DireitoDoTrabalho({ page, footer, infos, areas }) {

  return (
    <>
      <HeadContent title="Direito do Trabalho - RD Advogados" />
      <TopHeader infos={infos.data.attributes} />
      <FixedHeader infos={infos.data.attributes} />

      <LandingBanner content={page.data.attributes.hero} area="trabalhista" size="long" phone={infos.data.attributes.whatsapp} />
      <CommonCases content={page.data.attributes.commonCases} style={{paddingTop: '95px'}} />
      <Services content={page.data.attributes.services} page="trabalhista">
        {
          page.data.attributes.services.serviceCards.map((card, index) => (
            <ServiceCard
              key={card.id}
              length={index === 0 ? 'fullWidth' : 'long'}
              size={index === 0 ? 12 : 6}
              icon={card.icon.data.attributes}
              title={card.title}
              description={card.description}
            />
          ))
        }
      </Services>
      <CallToAction content={page.data.attributes.cta} color="green" phone={infos.data.attributes.whatsapp} />
      <AboutUs content={page.data.attributes.about} type="narrow" wppText="Fale com a Solange no WhatsApp" phone={infos.data.attributes.whatsapp} />
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

  const page = await fetchAPI('lp-direito-do-trabalho');
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