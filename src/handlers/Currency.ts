import currency from 'currency.js';

const currencyConfig = {
  symbol: '$ ',
  decimal: '.',
  separator: ',',
};

const format = (value: number): string =>
  currency(value, currencyConfig).format();

const numeric = (value: string): number =>
  currency(value, currencyConfig).value;

export const Currency = {
  format,
  numeric,
};
