import {Store} from './store';

export const ArgamaHobbyCa: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '.product-form--atc-button .atc-button--text',
      text: ['Add to Cart'],
    },
    outOfStock: {
      container: '.product-form--atc-button .atc-button--text',
      text: ['Sold Out'],
    },
  },
  links: [
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'mg fazz vk',
      url: 'https://argamahobby.com/products/master-grade-1-100-fazz-ver-ka',
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'rg johnny zaku ii',
      url: 'https://argamahobby.com/products/bandai-real-grade-1-144-ms-06r-2-johnny-riddens-zaku-ii',
    },
  ],
  name: 'argamahobby-ca',
  waitUntil: 'domcontentloaded',
};
