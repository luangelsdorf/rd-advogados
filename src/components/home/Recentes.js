import React from 'react';
import PostCard from "./PostCard";
import { formatCategories, formatDate } from "../../../public/js/modules";
import Link from 'next/link'
import qs from 'qs';

export default function Recentes({ content, posts }) {

  const q = qs.stringify({
    sort: ['createdAt:desc'],
  }, {
    encode: false,
  });

  console.log(q);

  return (
    <div className="container-fluid flex-center flex-column px-0" id="recentes">
      <div className="flex-center flex-column recentes-title">
        <span className="d-block text-dourado mb-3">{content.title.subtitle}</span>
        <strong className="playfair text-escuro fs-44">{content.title.title}</strong>
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