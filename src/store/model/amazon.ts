import {Store} from './store';

export const Amazon: Store = {
  backoffStatusCodes: [403, 429, 503],
  captchaDeterrent: {
    hardLinks: [
      'https://www.amazon.com/Amazon-Video/b/?ie=UTF8&node=2858778011&ref_=nav_cs_prime_video',
      'https://www.amazon.com/alm/storefront?almBrandId=VUZHIFdob2xlIEZvb2Rz&ref_=nav_cs_whole_foods_in_region',
      'https://www.amazon.com/gp/goldbox?ref_=nav_cs_gb',
    ],
    searchTerms: ['goober', 'dungeons+and+dragons'],
    searchUrl: 'https://www.amazon.com/s?k=%%s&i=todays-deals&ref=nb_sb_noss_2',
  },
  currency: '$',
  labels: {
    captcha: {
      container: 'body',
      text: ['enter the characters you see below'],
    },
    captchaHandler: {
      challenge: '.a-row > img',
      input: '#captchacharacters',
      submit: 'button[type="submit"]',
    },
    inStock: [
      {
        container: '#add-to-cart-button',
        text: ['add to cart'],
      },
      {
        container: '#buy-now-button',
        text: ['buy now'],
      },
    ],
    maxPrice: {
      container: '.a-offscreen',
    },
  },
  links: [
    {
      brand: 'test:brand',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B089KV4YYX&Quantity.1=1',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amazon.com/dp/B089KV4YYX',
    },
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08FC5L3RG&Quantity.1=1',
      labels: {
        inStock: {
          container: '#productTitle',
          text: ['playstation 5 console'],
        },
      },
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.com/dp/B08FC5L3RG',
    },
    {
      brand: 'sony',
      cartUrl:
        'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08FC6MR62&Quantity.1=1',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.amazon.com/dp/B08FC6MR62',
    },
    {
      brand: 'microsoft',
      labels: {
        inStock: {
          container: '#productTitle',
          text: ['Xbox Series X'],
        },
      },
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.amazon.com/dp/B08H75RTZ8',
    },
    {
      brand: 'microsoft',
      labels: {
        inStock: {
          container: '#productTitle',
          text: ['Xbox Series S'],
        },
      },
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.amazon.com/dp/B08G9J44ZN',
    },
  ],
  name: 'amazon',
};
