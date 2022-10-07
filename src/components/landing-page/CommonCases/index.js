import React from 'react';
import Title from 'src/components/Title';
import styles from './CommonCases.module.scss';

export default function CommonCases({ content, ...rest }) {
  return (
    <section className={styles.section} {...rest}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <div className={styles.content}>
              <Title title={content.title.title} overline={content.title.subtitle} spacing={16} />
              <ul>
                {
                  content.case.map(item => (
                    <li key={item.id}>{item.item}</li>
                  ))
                }
              </ul>
              <p>{content.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
