import React from 'react';
import Title from 'src/components/Title';
import styles from './Services.module.scss';

export default function Services({ content, children, page, ...rest }) {
  return (
    <section className={`${styles.section} ${styles[page]}`} {...rest}>
      <Title overline={content.title.subtitle} title={content.title.title} spacing={8} />
      {content.text && <p className={styles.text}>{content.text}</p>}
      <div className="container">
        <div className="row gy-4">
          {
            children
          }
        </div>
      </div>
    </section>
  )
}
