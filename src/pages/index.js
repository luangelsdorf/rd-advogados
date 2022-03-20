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

export default function Home({ home, footer, infos }) {

	return (
		<>
			<HeadContent title="RD Advogados" page="home" />
			<FixedWhats />
			<TopHeader />
			<FixedHeader />
			<BannerSuperior
				content={home.data.attributes.heroSlides}
				btn={true}
			/>

			<div className="container-fluid p-0 position-relative home">
				<SobreNos content={home.data.attributes.aboutUs} />
				<Galeria content={home.data.attributes.carousel.gallery} />
				<NossaEquipe />
				<Areas />
				<CallToAction />
				<Recentes />
			</div>

			<BannerInferior />
			<SubFooter />
			<Footer />
		</>
	)
}

export async function getStaticProps() {

	const home = await fetchAPI('home-site', 'homePage');
	const footer = await fetchAPI('rodape', 'footer');
	const infos = await fetchAPI('info', 'info');

	return {
		props: {
			home, footer, infos
		}
	}
}

/* export async function getStaticProps() {
	const responseAreas = await fetch(`${process.env.API_URL}/servicos`)
	const areas = await responseAreas.json()

	const responsePosts = await fetch(`${process.env.API_URL}/posts`)
	const posts = await responsePosts.json()

	const responseTextos = await fetch(`${process.env.API_URL}/inicio`)
	const textos = await responseTextos.json()

	const responseContact = await fetch(`${process.env.API_URL}/contatos`)
	const contact = await responseContact.json()

	return {
		props: {
			areas, posts, textos, contact
		},
		revalidate: 1
	}
} */