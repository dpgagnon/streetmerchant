import {Store} from './store';

export const GundamHobbyCa: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '#AddToCart',
      text: ['Add to Cart'],
    },
    outOfStock: {
      container: '#AddToCart',
      text: ['Sold Out'],
    },
  },
  links: [
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'mg fazz vk',
      url: 'https://www.gundamhobby.ca/products/mg-fazz-ver-ka',
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'rg johnny zaku ii',
      url: 'https://www.gundamhobby.ca/products/rg-ms-06r-2-johnny-ridden-custom-zaku-ii',
    },
  ],
  name: 'gundamhobby-ca',
  waitUntil: 'domcontentloaded',
};
