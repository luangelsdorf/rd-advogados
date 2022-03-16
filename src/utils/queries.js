import qs from 'qs';

export const areasQuery = qs.stringify({
  populate: [
    'hero',
    'cta',
    'laborLaw.laborLawServices',
    'civilLaw.civilLawServices',
    'pensionLaw.pensionLawServices',
  ],
}, {
  encode: false,
  encodeValuesOnly: true,
});

export const homePageQuery = qs.stringify({
  populate: [
    'heroSlides.cover',
    'heroSlides.filledButton',
    'heroSlides.outlinedButton',
    'aboutUs.rightImage',
    'aboutUs.leftImage',
    'aboutUs.bottomImage',
    'aboutUs.title',
    'carousel.images',
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

export const homeBlogQuery = qs.stringify({
  populate: [
    'hero.cover',
    'heading.title',
  ],
}, {
  encode: false,
  encodeValuesOnly: true,
});

export const footerQuery = qs.stringify({
  populate: [
    'contact.title',
  ],
}, {
  encode: false,
  encodeValuesOnly: true,
});

export const contactQuery = qs.stringify({
  populate: '*'
})