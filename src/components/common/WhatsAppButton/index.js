import React from 'react';
import styles from './WhatsAppButton.module.scss';
import WhatsApp from 'public/img/icons/whatsapp-brands.svg';

export default function WhatsAppButton({ children, variant, phone }) {
  const message = 'Olá, gostaria de falar com um advogado.';
  return (
    <a href={`https://api.whatsapp.com/send?phone=${phone}&text=${message}`} className={`${styles.button} btn btn-${variant}`}>
      <WhatsApp />
      {children}
    </a>
  )
}
