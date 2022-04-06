import React from 'react';
import PostCard from "./PostCard";
import { formatCategories, formatDate, getExcerpt } from "../../../public/js/modules";
import Link from 'next/link'

export default function Recentes({ content, posts }) {

  return (
    <div className="container-fluid flex-center flex-column px-0" id="recentes">
      <div className="flex-center flex-column recentes-title">
        <span className="d-block text-dourado mb-3">{content.title.subtitle}</span>
        <strong className="playfair text-escuro fs-44">{content.title.title}</strong>
      </div>
      <div className="container">
        <div className="row gy-5 justify-content-center justify-content-md-start">
          {
            posts.map((post, index) => {
              if (index === 3) return;
              const catList = post.attributes.categories.data;
              console.log(catList[0].attributes);
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
        </div>
      </div>
    </div>
  )
}