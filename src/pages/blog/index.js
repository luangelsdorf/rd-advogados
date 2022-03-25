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
import { formatCategories, filterPosts, formatDate } from "../../../public/js/modules";
import { useRouter } from "next/router";
import Link from 'next/link';
import postsDoc from '../../posts.json';
import { fetchAPI } from '../../utils/fetchers';

export default function Blog({ footer, infos, posts, areas }) {

  const categories = [
    {
      id: '1',
      name: 'Direito do Consumidor'
    },
    {
      id: '2',
      name: 'Direito Previdenciário'
    }
  ]

  return (
    <>
      <HeadContent title="Blog - RD Advogados" page="blog" />

      <FixedWhats />
      <TopHeader />
      <FixedHeader />
      <BannerSuperior title={'Nosso Blog'} subtitle={'Aqui você confere novidades sobre decisões\n e assuntos de interesse de todo cidadão.'} btn={false} />

      <div className="container-fluid px-0">
        <div className="container">
          <div className="row gy-4 text-center align-items-center" id="posts-heading">
            <div className="col-12 col-lg-6 text-center text-lg-start">
              <span className="line-title w-max-content">{'CONFIRA NOSSOS CONTEÚDOS'}</span>
              <div className="d-flex flex-column text-escuro">
                <strong className="playfair fs-44">{'Notícias e Artigos'}</strong>
              </div>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-lg-end justify-content-center">
              <select onChange={filterPosts} defaultValue="" className="form-select btn-h-50 border-radius-0 w-max-content" id="select-interesse">
                <option value="" disabled="disabled">Selecione seu Interesse</option>
                {
                  categories.map(category => {
                    return (
                      <option key={category.id} value={category.name}>{category.name}</option>
                    )
                  })
                }
              </select>
            </div>
          </div>
          <div className="row justify-content-center justify-content-md-start gy-5">
            <div className="col-10 col-md-6 col-xl-4">
              <Link href="/blog/1">
                <a>
                  <img src="/img/post-card-1.png" className="img-fluid" alt="Card" />
                </a>
              </Link>
            </div>
            <div className="col-10 col-md-6 col-xl-4">
              <Link href="/blog/2">
                <a>
                  <img src="/img/post-card-2.png" className="img-fluid" alt="Card" />
                </a>
              </Link>
            </div>
            <div className="col-10 col-md-6 col-xl-4">
              <Link href="/blog/3">
                <a>
                  <img src="/img/post-card-3.png" className="img-fluid" alt="Card" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Pagination />

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
  const footer = await fetchAPI('rodape', 'footer');
	const infos = await fetchAPI('info', 'info');
  const posts = await fetchAPI('posts', 'posts');
  const areas = await fetchAPI('areas-de-atuacao', 'areas');

  return {
    props: {
      footer, infos, posts, areas
    }
  }
}