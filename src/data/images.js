// Central registry for the eleven Gin Library photographs.
// WebP (converted from the source PNGs) keeps the payload ~90% smaller.
// Each entry carries intrinsic width/height (reserves space, prevents CLS)
// and specific alt text (part of the voice, and accessible).
import meta from './imageMeta.json'
import img1 from '../assets/images/ginlibrary1.webp'
import img2 from '../assets/images/ginlibrary2.webp'
import img3 from '../assets/images/ginlibrary3.webp'
import img4 from '../assets/images/ginlibrary4.webp'
import img5 from '../assets/images/ginlibrary5.webp'
import img6 from '../assets/images/ginlibrary6.webp'
import img7 from '../assets/images/ginlibrary7.webp'
import img8 from '../assets/images/ginlibrary8.webp'
import img9 from '../assets/images/ginlibrary9.webp'
import img10 from '../assets/images/ginlibrary10.webp'
import img11 from '../assets/images/ginlibrary11.webp'

const alt = {
  ginlibrary1: 'The bar at The Gin Library, backlit shelves of gin bottles and a bartender mixing a drink',
  ginlibrary2: 'A pale green gin sour topped with a dehydrated lime wheel',
  ginlibrary3: 'A copper julep cup packed with crushed ice, lit by a nearby candle',
  ginlibrary4: 'An espresso martini and a bright green highball being finished behind the bar',
  ginlibrary5: 'A copper mule mug garnished with a slice of cucumber',
  ginlibrary6: 'A negroni over a single clear ice cube, beside a jar of citrus garnishes',
  ginlibrary7: 'An old fashioned and a whisky sour coupe resting on slate coasters',
  ginlibrary8: 'A gin and tonic in a balloon glass beside its bottle',
  ginlibrary9: 'A blush-pink sour and a green cucumber cooler in candlelight',
  ginlibrary10: 'A gin sour served in a coupe on a patio table at dusk',
  ginlibrary11: 'A row of balloon glasses poured for a gin tasting flight',
}

const make = (name, src) => ({ src, alt: alt[name], width: meta[name].w, height: meta[name].h })

// Named roles, mapped from what each photograph actually shows.
export const images = {
  interior: make('ginlibrary1', img1),
  cocktailGreen: make('ginlibrary2', img2),
  cocktailJulep: make('ginlibrary3', img3),
  cocktailPair: make('ginlibrary4', img4),
  cocktailMule: make('ginlibrary5', img5),
  cocktailNegroni: make('ginlibrary6', img6),
  cocktailOldFashioned: make('ginlibrary7', img7),
  ginBalloon: make('ginlibrary8', img8),
  cocktailPinkPair: make('ginlibrary9', img9),
  cocktailSour: make('ginlibrary10', img10),
  ginFlight: make('ginlibrary11', img11),
}

// Ordered list for the gallery masonry.
export const gallery = [
  images.interior,
  images.cocktailPair,
  images.cocktailNegroni,
  images.cocktailGreen,
  images.cocktailPinkPair,
  images.cocktailJulep,
  images.cocktailMule,
  images.cocktailOldFashioned,
  images.cocktailSour,
  images.ginBalloon,
  images.ginFlight,
]

// Cocktail close-ups for the Signature Cocktails grid.
export const cocktails = [
  images.cocktailGreen,
  images.cocktailNegroni,
  images.cocktailJulep,
  images.cocktailPinkPair,
  images.cocktailMule,
  images.cocktailOldFashioned,
]
