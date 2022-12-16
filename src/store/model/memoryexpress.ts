import {Store} from './store';

export const MemoryExpress: Store = {
  currency: '$',
  labels: {
    maxPrice: {
      container:
        '#ProductPricing .GrandTotal.c-capr-pricing__grand-total > div',
      euroFormat: false,
    },
    outOfStock: {
      container:
        '.c-capr-inventory-selector__details-online .c-capr-inventory-store__availability',
      text: ['Out of Stock', 'Backorder'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.memoryexpress.com/Products/MX79473',
    },
  ],
  name: 'memoryexpress',
  waitUntil: 'domcontentloaded',
};
