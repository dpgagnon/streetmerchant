import {Browser, PuppeteerLifeCycleEvent} from 'puppeteer';

export type Element = {
  container?: string;
  text: string[];
};

export type Pricing = {
  container: string;
  euroFormat?: boolean;
};

export type Brand =
  | 'test:brand'
  | 'captcha-deterrent'
  | 'microsoft'
  | 'sony'
  | 'bandai'
  | 'kotobukiya'
  | 'good smile';

export type Series =
  | 'test:series'
  | 'captcha-deterrent'
  | 'sonyps5c'
  | 'sonyps5de'
  | 'xboxsx'
  | 'xboxss'
  | 'pg exia'
  | 'pg exia lighting'
  | 'pg exia led'
  | 'mg fazz vk'
  | 'mg deep striker'
  | 'rg eva-06'
  | 'rg eva-08'
  | 'rg build strike'
  | 'rg johnny zaku ii'
  | 'md susanowo souen'
  | 'pso2 stella tears'
  | 'fm aerial'
  | 'mg zeta vk'
  | 'md scale asra archer'
  | 'md scale asra ninja'
  | 'scale xenoblade nia';

export type Model =
  | 'test:model'
  | 'captcha-deterrent'
  | 'ps5 console'
  | 'ps5 digital'
  | 'xbox series s'
  | 'xbox series x'
  | 'model kit'
  | 'figure';

export type Link = {
  brand: Brand;
  cartUrl?: string;
  itemNumber?: string;
  labels?: Labels;
  model: Model;
  openCartAction?: (browser: Browser) => Promise<string>;
  price?: number | null;
  series: Series;
  screenshot?: string;
  url: string;
};

export type CaptchaHandlerElements = {
  challenge: string;
  input: string;
  submit: string;
  captureType?: string;
};

export type LabelQuery = Element[] | Element | string[];

export type Labels = {
  bannedSeller?: LabelQuery;
  captcha?: LabelQuery;
  captchaHandler?: CaptchaHandlerElements;
  container?: string;
  inStock?: LabelQuery;
  outOfStock?: LabelQuery;
  maxPrice?: Pricing;
};

export type CaptchaDeterrent = {
  hardLinks?: string[];
  searchUrl?: string;
  searchTerms?: string[];
};

export type StatusCodeRangeArray = Array<number | [number, number]>;

export type Store = {
  realTimeInventoryLookup?: (itemNumber: string) => Promise<boolean>;
  /**
   * The range of status codes which will trigger backoff, i.e. an increasing
   * delay between requests. Setting an empty array will disable the feature.
   * If not defined, the default range will be used: 403.
   */
  backoffStatusCodes?: StatusCodeRangeArray;
  disableAdBlocker?: boolean;
  links: Link[];
  linksBuilder?: {
    builder: (docElement: cheerio.Cheerio, series: Series) => Link[];
    ttl?: number;
    waitUntil?: PuppeteerLifeCycleEvent;
    waitForSelector?: string;
    urls: Array<{series: Series; url: string | string[]}>;
  };
  labels: Labels;
  name: string;
  currency: '£' | '$' | '€' | 'R$' | 'kr.' | '¥' | '';
  setupAction?: (browser: Browser) => void;
  /**
   * The range of status codes which considered successful, i.e. without error
   * allowing request parsing to continue. Setting an empty array will cause
   * all requests to fail. If not defined, the default range will be used:
   * 0 -> 399 inclusive.
   */
  successStatusCodes?: StatusCodeRangeArray;
  waitUntil?: PuppeteerLifeCycleEvent;
  minPageSleep?: number;
  maxPageSleep?: number;

  proxyList?: string[];
  currentProxyIndex?: number;
  captchaDeterrent?: CaptchaDeterrent;
};
