import React from 'react';
import FaleConosco from "./components/FaleConosco";
import Form from "./components/Form";

export default function BannerInferior({ areas, contact }) {
    return (
        <div id="banner-inferior">
            <div className="container px-4 pm-sm-0">
                <div className="row gy-5 align-items-center">
                    <div className="col-xl-1" />
                    <div className="col-12 col-xl-4 text-center text-xl-start">
                        <FaleConosco contact={contact} />
                    </div>
                    <div className="col-xl-1" />
                    <div className="col-12 col-xl-5">
                        <Form contact={contact} areas={areas} />
                    </div>
                    <div className="col-xl-1" />
                </div>
            </div>
        </div>
    )
}