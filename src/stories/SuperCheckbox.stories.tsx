import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import  SuperCheckbox  from '../p2-homeworks/h4/common/c3-SuperCheckbox/SuperCheckbox';

// This default export determines where your story goes in the story list
export default {
    title: 'DefaultElements',
    component: SuperCheckbox,
};

const Template: Story<ComponentProps<typeof SuperCheckbox>> = (args) => (
    <SuperCheckbox {...args}/>
);

export const DefaultSuperCheckbox = Template.bind({});
DefaultSuperCheckbox.args = {
    children: 'select'/* the args you need here will depend on your component */
};