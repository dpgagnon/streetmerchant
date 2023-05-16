import {Store} from './store';

export const TrinityHobbyCa: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '#AddToCartText-product-template',
      text: ['Add to Cart'],
    },
    outOfStock: {
      container: '#AddToCartText-product-template',
      text: ['Sold Out'],
    },
  },
  links: [
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'mg fazz vk',
      url: 'https://trinityhobby.com/products/mg-fazz-ver-ka',
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'mg deep striker',
      url: 'https://trinityhobby.com/products/mg-plan303e-deep-striker',
    },
  ],
  name: 'trinityhobby-ca',
  waitUntil: 'domcontentloaded',
};
