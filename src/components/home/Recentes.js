import React from 'react';
import PostCard from "./PostCard";
import { formatCategories, formatDate } from "../../../public/js/modules";

export default function Recentes({ posts, textos }) {

    let quantity = [0, 1, 2]

    let title1, title2
    let lang = textos.locale.substring(0, 2)
    if (lang === 'pt') {
        title1 = 'POSTS RECENTES DO BLOG'
        title2 = 'Notícias e Artigos'
    }
    else {
        title1 = 'RECENT BLOG POSTS'
        title2 = 'News and Articles'
    }

    return (
        <div className="container-fluid flex-center flex-column px-0" id="recentes">
            <div className="flex-center flex-column recentes-title">
                <span className="d-block text-dourado mb-3">{ title1 }</span>
                <strong className="playfair text-escuro fs-44">{ title2 }</strong>
            </div>
            <div className="container">
                <div className="row gy-5 justify-content-center justify-content-md-start">
                    {
                        quantity.map(card => {
                            return (
                                <PostCard img={`https://brcadv.com/strapi${posts[card].cover.url}`}
                                          categoria={formatCategories(posts[card].categorias)}
                                          date={formatDate(posts[card].date, posts[card].locale, true)}
                                          title={posts[card].title}
                                          body={posts[card].body.substring(0, 125) + '...'}
                                          href={`/${textos.locale.substring(0, 2)}/blog/${posts[card].slug}`}
                                          lang={textos.locale.substring(0, 2)}

                                          key={`card-${posts[card].id}`}
                                          />

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}