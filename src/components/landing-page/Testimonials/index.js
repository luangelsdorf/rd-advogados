import React from 'react';
import TestimonialCard from 'src/components/common/TestimonialCard';
import Title from 'src/components/Title';
import styles from './Testimonials.module.scss';

export default function Testimonials({ content, cardSize }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <Title overline={content.title.subtitle} title={content.title.title} align="center" spacing={8} />
        <div className="row g-4">
          {
            content.cards.map(card => (
              <TestimonialCard
                size={cardSize}
                key={card.id}
                photo={card.photo?.data?.attributes}
                name={card.name}
                date={card.date}
                quote={card.quote}
                stars={card.stars}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}
