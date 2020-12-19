import React, {ComponentProps} from 'react';
import { Story } from '@storybook/react/types-6-0';
import HW2 from '../p2-homeworks/h2/HW2';


// This default export determines where your story goes in the story list
export default {
    title: 'Components',
    component: HW2,
};



const Template: Story<ComponentProps<typeof HW2>> = (args) => (
    <HW2 />
);


export const DefaultHW2 = Template.bind({});
DefaultHW2.args = {
    /* the args you need here will depend on your component */
};