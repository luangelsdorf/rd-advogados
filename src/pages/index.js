import React, { useEffect } from "react";
import HeadContent from "../../src/components/HeadContent";
import SobreNos from "../../src/components/home/SobreNos";
import NossaEquipe from "../../src/components/home/NossaEquipe";
import Areas from "../../src/components/home/Areas";
import Recentes from "../../src/components/home/Recentes";
import TopHeader from "../../src/components/superior/TopHeader";
import FixedHeader from "../../src/components/superior/FixedHeader";
import BannerSuperior from "../../src/components/superior/BannerSuperior";
import BannerInferior from "../../src/components/inferior/BannerInferior";
import SubFooter from "../../src/components/inferior/SubFooter";
import Footer from "../../src/components/inferior/Footer";
import FixedWhats from "../../src/components/FixedWhats";
import Galeria from "../components/home/Galeria";
import CallToAction from "../components/home/CallToAction";
import { fetchAPI } from "../utils/fetchers";
import slugify from 'slugify';

export default function Home({ home, footer, infos, posts, areas }) {
	return (
		<>
			<HeadContent title="RD Advogados" page="home" />
			<FixedWhats phone={infos.data.attributes.whatsapp} />
			<TopHeader infos={infos.data.attributes} />
      <FixedHeader infos={infos.data.attributes} />
			<BannerSuperior
				content={home.data.attributes.heroSlides}
				btn={true}
			/>

			<div className="container-fluid p-0 position-relative home">
				<SobreNos content={home.data.attributes.aboutUs} />
				<Galeria content={home.data.attributes.carousel.gallery} />
				<NossaEquipe content={home.data.attributes.ourTeam} />
				<Areas content={home.data.attributes.occupationAreas} areas={areas} />
				<CallToAction content={home.data.attributes.callToAction} infos={infos.data.attributes} />
				<Recentes content={home.data.attributes.recentPosts} posts={posts.data} />
			</div>

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

	const home = await fetchAPI('home-site', 'homePage');
	const footer = await fetchAPI('rodape', 'footer');
	const infos = await fetchAPI('info', 'info');
	const posts = await fetchAPI('posts', 'posts');
	const areas = await fetchAPI('areas-de-atuacao', 'areas');

	return {
		props: {
			home, footer, infos, posts, areas
		},
		revalidate: 10
	}
}