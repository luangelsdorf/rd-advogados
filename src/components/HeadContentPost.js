import Head from "next/head";

export default function HeadContentPost(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel="stylesheet" href={`/css/${props.page}.css`} />
      <link rel="icon" href="/img/favicon.png" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" />
      <script src="/js/pages.js" type="module" />
      <script src="/js/main.js" type="module" />
      <meta property="og:url" content={`${process.env.NEXT_PUBLIC_API_URL}${props.tags.url}`} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.tags.desc.substring(3, 125) + '...'} />
      <meta property="og:image" content={props.tags.img} />

      { /*Google Fonts*/}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&family=Nunito+Sans&display=swap" rel="stylesheet" />
    </Head>
  )
}