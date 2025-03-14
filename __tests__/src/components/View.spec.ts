import { View } from '../../../src/components';
import { renderGenericComponent } from '../../utils';

describe('View tests', () => {
  const renderComponent = () =>
    renderGenericComponent(View, {
      testID: 'view',
    });

  it('should render a View', () => {
    const {
      component: { getByTestId },
    } = renderComponent();
    expect(getByTestId('view')).toBeDefined();
  });
});
