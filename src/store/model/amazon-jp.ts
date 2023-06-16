import {Store} from './store';

export const AmazonJp: Store = {
  currency: '¥',
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
      euroFormat: false,
    },
    outOfStock: {
      container: '.a-price-whole',
      text: ['currently unavailable.'],
    },
  },
  links: [
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'mg fazz vk',
      url: 'https://www.amazon.co.jp/-/en/dp/B07YNQ1NZK/',
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'rg johnny zaku ii',
      url: 'https://www.amazon.co.jp/-/en/dp/B075CLGPC9/',
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'mg deep striker',
      url: 'https://www.amazon.co.jp/-/en/dp/B078KGV9KT',
    },
    {
      brand: 'kotobukiya',
      model: 'model kit',
      series: 'arcanadia yukumo',
      url: 'https://www.amazon.co.jp/-/en/dp/B0BRRGV4ZG/',
    },
    {
      brand: 'kotobukiya',
      model: 'model kit',
      series: 'susanowo regalia',
      url: 'https://www.amazon.co.jp/-/en/dp/B0C5D5XRFR',
    },
    {
      brand: 'kotobukiya',
      model: 'figure',
      series: 'pso2 scale gene stellar memories',
      url: 'https://www.amazon.co.jp/-/en/dp/B0BL6PWK1X/',
    },
    /*
    {
      brand: 'kotobukiya',
      model: 'figure',
      series: 'pso2 scale matoi',
      url: 'https://www.amazon.co.jp/-/en/dp/B0BL6B9XLT/',
    },
    */
    {
      brand: 'good smile',
      model: 'figure',
      series: 'scale xenoblade nia',
      url: 'https://www.amazon.co.jp/-/en/dp/B09S37J9F9/',
    },
    {
      brand: 'kotobukiya',
      model: 'model kit',
      series: 'pyra amiibo',
      url: 'https://www.amazon.co.jp/-/en/dp/B0BQ68CPW9/',
    },
  ],
  name: 'amazon-jp',
};
