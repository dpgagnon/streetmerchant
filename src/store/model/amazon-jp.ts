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
      series: 'pg exia lighting',
      url: 'https://www.amazon.co.jp/-/en/dp/B075ZXST4L/',
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'pg exia led',
      url: 'https://www.amazon.co.jp/-/en/dp/B07HJFJQB4/',
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'pg exia',
      url: 'https://www.amazon.co.jp/-/en/dp/B09KN3K9TV/',
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'mg fazz vk',
      url: 'https://www.amazon.co.jp/-/en/dp/B07YNQ1NZK/',
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'rg eva-06',
      url: 'https://www.amazon.co.jp/-/en/dp/B08VF7PP4J/',
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'rg eva-08',
      url: 'https://www.amazon.co.jp/-/en/dp/B08KY7T7KN/',
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
      series: 'md susanowo souen',
      url: 'https://www.amazon.co.jp/-/en/dp/B0B5SPYRF9/',
    },
    {
      brand: 'kotobukiya',
      model: 'model kit',
      series: 'arcanadia yukumo',
      url: 'https://www.amazon.co.jp/-/en/dp/B0BRRGV4ZG/',
    },
    {
      brand: 'kotobukiya',
      model: 'figure',
      series: 'md scale asra archer',
      url: 'https://www.amazon.co.jp/-/en/dp/B0BHL2HG19/',
    },
    {
      brand: 'kotobukiya',
      model: 'figure',
      series: 'md scale asra ninja',
      url: 'https://www.amazon.co.jp/-/en/dp/B09S94LRTN/',
    },
    {
      brand: 'kotobukiya',
      model: 'figure',
      series: 'pso2 scale gene stellar memories',
      url: 'https://www.amazon.co.jp/-/en/dp/B0BL6PWK1X/',
    },
    {
      brand: 'kotobukiya',
      model: 'figure',
      series: 'pso2 scale matoi',
      url: 'https://www.amazon.co.jp/-/en/dp/B0BL6B9XLT/',
    },
    {
      brand: 'good smile',
      model: 'figure',
      series: 'scale xenoblade nia',
      url: 'https://www.amazon.co.jp/-/en/dp/B09S37J9F9/',
    },
    {
      brand: 'good smile',
      model: 'figure',
      series: 'pup guts zerker L',
      url: 'https://www.amazon.co.jp/-/en/dp/B0B3J6HFGX',
    },
  ],
  name: 'amazon-jp',
};
