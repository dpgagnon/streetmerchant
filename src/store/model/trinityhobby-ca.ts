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
      series: 'rg eva-06',
      url: 'https://trinityhobby.com/products/pre-order-rg-evangelion-unit-06-jul-aug-2021',
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'rg eva-08',
      url: 'https://trinityhobby.com/products/pre-order-rg-multipurpose-humanoid-decisive-weapon-artificial-human-evangelion-unit-08a-mar-2021',
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
