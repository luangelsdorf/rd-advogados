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

export function filterPosts(postList, value) {
  const filteredPostList = postList.filter(post => hasCategory(post.attributes.categories.data, value));
  console.log(filteredPostList);

  /* const filtered = postList[0].attributes.categories.data.filter(cat =>cat.attributes.slug === value);
  console.log(filtered); */

  /* postList[0].attributes.categories.data.filter(c => console.log(c.attributes.slug === 'noticia')) */

  return filteredPostList;
}

function hasCategory(categories, category) {
  return categories.filter(cat => cat.attributes.slug === category).length > 0;
}

export function hideNavigation(element) {
  let bsCollapse = new bootstrap.Collapse(element)
  bsCollapse.hide()
}

export const getExcerpt = (string) => string.split(' ').slice(0, 20).join(' ').replace(/(<([^>]+)>)/gi, "");