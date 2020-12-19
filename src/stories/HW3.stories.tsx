import React, {ComponentProps} from 'react';
import { Story } from '@storybook/react/types-6-0';
import HW3 from '../p2-homeworks/h3/HW3';


// This default export determines where your story goes in the story list
export default {
    title: 'Components',
    component: HW3,
};



const Template: Story<ComponentProps<typeof HW3>> = (args) => (
    <HW3 />
);


export const DefaultHW3 = Template.bind({});
DefaultHW3.args = {
    /* the args you need here will depend on your component */
};