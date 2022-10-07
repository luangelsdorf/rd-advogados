import React from 'react';
import Collage from 'src/components/common/Collage';
import WhatsAppButton from 'src/components/common/WhatsAppButton';
import Title from 'src/components/Title';
import styles from './AboutUs.module.scss';

export default function AboutUs({ content, type, wppText }) {
  /* console.log(content); */
  let imgSizingClass, textSizingClass;

  switch (type) {
    case 'wide':
      imgSizingClass = 'col-12 col-lg-7';
      textSizingClass = 'col-12 col-lg-4 offset-lg-1';
      break;
    case 'narrow':
      imgSizingClass = 'col-12 col-lg-5 offset-lg-1';
      textSizingClass = 'col-12 col-lg-4 offset-lg-1';
      break;
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row gy-5">
          <div className={imgSizingClass}>
            <Collage image={content.image.data.attributes} style={type === 'wide' ? 'green' : 'orange'} />
          </div>
          <div className={textSizingClass}>
            <div className={styles.textContent}>
              <Title title={content.title.title} overline={content.title.subtitle} align="left" spacing={24} />
              {content.introText && <h5>{content.introText}</h5>}
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
