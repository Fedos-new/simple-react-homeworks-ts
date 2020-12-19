import React, {ComponentProps} from 'react';
import { Story } from '@storybook/react/types-6-0';
import HW4 from '../p2-homeworks/h4/HW4';


// This default export determines where your story goes in the story list
export default {
    title: 'Components',
    component: HW4,
};



const Template: Story<ComponentProps<typeof HW4>> = (args) => (
    <HW4 />
);


export const DefaultHW4 = Template.bind({});
DefaultHW4.args = {
    /* the args you need here will depend on your component */
};