import React from 'react';
import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-706931M3ZV"
      />
      <Script
        id="gtag-analytics-4"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-706931M3ZV');
          `
        }}
      />

      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-236876044-1"
      />
      <Script
        id="gtag-universal-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-236876044-1');
          `
        }}
      />

      {/* Google Tag Manager */}
      <Script
        id="tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M5J87XJ');
          `
        }}
      />

      {/* Google Ads */}
      <Script
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-722406054"
      />
      <Script
        id="google-ads"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'AW-722406054');
          `
        }}
      />
    </>
  )
}