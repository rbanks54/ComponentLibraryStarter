import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextBox } from '../components/TextBox';

const meta: Meta = {
  title: 'Components/TextBox',
  component: TextBox,
};

export default meta;

const Template: Story<any> = (args) => <TextBox {...args}></TextBox>;

export const Standard = Template.bind({});
Standard.args = {
  label: 'Username'
}

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  password: true,
}