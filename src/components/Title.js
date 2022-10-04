import React from 'react';

export default function Title({ overline, title, align = 'center', spacing = 12 }) {
  return (
    <hgroup style={{
      textAlign: align,
      gap: `${spacing}px`,
      display: 'flex',
      flexDirection: 'column',
    }}>
      <p className="caption">{overline}</p>
      <h2>{title}</h2>
    </hgroup>
  )
}