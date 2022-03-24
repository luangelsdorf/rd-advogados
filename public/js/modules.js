export function formatCategories(categorias) {
  let categories = []
  categorias.map(categoria => {
    categories.push(categoria.name)
  })
  return categories.join(', ')
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  const monthName = date.toLocaleString('default', { month: 'long' });
  const month = monthName.charAt().toUpperCase() + monthName.slice(1);
  return `${date.getDate()} de ${month} de ${date.getFullYear()}`
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

export const getExcerpt = (string) => string.split(' ').slice(0, 20).join(' ').replace(/(<([^>]+)>)/gi, "");