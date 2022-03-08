import { homePage, areasPage } from "./pages.js";

document.addEventListener('DOMContentLoaded', () => {
    let path = window.location.pathname

    if (path === '/pt' || path === '/en' || path.startsWith('/pt/#') || path.startsWith('/en/#')) {
        homePage()
    }

    if (path.startsWith('/pt/areas-de-atuacao') || path.startsWith('/en/areas-de-atuacao')) {
        areasPage(path.slice(21))
    }
})