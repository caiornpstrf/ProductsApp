import { useStringHandler } from '../../../src/locale/useStringHandler';
import globalStrings from '../../../src/locale/strings.json';
import { renderGenericHook } from '../../utils';

describe('useStringHandler', () => {
  const renderHook = (key?: string) =>
    renderGenericHook(() => useStringHandler(key));

  it('should return the correct string for a given key', () => {
    const { result } = renderHook();
    const text = result.current.text('productsList.title');
    expect(text).toBe(globalStrings.productsList.title);
  });

  it('should return the fallback string if key is not found', () => {
    const { result } = renderHook();
    const text = result.current.text('nonExistentKey');
    expect(text).toBe('{ String not found for key: nonExistentKey }');
  });

  it('should replace parameters in the string', () => {
    const { result } = renderHook();
    const text = result.current.text('productDetails.inStock', {
      stock: 'value1',
    });
    expect(text).toBe(
      globalStrings.productDetails.inStock.replace('{{ stock }}', 'value1'),
    );
  });

  it('should not replace parameters if params is null', () => {
    const { result } = renderHook();
    const text = result.current.text('productDetails.inStock', {
      stock: null,
    });
    expect(text).toBe(globalStrings.productDetails.inStock);
  });

  it('should return feature specific strings if featureName is provided', () => {
    const { result } = renderHook('productDetails');
    const text = result.current.text('title');
    expect(text).toBe(globalStrings.productDetails.title);
  });
});
