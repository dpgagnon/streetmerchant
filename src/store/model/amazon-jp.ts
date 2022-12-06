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
      series: 'mg psycho zaku ii',
      url: 'https://www.amazon.co.jp/-/en/dp/B09L1JFG8D/',
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
      series: 'rg build strike',
      url: 'https://www.amazon.co.jp/-/en/dp/B01LX4WDRM/',
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
      series: 'fm aerial',
      url: 'https://www.amazon.co.jp/-/en/dp/B0BGNCF723/',
    },
    {
      brand: 'bandai',
      model: 'model kit',
      series: 'mg zeta vk',
      url: 'https://www.amazon.co.jp/-/en/dp/B0BGN9421J/',
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
      series: 'pso2 stella tears',
      url: 'https://www.amazon.co.jp/-/en/dp/B084692TSZ/',
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
      brand: 'good smile',
      model: 'figure',
      series: 'scale xenoblade nia',
      url: 'https://www.amazon.co.jp/-/en/dp/B09S37J9F9/',
    },
  ],
  name: 'amazon-jp',
};
