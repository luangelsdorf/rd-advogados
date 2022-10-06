import React from 'react';
import Img from 'src/components/Img';
import styles from './LandingBanner.module.scss';
import WhatsAppButton from 'src/components/common/WhatsAppButton';
import Square from 'public/img/decorations/square-sm.svg'

export default function LandingBanner({ content, size, area }) {

  const TextContent = () => (
    <div className={styles.textContent}>
      <p>{content.subtitle}</p>
      <h1>{content.title}</h1>
      <div className={styles.contact}>
        <WhatsAppButton variant="primary">Fale com um Advogado</WhatsAppButton>
      </div>
    </div>
  );

  const Photo = () => (
    <div className={styles.photo}>
      <Img src={content.image.data.attributes} alt="Foto" />
    </div>
  );

  const Bar = () => (
    <div className={styles.bar}>
      <div className="container">
        <div className={styles.barInner}>
          <strong>Rossi & Dorneles</strong>
          <Square />
          <strong>Advocacia Especializada</strong>
          <Square />
          <strong>12 Anos de Experiência</strong>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`${styles.banner} ${styles[size]} ${styles[area]}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7">
            {size === 'long' ? <TextContent /> : <Photo />}
            {size === 'short' && <Bar />}
          </div>
          <div className="col-12 col-lg-5">
            {size === 'long' ? <Photo /> : <TextContent />}
          </div>
        </div>
      </div>

      {
        size === 'long' && (
          <Bar />
        )
      }

    </div>
  )
}
