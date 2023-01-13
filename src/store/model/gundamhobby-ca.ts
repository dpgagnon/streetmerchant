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
      series: 'pg exia lighting',
      url: 'http://www.gundamhobby.ca/products/pg-gundam-exia-lighting-model-pre-order-item-available-in-jan-2018',
    },
    /*
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'pg exia led',
      url: 'https://www.gundamhobby.ca/products/pg-led-unit-for-gundam-exia',
    },
    */
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'pg exia',
      url: 'https://www.gundamhobby.ca/products/pg-gundam-exia',
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'mg fazz vk',
      url: 'https://www.gundamhobby.ca/products/mg-fazz-ver-ka',
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'rg eva-06',
      url: 'https://www.gundamhobby.ca/products/rg-evangelion-mark-06',
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'rg eva-08',
      url: 'https://www.gundamhobby.ca/products/rg-evangelion-practical-type-ville-custom-08-alpha',
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'rg johnny zaku ii',
      url: 'https://www.gundamhobby.ca/products/rg-ms-06r-2-johnny-ridden-custom-zaku-ii',
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'mg deep striker',
      url: 'https://www.gundamhobby.ca/products/mg-deep-striker-gundam-sentinel',
    },
  ],
  name: 'gundamhobby-ca',
  waitUntil: 'domcontentloaded',
};
