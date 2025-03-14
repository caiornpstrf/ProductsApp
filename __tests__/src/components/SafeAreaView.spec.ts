import { SafeAreaView } from '../../../src/components';
import { renderGenericComponent } from '../../utils';

describe('SafeAreaView tests', () => {
  const renderComponent = () =>
    renderGenericComponent(SafeAreaView, {
      testID: 'SafeAreaView',
    });

  it('should render a SafeAreaView', () => {
    const {
      component: { getByTestId },
    } = renderComponent();
    expect(getByTestId('SafeAreaView')).toBeDefined();
  });
});
