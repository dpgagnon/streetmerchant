import {config, defaultStoreData} from '../../config';
import {Amazon} from './amazon';
import {AmazonCa} from './amazon-ca';
import {AmazonJp} from './amazon-jp';
import {BestBuyCa} from './bestbuy-ca';
import {CanadaComputers} from './canadacomputers';
import {GamestopCA} from './gamestop-ca';
import {GundamHangarCa} from './gundamhangar-ca';
import {GundamHobbyCa} from './gundamhobby-ca';
import {MemoryExpress} from './memoryexpress';
import {NeweggCa} from './newegg-ca';
import {Store} from './store';
import {ToysRUs} from './toysrus';
import {WalmartCa} from './walmart-ca';
import {logger} from '../../logger';
import chalk from 'chalk';
import {MicrosoftCA} from './microsoft-ca';

export const storeList = new Map([
  [Amazon.name, Amazon],
  [AmazonCa.name, AmazonCa],
  [AmazonJp.name, AmazonJp],
  [BestBuyCa.name, BestBuyCa],
  [CanadaComputers.name, CanadaComputers],
  [GamestopCA.name, GamestopCA],
  [GundamHangarCa.name, GundamHangarCa],
  [GundamHobbyCa.name, GundamHobbyCa],
  [MemoryExpress.name, MemoryExpress],
  [MicrosoftCA.name, MicrosoftCA],
  [NeweggCa.name, NeweggCa],
  [ToysRUs.name, ToysRUs],
  [WalmartCa.name, WalmartCa],
]);

const brands = new Set();
const models = new Set();
const series = new Set();
const stores = new Map();

function filterBrandsSeriesModels() {
  brands.clear();
  series.clear();
  models.clear();

  for (const store of storeList.values()) {
    for (const link of store.links) {
      brands.add(link.brand);
      series.add(link.series);
      models.add(link.model);
    }

    if (store.minPageSleep === undefined) {
      store.minPageSleep = defaultStoreData.minPageSleep;
    }

    if (store.maxPageSleep === undefined) {
      store.maxPageSleep = defaultStoreData.maxPageSleep;
    }
  }
}

function printConfig() {
  if (config.store.showOnlyBrands.length > 0) {
    logger.info(`ℹ selected brands: ${config.store.showOnlyBrands.join(', ')}`);
  }

  if (config.store.showOnlyModels.length > 0) {
    logger.info(
      `ℹ selected models: ${config.store.showOnlyModels
        .map(entry => {
          return entry.series
            ? entry.name + ' (' + entry.series + ')'
            : entry.name;
        })
        .join(', ')}`
    );
  }

  if (config.store.showOnlySeries.length > 0) {
    logger.info(`ℹ selected series: ${config.store.showOnlySeries.join(', ')}`);
  }

  if (config.store.stores.length > 0) {
    const stores = darkenEmptyStores();
    logger.info(`ℹ selected stores: ${stores.names.join(', ')}`);

    if (stores.anyExcluded) {
      logger.warn(
        'ℹ some of the selected stores (grayed out) dont have what you are looking for'
      );
    }
  }
}

function darkenEmptyStores(): {names: string[]; anyExcluded: boolean} {
  let anyExcluded = false;
  const selectedStores = config.store.stores.map(store => store.name);

  const names = selectedStores.map(selected => {
    const storeConfig = storeList.get(selected);
    const hasAny =
      storeConfig?.links.some(
        l =>
          (config.store.showOnlySeries?.includes(l.series) ?? false) ||
          config.store.showOnlyBrands?.includes(l.brand ?? false) ||
          (config.store.showOnlyModels?.map(m => m.name).includes(l.model) ??
            false)
      ) ?? false;

    anyExcluded = anyExcluded || !hasAny;
    return hasAny ? selected : chalk.gray(selected);
  });
  return {names, anyExcluded};
}

function warnIfStoreDeprecated(store: Store) {
  switch (store.name) {
    default:
  }
}

export function updateStores() {
  stores.clear();

  for (const storeData of config.store.stores) {
    const store = storeList.get(storeData.name);

    if (store) {
      warnIfStoreDeprecated(store);
      stores.set(storeData.name, store);
      store.minPageSleep = storeData.minPageSleep;
      store.maxPageSleep = storeData.maxPageSleep;
      store.proxyList = storeData.proxyList;
    } else {
      logger.warn(`No store named ${storeData.name}, skipping.`);
    }
  }

  filterBrandsSeriesModels();
  printConfig();
}

updateStores();

export function getAllBrands() {
  return [...brands];
}

export function getAllSeries() {
  return [...series];
}

export function getAllModels() {
  return [...models];
}

export function getStores() {
  return stores;
}

export * from './store';
