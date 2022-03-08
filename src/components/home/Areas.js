import React from 'react';
import data from '../../../src/data/data.json';
import AreaCard from "./AreaCard";

export default function Areas({ areas, textos }) {

    return (
        <div className="container-fluid px-0 fundo-areas" id="areas-de-atuacao">
            <div className="container">
                <div className="row justify-content-center justify-content-md-start g-4">
                    <div className="col-12 col-xl-8 text-center text-xl-start">
                        <span className="line-title w-max-content">{ textos.areasSubTitle }</span>
                        <div className="d-flex flex-column">
                            <strong className="playfair fs-44 d-block text-escuro my-15-50">{ textos.areasTitle }</strong>
                            <div className="d-none d-xl-flex">
                                <span className="d-inline-flex pres-text mr-40">
                                    { textos.areasText_1 }
                                </span>

                                <span className="d-inline-flex pres-text">
                                    { textos.areasText_2 }
                                </span>
                            </div>

                            <div className="d-flex d-xl-none px-4 px-sm-0 justify-content-center">
                                <span className="d-inline-flex pres-text">
                                    { textos.areasText_1 }
                                    { textos.areasText_2 }
                                </span>
                            </div>
                        </div>
                    </div>

                    {
                        areas.map(area => {
                            return (
                                <AreaCard
                                    key={area.id}
                                    title={area.title}
                                    icon={area.icon}
                                    href={`/${textos.locale.substring(0, 2)}/areas-de-atuacao/${area.slug}`}
                                    lang={textos.locale.substring(0, 2)}
                                >
                                    { area.preview }
                                </AreaCard>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}