import React, { useEffect, useState } from 'react';
import styles from './CallToAction.module.scss';
import WhatsApp from 'public/img/icons/whatsapp-brands.svg';

export default function CallToAction({ content, container = 'container', color = 'orange' }) {
  return (
    <section className={`${styles.section} ${styles[color]}`}>
      <div className={container}>
        <div className={styles.cta}>
          <div className={styles.firstSection}>
            <div>
              <h3>{content.mainText}</h3>
              <p>{content.auxText}</p>
            </div>
          </div>
          <div className={styles.secondSection}>
            <div>
              <h5>{content.ctaText}</h5>
              <a href="#" className="btn btn-secondary">
                <WhatsApp width="24" height="24" />
                <span>Fale no WhatsApp Agora</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
