import { Icon } from '../../../src/components';
import { renderGenericComponent } from '../../utils';

describe('Icon tests', () => {
  it('should render Solid Icon', () => {
    const {
      component: { getByTestId },
    } = renderGenericComponent(Icon.Solid, { name: 'rocket', testID: 'Icon' });
    expect(getByTestId('Icon')).toBeDefined();
  });

  it('should render Regular Icon', () => {
    const {
      component: { getByTestId },
    } = renderGenericComponent(Icon.Regular, {
      name: 'rocket',
      testID: 'Icon',
    });
    expect(getByTestId('Icon')).toBeDefined();
  });

  it('should render Brand Icon', () => {
    const {
      component: { getByTestId },
    } = renderGenericComponent(Icon.Brand, { name: 'rocket', testID: 'Icon' });
    expect(getByTestId('Icon')).toBeDefined();
  });
});
