export const pageview = (url) => {
  window.gtag('config', 'G-706931M3ZV', {
    page_path: url,
  });
  window.gtag('config', 'AW-722406054', {
    page_path: url,
  });
  window.gtag('config', 'UA-236876044-1', {
    page_path: url,
  });
}