import {Store} from './store';

export const GundamHangarCa: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '.item-detail-stock',
      text: [' in stock'],
    },
    outOfStock: {
      container: '.item-detail-stock',
      text: ['Out of stock'],
    },
  },
  links: [
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'mg fazz vk',
      url: 'https://gundamhangar.com/canadian-gundam-store/product/mg-fazz-verka',
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'rg eva-06',
      url: 'https://gundamhangar.com/canadian-gundam-store/product/rg-1-144-evangelion-mark06',
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'rg eva-08',
      url: 'https://gundamhangar.com/canadian-gundam-store/product/rg-1-144-evangelion-unit-08',
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'rg johnny zaku ii',
      url: 'https://gundamhangar.com/canadian-gundam-store/product/rg-1-144-ms-06r-2-johnny-riddens-zaku-ii',
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'mg deep striker',
      url: 'https://gundamhangar.com/canadian-gundam-store/product/mg-1-100-plan303e-deep-striker',
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'mg ex-s',
      url: 'https://gundamhangar.com/canadian-gundam-store/product/mg-1-100-ex-s-gundam-s-gundam',
    },
  ],
  name: 'gundamhangar-ca',
  waitUntil: 'domcontentloaded',
};
