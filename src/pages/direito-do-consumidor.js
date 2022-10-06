import React from 'react'
import ServiceCard from 'src/components/common/ServiceCard';
import HeadContent from 'src/components/HeadContent'
import LandingBanner from 'src/components/landing-page/LandingBanner';
import Services from 'src/components/landing-page/Services';
import FixedHeader from 'src/components/superior/FixedHeader';
import TopHeader from 'src/components/superior/TopHeader';
import { fetchAPI } from 'src/utils/fetchers';

export default function DireitoDoConsumidor({ page, footer, infos, posts, areas }) {
  /* console.log(page.data.attributes.hero); */
  return (
    <>
      <HeadContent title="Direito do Consumidor - RD Advogados" />
      <TopHeader infos={infos.data.attributes} />
      <FixedHeader infos={infos.data.attributes} />

      <LandingBanner content={page.data.attributes.hero} area="consumidor" size="long" />
      <Services content={page.data.attributes.services} style={{ paddingTop: '95px' }}>
        {
          page.data.attributes.services.serviceCards.map(card => (
            <ServiceCard
              key={card.id}
              length="short"
              size={4}
              icon={card.icon.data.attributes}
              title={card.title}
            />
          ))
        }
      </Services>
    </>
  )
}

export async function getStaticProps() {

  const page = await fetchAPI('lp-direito-do-consumidor');
  const footer = await fetchAPI('rodape');
  const infos = await fetchAPI('info');
  const posts = await fetchAPI('posts');
  const areas = await fetchAPI('areas-de-atuacao');

  return {
    props: {
      page, footer, infos, posts, areas
    },
    revalidate: 10
  }
}