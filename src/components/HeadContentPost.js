import Head from "next/head";

export default function HeadContentPost(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <link rel="stylesheet" href={`/css/${props.page}.css`} />
            <link rel="icon" href="/img/favicon.png"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"/>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" />
            <script src="/js/pages.js" type="module" />
            <script src="/js/main.js" type="module" />
            <script src="/js/pixel.js" />
            <script src="/js/tagmanager.js" />
            <meta property="og:url"           content={`https://brcadv.com${props.tags.url}`} />
            <meta property="og:type"          content="article" />
            <meta property="og:title"         content={props.title} />
            <meta property="og:description"   content={props.tags.desc.substring(3, 125) + '...'} />
            <meta property="og:image"         content={props.tags.img} />
        </Head>
    )
}