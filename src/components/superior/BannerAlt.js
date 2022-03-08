import React from 'react';

export default function BannerAlt({ title, subtitle, page }) {
    return (
        <div className="container-fluid p-0 position-relative d-flex justify-content-center" id={`banner-superior-${page}`}>
            <div className="container text-white h-100 position-absolute d-flex justify-content-center justify-content-md-start align-items-center top-0">
                <div id="banner-content">
                    <strong className="playfair text-center text-md-start fs-72 d-block mb-4 break-spaces">{ title }</strong>
                    <span className="lh-24 d-none mb-4 d-md-block">{ subtitle }</span>
                </div>
            </div>
        </div>
    )
}