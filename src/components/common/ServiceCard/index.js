import React from 'react';
import Img from 'src/components/Img';
import styles from './ServiceCard.module.scss';

export default function ServiceCard({ icon, title, description, length, size }) {

  let sizingClass;
  switch (size) {
    case 4:
      sizingClass = 'col-12 col-md-6 col-lg-4';
      break;
    case 6:
      sizingClass = 'col-12 col-md-6';
      break;
    case 12:
      sizingClass = 'col-12';
      break;
  }

  return (
    <div className={sizingClass}>
      <div className={`${styles.card} ${styles[length]}`}>
        <Img src={icon} alt="Ícone" />
        <div className={styles.textContent}>
          {description ? <h5>{title}</h5> : <h4>{title}</h4>}
          {description && <p>{description}</p>}
        </div>
      </div>
    </div>
  )
}
