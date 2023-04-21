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
      series: 'rg eva-06',
      url: 'https://argamahobby.com/products/real-grade-rg-neon-genesis-evangelion-evangelion-mk-06-eva06',
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'rg eva-08',
      url: 'https://argamahobby.com/products/real-grade-general-purpose-humanoid-decisive-weapon-android-evangelion-regular-practical-type-ville-custom-unit-8-%CE%B1',
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'rg johnny zaku ii',
      url: 'https://argamahobby.com/products/bandai-real-grade-1-144-ms-06r-2-johnny-riddens-zaku-ii',
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'mg deep striker',
      url: 'https://argamahobby.com/products/master-grade-1-100-plan303e-deep-striker',
    },
  ],
  name: 'argamahobby-ca',
  waitUntil: 'domcontentloaded',
};
