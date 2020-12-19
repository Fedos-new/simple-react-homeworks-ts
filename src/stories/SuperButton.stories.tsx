import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import  SuperButton  from '../p2-homeworks/h4/common/c2-SuperButton/SuperButton';

// This default export determines where your story goes in the story list
export default {
    title: 'DefaultElements',
    component: SuperButton,
};

const Template: Story<ComponentProps<typeof SuperButton>> = (args) => (
    <SuperButton {...args}/>
);

export const DefaultSuperButton = Template.bind({});
DefaultSuperButton.args = {
  children:'button' /* the args you need here will depend on your component */
};