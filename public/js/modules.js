export function formatCategories(categorias) {
    let categories = []
    categorias.map(categoria => {
        categories.push(categoria.name)
    })
    return categories.join(', ')
}

export function formatDate(date, locale, isShort) {
    let day = date.substring(8, 10)
    let month = date.substring(5, 7)
    let year = date.substring(0, 4)

    if (locale.startsWith('pt')) {
        switch (month) {
            case '01':
                month = 'Janeiro'
                break;
            case '02':
                month = 'Fevereiro'
                break;
            case '03':
                month = 'Março'
                break;
            case '04':
                month = 'Abril'
                break;
            case '05':
                month = 'Maio'
                break;
            case '06':
                month = 'Junho'
                break;
            case '07':
                month = 'Julho'
                break;
            case '08':
                month = 'Agosto'
                break;
            case '09':
                month = 'Setembro'
                break;
            case '10':
                month = 'Outubro'
                break;
            case '11':
                month = 'Novembro'
                break;
            case '12':
                month = 'Dezembro'
                break;
        }
        if (isShort) {
            return `${month.substring(0, 3)} ${day}, ${year}`
        }
        else {
            return `${day} de ${month} de ${year}`
        }
    }
    else {
        switch (month) {
            case '01':
                month = 'January'
                break;
            case '02':
                month = 'February'
                break;
            case '03':
                month = 'March'
                break;
            case '04':
                month = 'April'
                break;
            case '05':
                month = 'May'
                break;
            case '06':
                month = 'June'
                break;
            case '07':
                month = 'July'
                break;
            case '08':
                month = 'August'
                break;
            case '09':
                month = 'September'
                break;
            case '10':
                month = 'October'
                break;
            case '11':
                month = 'November'
                break;
            case '12':
                month = 'December'
                break;
        }
        if (isShort) {
            return `${month.substring(0, 3)} ${day}, ${year}`
        }
        else {
            return `${month} ${day} ${year}`
        }
    }
}

export function filterPosts(e) {
    const value = e.target.value
    const cards = document.querySelectorAll('.post-card')


    cards.forEach(card => {
        if (card.children[0].children[0].children[1].innerHTML.includes(value)) {
            card.style.display = 'block'
        } else {
            card.style.display = 'none'
        }
    })
}

export function hideNavigation(element) {
    let bsCollapse = new bootstrap.Collapse(element)
    bsCollapse.hide()
}