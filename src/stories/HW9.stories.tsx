import React, {ComponentProps} from 'react';
import { Story } from '@storybook/react/types-6-0';
import HW9 from '../p2-homeworks/h9/HW9';


// This default export determines where your story goes in the story list
export default {
    title: 'Components',
    component: HW9,
};



const Template: Story<ComponentProps<typeof HW9>> = (args) => (
    <HW9 />
);

export const DefaultHW9 = Template.bind({});
DefaultHW9.args = {
    /* the args you need here will depend on your component */
};