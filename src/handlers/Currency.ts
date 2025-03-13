import currency from 'currency.js';

const format = (value: number): string =>
  currency(value, {
    symbol: '$ ',
    decimal: ',',
    separator: '.',
  }).format();

const numeric = (value: string): number =>
  currency(value, {
    symbol: '',
    decimal: ',',
    separator: '.',
  }).value;

export const Currency = {
  format,
  numeric,
};
