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
      brand: 'bandai',
      model: 'model kit',
      series: 'mgsd barbatos',
      url: 'https://www.amazon.co.jp/-/en/dp/B0C88KB757'
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: '30ms idolmaster',
      url: 'https://www.amazon.co.jp/-/en/dp/B0C88LZHQM'
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: '30ms idolmaster body a',
      url: 'https://www.amazon.co.jp/-/en/dp/B0C88NQBWQ'
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'frs derby special week',
      url: 'https://www.amazon.co.jp/-/en/dp/B0C88NQJ1M'
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'frs synduality',
      url: 'https://www.amazon.co.jp/-/en/dp/B0BYYJ96P7'
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'macross yf29',
      url: 'https://www.amazon.co.jp/-/en/dp/B0BYYMVZXB'
    },
    {
      brand: 'kotobukiya',
      model: 'model kit',
      series: 'susanowo regalia',
      url: 'https://www.amazon.co.jp/-/en/dp/B0C5D5XRFR',
    },
    {
      brand: 'kotobukiya',
      model: 'model kit',
      series: 'lumitea black',
      url: 'https://www.amazon.co.jp/-/en/dp/B0C8RS4Z1M',
    },
  ],
  name: 'amazon-jp',
};
