import './Icon.stories.scss';

export default {
  title: 'Icon',
  component: 'dc-icon',
  tags: ['autodocs'],
  argTypes: {
    data: {control: 'text'}
  }
};

export const Default = {
  args: {
    data: 'https://raw.githubusercontent.com/ionic-team/ionicons/master/src/assets/logo-ionicons.svg'
  },
};
