import qs from 'qs';

export const areas = qs.stringify({
  populate: [
    'hero',
    'hero.cover',
    'cta',
    'laborLaw.laborLawServices',
    'civilLaw.civilLawServices',
    'pensionLaw.pensionLawServices',
  ],
}, {
  encode: false,
  encodeValuesOnly: true,
});

export const homePage = qs.stringify({
  populate: [
    'heroSlides.cover',
    'heroSlides.filledButton',
    'heroSlides.outlinedButton',
    'aboutUs.rightImage',
    'aboutUs.leftImage',
    'aboutUs.bottomImage',
    'aboutUs.title',
    'carousel.gallery',
    'carousel.gallery.image',
    'ourTeam.title',
    'ourTeam.members',
    'ourTeam.members.photo',
    'occupationAreas.title',
    'occupationAreas.image',
    'callToAction',
    'recentPosts.title',
  ],
}, {
  encode: false,
  encodeValuesOnly: true,
});

export const homeBlog = qs.stringify({
  populate: [
    'hero.cover',
    'heading.title',
  ],
}, {
  encode: false,
  encodeValuesOnly: true,
});

export const footer = qs.stringify({
  populate: [
    'contact.title',
    'background'
  ],
}, {
  encode: false,
  encodeValuesOnly: true,
});

export const info = qs.stringify({
  populate: '*'
}, {
  encode: false,
  encodeValuesOnly: true,
});

export const posts = qs.stringify({
  sort: ['createdAt:desc'],
  populate: '*',
}, {
  encode: false,
});

export const categories = qs.stringify({
  populate: '*',
}, {
  encode: false,
});