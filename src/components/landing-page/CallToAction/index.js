import React, { useEffect, useState } from 'react';
import styles from './CallToAction.module.scss';
import WhatsApp from 'public/img/icons/whatsapp-brands.svg';
import WhatsAppButton from 'src/components/common/WhatsAppButton';

export default function CallToAction({ content, container = 'container', color = 'orange', phone }) {
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
              <WhatsAppButton phone={phone} variant="secondary">
                Fale no WhatsApp Agora
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
