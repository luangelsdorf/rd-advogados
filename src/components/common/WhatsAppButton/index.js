import React from 'react';
import styles from './WhatsAppButton.module.scss';
import WhatsApp from 'public/img/icons/whatsapp-brands.svg';

export default function WhatsAppButton({ children, variant }) {
  return (
    <a href="#" className={`${styles.button} btn btn-${variant}`}>
      <WhatsApp />
      {children}
    </a>
  )
}
