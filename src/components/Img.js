import React from 'react';
import env from '../utils/env';

export default function Img({ src, alt, className }) {
  if (env === 'dev') {
    return (
      <img className={className} src={`${process.env.NEXT_PUBLIC_API_URL}/${src.name}`} alt={alt} />
    )
  } else[
    <img className={className} src={process.env.NEXT_PUBLIC_API_URL + src.url} alt={alt} />
  ]
}