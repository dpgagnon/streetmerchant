import {Store} from './store';
import fetch from 'node-fetch';

export const NeweggCa: Store = {
  currency: '$',
  labels: {
    captcha: {
      container: 'body',
      text: ['are you a human?'],
    },
    inStock: {
      container: 'div#ProductBuy .btn-primary',
      text: ['add to cart'],
    },
    maxPrice: {
      container: 'div#app div.product-price > ul > li.price-current > strong',
      euroFormat: false,
    },
    outOfStock: [
      {
        container: '.product-inventory',
        text: [' out of stock.'],
      },
      {
        container: '.product-flag',
        text: ['out of stock '],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.newegg.ca/p/N82E16824475043?Item=N82E16824475043&cm_sp=Homepage_MKPL-_-P3_24-475-043-_-12302020',
    },
  ],
  name: 'newegg-ca',
  realTimeInventoryLookup: async (itemNumber: string) => {
    const request_url =
      'https://www.newegg.ca/product/api/ProductRealtime?ItemNumber=' +
      itemNumber;
    const response = await fetch(request_url);
    const response_json = await response.json();
    return (
      response_json.MainItem !== undefined &&
      response_json.MainItem.Instock === true
    );
  },
};
