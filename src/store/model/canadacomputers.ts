import {Store} from './store';

export const CanadaComputers: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: 'div[class="pi-prod-availability"]',
      text: ['Online In Stock'],
    },
    maxPrice: {
      container: '.h2-big > strong:nth-child(1)',
      euroFormat: false,
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.canadacomputers.com/product_info.php?item_id=167320&cPath=27_1046_365&language=en',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=13_1860_1862&item_id=184244&language=en',
    },
  ],
  name: 'canadacomputers',
  waitUntil: 'domcontentloaded',
};
