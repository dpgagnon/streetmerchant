import {Store} from './store';

export const AmazonJp: Store = {
  currency: '¥',
  labels: {
    inStock: {
      container: '#desktop_buybox',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.a-price-whole',
      euroFormat: false
    },
    outOfStock: {
      container: '.a-price-whole',
      text: ['currently unavailable.'],
    },
  },
  links: [
    {
      brand: 'bandai',
      cartUrl:
        'https://www.amazon.jp/gp/aws/cart/add.html?ASIN.1=B08PQ585CX&Quantity.1=1',
      model: 'gundam',
      series: 'pg exia lighting',
      url: 'https://www.amazon.co.jp/-/en/dp/B075ZXST4L/',
    },
    {
      brand: 'bandai',
      cartUrl:
        'https://www.amazon.jp/gp/aws/cart/add.html?ASIN.1=B08PQ585CX&Quantity.1=1',
      model: 'gundam',
      series: 'pg exia led',
      url: 'https://www.amazon.co.jp/-/en/dp/B07HJFJQB4/',
    },
    {
      brand: 'bandai',
      cartUrl:
        'https://www.amazon.jp/gp/aws/cart/add.html?ASIN.1=B08PQ585CX&Quantity.1=1',
      model: 'gundam',
      series: 'pg exia',
      url: 'https://www.amazon.co.jp/-/en/dp/B09KN3K9TV/',
    },
  ],
  name: 'amazon-jp',
};
