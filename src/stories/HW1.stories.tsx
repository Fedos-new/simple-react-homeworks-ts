import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react/types-6-0';
import HW1 from '../p2-homeworks/h1/HW1';


// This default export determines where your story goes in the story list
export default {
    title: 'Components',
    component: HW1,
};


const Template: Story<ComponentProps<typeof HW1>> = (args) => (
    <HW1/>
);


export const DefaultHW1 = Template.bind({});
DefaultHW1.args = {
    /* the args you need here will depend on your component */
};