import React from 'react';

export default function FixedWhats({ area, phone }) {
  const message = `Olá, gostaria de falar com um advogado${area ? ` sobre ${area}` : ''}.`

  return (
    <a href={`https://api.whatsapp.com/send?phone=${phone}&text=${message}`} className="whats-btn btn-primary">
      <div>
        <img width="25" height="25" src="/img/icons/whatsapp-brands.svg" alt="Whats" />
      </div>
    </a>
  )
}