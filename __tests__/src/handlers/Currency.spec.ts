import { Currency } from '../../../src/handlers/Currency';

describe('Currency', () => {
  it('should format number to currency string', () => {
    const value = 1234.56;
    const formattedValue = Currency.format(value);
    expect(formattedValue).toBe('$ 1,234.56');
  });

  it('should convert currency string to number', () => {
    const value = '$ 1,234.56';
    const numericValue = Currency.numeric(value);
    expect(numericValue).toBe(1234.56);
  });
});
