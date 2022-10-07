import React from 'react';
import Collage from 'src/components/common/Collage';
import WhatsAppButton from 'src/components/common/WhatsAppButton';
import Title from 'src/components/Title';
import styles from './AboutUs.module.scss';

export default function AboutUs({ content, type, wppText }) {
  /* console.log(content); */
  let sizingClass;

  switch (type) {
    case 'wide':
      sizingClass = 'asd'
      break;
    case 'narrow':
      sizingClass = 'asd'
      break;
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row gy-5">
          <div className="col-12 col-lg-5 offset-lg-1">
            <Collage image={content.image.data.attributes} style="orange" />
          </div>
          <div className="col-12 col-lg-4 offset-lg-1">
            <div className={styles.textContent}>
              <Title title={content.title.title} overline={content.title.subtitle} align="left" spacing={24} />
              <h5>{content.introText}</h5>
              <p>{content.text}</p>
              <WhatsAppButton variant="secondary">
                {wppText}
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
