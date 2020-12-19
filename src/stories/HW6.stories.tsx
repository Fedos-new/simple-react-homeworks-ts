import React, {ComponentProps} from 'react';
import { Story } from '@storybook/react/types-6-0';
import HW6 from '../p2-homeworks/h6/HW6';


// This default export determines where your story goes in the story list
export default {
    title: 'Components',
    component: HW6,
};



const Template: Story<ComponentProps<typeof HW6>> = (args) => (
    <HW6 />
);


export const DefaultHW6 = Template.bind({});
DefaultHW6.args = {
    /* the args you need here will depend on your component */
};