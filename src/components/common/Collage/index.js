import React from 'react';
import Img from 'src/components/Img';
import styles from './Collage.module.scss';

export default function Collage({ style, image }) {
  return (
    <div className={`${styles.collage} ${styles[style]}`}>
      <div className={styles.mask}>
        <Img src={image} />
      </div>
      <img className={styles.decoration} src={`/img/decorations/bg-mosaic-${style}.png`} />
      <div className={styles.logo}>
        <img src="/img/logo.svg" />
      </div>
    </div>
  )
}
