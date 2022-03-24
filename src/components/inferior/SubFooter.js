import React from 'react';
import Qualidades from "./components/Qualidades";
import ListaAreas from "./components/ListaAreas";
import NewsLetter from "./components/NewsLetter";

export default function SubFooter({ content, socialMedia }) {
  return (
    <div className="sub-footer">
      <div className="container">
        <div className="row gy-5">
          <div className="col-12 col-lg-6 col-xl-3 d-none d-md-block">
            <Qualidades content={content} socialMedia={socialMedia} />
          </div>
          <div className="col-12 col-lg-6 col-xl-5 d-none d-md-block">
            <ListaAreas />
          </div>
          <div className="col-12 col-xl-4">
            <NewsLetter />
          </div>
        </div>
      </div>
    </div>
  )
}