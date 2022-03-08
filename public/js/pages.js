function homePage() {
    document.getElementById('expand-andre').addEventListener('click', () => {
        document.getElementById('collapse-andre').classList.toggle('active')
        document.querySelector('#expand-andre svg').classList.toggle('active')
    })
    document.getElementById('expand-lucas').addEventListener('click', () => {
        document.getElementById('collapse-lucas').classList.toggle('active')
        document.querySelector('#expand-lucas svg').classList.toggle('active')
    })
}

function areasPage(active) {
    document.getElementById(active).style.color = 'rgba(214, 164, 97, 1)'
    document.querySelectorAll('.navbar-toggler').forEach(btn => {
        btn.addEventListener('click', e => {
            e.currentTarget.classList.toggle('active')
        })
    })
}

export { homePage, areasPage }