import React from 'react';
import Qualidades from "./components/Qualidades";
import ListaAreas from "./components/ListaAreas";
import NewsLetter from "./components/NewsLetter";

export default function SubFooter({ textos, areas, contact }) {
    return (
        <div className="sub-footer">
            <div className="container">
                <div className="row gy-5">
                    <div className="col-12 col-lg-6 col-xl-3 d-none d-md-block">
                        <Qualidades textos={textos} contact={contact} />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5 d-none d-md-block">
                        <ListaAreas areas={areas} textos={textos} />
                    </div>
                    <div className="col-12 col-xl-4">
                        <NewsLetter textos={textos} />
                    </div>
                </div>
            </div>
        </div>
    )
}