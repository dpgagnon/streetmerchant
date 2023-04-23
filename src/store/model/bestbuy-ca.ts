import {Store} from './store';

export const BestBuyCa: Store = {
  currency: '$',
  labels: {
    maxPrice: {
      container: 'div[class*="pricingContainer"]',
      euroFormat: false,
    },
    inStock: {
      container: '.addToCartButton:not(:disabled)',
      text: ['add to cart'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.bestbuy.ca/en-ca/product/google-nest-hello-wi-fi-video-doorbell-black-white/12222651',
    },
    {
      brand: 'kotobukiya',
      model: 'model kit',
      series: 'pyra amiibo',
      url: 'https://www.bestbuy.ca/en-ca/product/amiibo-super-smash-bros-pyra-mythra/17074499',
    },
    {
      brand: 'kotobukiya',
      model: 'model kit',
      series: '4090 fe',
      url: 'https://www.bestbuy.ca/en-ca/product/nvidia-geforce-rtx-4090-24gb-gddr6-video-card/16531651',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5de',
      url: 'https://www.bestbuy.ca/en-ca/product/playstation-5-digital-edition-console-online-only/14962184?intl=nosplash',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.bestbuy.ca/en-ca/product/xbox-series-x-1tb-console-new-model-online-only/14964951',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.bestbuy.ca/en-ca/product/xbox-series-s-512gb-console-new-model-online-only/14964950',
    },
  ],
  name: 'bestbuy-ca',
  waitUntil: 'domcontentloaded',
};
