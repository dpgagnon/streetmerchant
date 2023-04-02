import {Store} from './store';

export const AmazonCa: Store = {
  currency: '$',
  labels: {
    captcha: {
      container: 'body',
      text: ['enter the characters you see below'],
    },
    captchaHandler: {
      challenge: 'img',
      input: '#captchacharacters',
      submit: 'button[type="submit"]',
    },
    inStock: {
      container: '#desktop_buybox',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.a-price-whole',
    },
    outOfStock: {
      container: '.a-price-whole',
      text: ['currently unavailable.'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B07PBLD2MX&Quantity.1=1',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amazon.ca/dp/B07PBLD2MX',
    },
    {
      brand: 'kotobukiya',
      model: 'model kit',
      series: 'zoids gojulas',
      url: 'https://www.amazon.ca/dp/B09S9CFY5J/',
    },
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08GSC5D9G&Quantity.1=1',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.ca/dp/B08GSC5D9G',
    },
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08GS1N24H&Quantity.1=1',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.amazon.ca/dp/B08GS1N24H',
    },
    {
      brand: 'microsoft',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08H75RTZ8&Quantity.1=1',
      labels: {
        inStock: {
          container: '#productTitle',
          text: ['Xbox Series X'],
        },
      },
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.amazon.ca/dp/B08H75RTZ8',
    },
    {
      brand: 'microsoft',
      cartUrl:
        'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08G9J44ZN&Quantity.1=1',
      labels: {
        inStock: {
          container: '#productTitle',
          text: ['Xbox Series S'],
        },
      },
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.amazon.ca/dp/B08G9J44ZN',
    },
  ],
  name: 'amazon-ca',
};
