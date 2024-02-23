import './Pagination';
import { html } from 'lit';

export default {
  title: 'Pagination',
  component: 'fui-pagination',
  tags: ['autodocs'],
  argTypes: {
    count: {},
    pageSize: {},
    currentPage: {}
  }
};

export const Default = {
  args: {
    count: 50,
    pageSize: 10,
    currentPage: 5
  },
};
