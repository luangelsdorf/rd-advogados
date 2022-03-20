import React from 'react';
import Img from '../Img';

export default function NossaEquipe({ content }) {

  return (
    <div className="container-fluid px-0 position-relative" id="nossa-equipe">
      <div className="container">
        <div className="w-100 text-center team-title">
          <span className="line-title w-max-content">{content.title.subtitle}</span>
          <strong className="playfair fs-44 d-block break-spaces">{content.title.title}</strong>
        </div>
        <div className="row gy-5">
          {
            content.members.map((member, index) => {
              return (
                <div className={`col-12 col-xl-5 ${index === 0 ? 'offset-xl-1' : ''}`} key={`photo-${index}`}>
                  <div className="member-photo">
                    <Img src={member.photo.data.attributes} alt="" />
                    <div className="member-text">
                      <strong className="fs-24">{member.name}</strong>
                      <p className="fs-14">{member.bio}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}