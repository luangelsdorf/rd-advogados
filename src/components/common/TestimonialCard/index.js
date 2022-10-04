import React from 'react';
import styles from './TestimonialCard.module.scss';
import Star from 'public/img/decorations/star.svg';
import Img from 'src/components/Img';

export default function TestimonialCard({ size, photo, name, stars, date, quote }) {
  return (
    <div className={`col-12 col-lg-${size}`}>
      <div className={styles.card}>
        <div className={styles.profile}>
          {photo && <Img src={photo} alt={`Foto de ${name}`} />}
          <div>
            <strong className={styles.name}>{name}</strong>
            <div className={styles.review}>
              {
                Array(stars).fill(null).map((item, index) => (
                  <Star key={`star-${index}`} />
                ))
              }
              <span className={styles.date}>{date}</span>
            </div>
          </div>
        </div>
        <p className={styles.quote}>{quote}</p>
      </div>
    </div>
  )
}
