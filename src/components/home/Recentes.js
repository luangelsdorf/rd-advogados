import React from 'react';
import PostCard from "./PostCard";
import { formatCategories, formatDate } from "../../../public/js/modules";
import Link from 'next/link'

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
        <span className="d-block text-dourado mb-3">{title1}</span>
        <strong className="playfair text-escuro fs-44">{title2}</strong>
      </div>
      <div className="container">
        <div className="row gy-5 justify-content-center justify-content-md-start">
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
  )
}