import React, { useEffect, useRef } from 'react'
import Img from '../Img';

export default function Galeria({ content }) {
  const row = useRef(null);

  const translateValue = 150 + ((content.length - 4) * 33.33);

  const newContent = [];
  content.forEach(c => newContent.push(c));
  content.forEach(c => newContent.push(c));

  useEffect(() => {
    row.current.animate([
      { transform: `translate3d(calc(-33.33% / 2), 0, 0)` },
      { transform: `translate3d(calc(-${translateValue}%), 0, 0)` },
    ], {
      duration: 30000,
      iterations: Infinity,
      easing: 'linear',
    })
  }, [])

  return (
    <section className="gallery" id="galeria">
      <div className="container">
        <div className="row" ref={row}>
          {
            newContent.map((img, index) => {
              return (
                <div className="col-4" key={`g-${index}`}>
                  <Img src={img.image.data.attributes} alt="Photo" />
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
