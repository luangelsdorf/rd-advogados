import React from 'react';
import Title from 'src/components/Title';
import styles from './Retirement.module.scss';

export default function Retirement({ content }) {
  /* console.log(content); */
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 offset-lg-1">
            <div className={styles.firstSection}>
              <Title title={content.title.title} overline={content.title.subtitle} spacing={24} align="left" />
              <p>{content.text}</p>
            </div>
          </div>
          <div className="col-12 col-lg-4 offset-lg-1">
            <div className={styles.secondSection}>
              <p>{content.listText}</p>
              <ul className={styles.list}>
                {
                  content.list.map(item => (
                    <li key={item.id}>{item.item}</li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
