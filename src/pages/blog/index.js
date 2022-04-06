import React, { useEffect, useState } from 'react';
import TopHeader from "../../../src/components/superior/TopHeader";
import FixedHeader from "../../../src/components/superior/FixedHeader";
import BannerSuperior from "../../../src/components/superior/BannerSuperior";
import BannerInferior from "../../../src/components/inferior/BannerInferior";
import SubFooter from "../../../src/components/inferior/SubFooter";
import Footer from "../../../src/components/inferior/Footer";
import HeadContent from "../../../src/components/HeadContent";
import PostCard from "../../../src/components/home/PostCard";
import FixedWhats from "../../../src/components/FixedWhats";
import { formatCategories, filterPosts, formatDate, getExcerpt } from "../../../public/js/modules";
import { useRouter } from "next/router";
import { fetchAPI } from '../../utils/fetchers';

export default function Blog({ footer, infos, posts, areas, blog, categories }) {
  const postList = posts.data;
  const [shownPosts, setShownPosts] = useState(posts.data);
  const content = blog.data.attributes;

  const router = useRouter();

  useEffect(() => {
    if (router.query.categoria) {
      setShownPosts(filterPosts(postList, router.query.categoria));
    }
  }, [router.query.categoria]);

  return (
    <>
      <HeadContent title="Blog - RD Advogados" page="blog" />

      <FixedWhats />
      <TopHeader />
      <FixedHeader />
      <BannerSuperior
        bannerClass="banner-blog"
        title={content.hero.title}
        subtitle={content.hero.text}
        btn={false}
        image={content.hero.cover.data.attributes}
      />

      <div className="container-fluid px-0">
        <div className="container">
          <div className="row gy-4 text-center align-items-center" id="posts-heading">
            <div className="col-12 col-lg-6 text-center text-lg-start">
              <span className="line-title w-max-content">{content.heading.title.subtitle}</span>
              <div className="d-flex flex-column text-escuro">
                <strong className="playfair fs-44">{content.heading.title.title}</strong>
              </div>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-lg-end justify-content-center">
              <select
                onChange={e => setShownPosts(filterPosts(postList, e.target.value))}
                defaultValue=""
                className="form-select btn-h-50 border-radius-0 w-max-content"
                id="select-interesse">
                <option value="" disabled="disabled">Selecione seu Interesse</option>
                {
                  categories.data.map(category => {
                    return (
                      <option key={category.id} value={category.attributes.slug}>{category.attributes.title}</option>
                    )
                  })
                }
              </select>
            </div>
          </div>
          <div className="row justify-content-center justify-content-md-start gy-5">
            {
              shownPosts?.map(post => {
                const catList = post.attributes.categories.data;
                return (
                  <PostCard
                    key={post.id}
                    img={post.attributes.cover.data.attributes}
                    category={catList.length < 1 ? '' : catList[0].attributes}
                    date={formatDate(post.attributes.createdAt)}
                    href={`/blog/${post.attributes.slug}`}
                    title={post.attributes.title}
                    body={getExcerpt(post.attributes.body)}
                  />
                )
              })
            }
            {
              shownPosts.length === 0 ? (
                <h1 className="text-dourado">Não há nenhuma publicação com essa categoria.</h1>
              ) : null
            }
          </div>
        </div>
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
  const footer = await fetchAPI('rodape', 'footer');
  const infos = await fetchAPI('info', 'info');
  const posts = await fetchAPI('posts', 'posts');
  const areas = await fetchAPI('areas-de-atuacao', 'areas');
  const blog = await fetchAPI('home-blog', 'homeBlog');
  const categories = await fetchAPI('categories', 'categories');

  return {
    props: {
      footer, infos, posts, areas, blog, categories
    },
    revalidate: 10,
  }
}