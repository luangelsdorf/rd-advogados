import React, { useEffect } from "react";
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
import Galeria from "../components/home/Galeria";
import CallToAction from "../components/home/CallToAction";
import { areasQuery } from "../utils/queries";

export default function Home({ content }) {

	return (
		<>
			<HeadContent title="RD Advogados" page="home" />
			<FixedWhats />
			<TopHeader />
			<FixedHeader />
			<BannerSuperior
				content={content.data.attributes.heroSlides}
				title={'Advocacia Especializada'}
				subtitle={'Com base em nossa experiência, o foco é encontrar a melhor solução para as questões dos clientes.'}
				btn={true}
			/>

			<div className="container-fluid p-0 position-relative home">
				<SobreNos />
				<Galeria />
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
	const qs = require('qs')
	const query = qs.stringify({
		populate: [
			'heroSlides.cover',
			'heroSlides.filledButton',
			'heroSlides.outlinedButton',
		],
	}, {
		encode: false,
		encodeValuesOnly: true,
	});

	const res = await fetch(`http://localhost:1337/api/home-site?${query}`);
	const content = await res.json();
	return {
		props: {
			content
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