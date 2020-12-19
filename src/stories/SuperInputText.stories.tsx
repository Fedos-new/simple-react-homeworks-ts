import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import  SuperInputText  from '../p2-homeworks/h4/common/c1-SuperInputText/SuperInputText';

// This default export determines where your story goes in the story list
export default {
    title: 'DefaultElements',
    component: SuperInputText,
};

const Template: Story<ComponentProps<typeof SuperInputText>> = (args) => (
    <SuperInputText {...args}/>
);

export const DefaultSuperInputText = Template.bind({});
DefaultSuperInputText.args = {
    /* the args you need here will depend on your component */
};