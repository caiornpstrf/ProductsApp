import { Text, TextProps } from '../../../src/components';
import { renderGenericComponent } from '../../utils';

describe('Text tests', () => {
  const renderComponent = (props?: Partial<TextProps>) =>
    renderGenericComponent(
      Text,
      {
        testID: 'text',
      },
      props,
    );

  it('should render a Text with default props', () => {
    const {
      component: { getByTestId },
    } = renderComponent();
    expect(getByTestId('text').props.color).toBe('text-dark');
  });

  it('should render a Text with custom props', () => {
    const {
      component: { getByTestId },
    } = renderComponent({
      color: 'text-light',
    });

    expect(getByTestId('text').props.color).toBe('text-light');
  });
});
