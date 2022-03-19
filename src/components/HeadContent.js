import Head from 'next/head';

export default function HeadContent(props) {
  return (
    <Head>
      <title>{props.title}</title>
      {<link rel="stylesheet" href={`/css/${props.page}.css`} />}
      <link rel="icon" href="/img/favicon.png" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" />
      <script src="/js/pages.js" type="module" />
      <script src="/js/main.js" type="module" />

      { /*Google Fonts*/}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&family=Nunito+Sans&display=swap" rel="stylesheet" />
    </Head>
  )
}