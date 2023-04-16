import './Pricing';

export default {
  title: 'Pricing',
  component: 'dc-pricing',
  tags: ['autodocs'],
  argTypes: {
    prices: {
      control: 'text',
    }
  }
};

export const Default = {
  args: {
    prices: [
      { header: 'Price 1', price: 100, description: 'Description 1', features: ['Feature 1', 'Feature 2'] },
      { header: 'Price 2', price: 200, description: 'Description 2', features: ['Feature 1', 'Feature 2'] },
      { header: 'Price 3', price: 300, description: 'Description 3', features: ['Feature 1', 'Feature 2'] }
    ]
  },
};
