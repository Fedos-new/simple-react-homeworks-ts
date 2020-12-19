import React, {ComponentProps} from 'react';
import { Story } from '@storybook/react/types-6-0';
import HW8 from '../p2-homeworks/h8/HW8';


// This default export determines where your story goes in the story list
export default {
    title: 'Components',
    component: HW8,
};



const Template: Story<ComponentProps<typeof HW8>> = (args) => (
    <HW8 />
);

export const DefaultHW8 = Template.bind({});
DefaultHW8.args = {
    /* the args you need here will depend on your component */
};