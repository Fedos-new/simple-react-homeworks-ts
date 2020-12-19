import React, {ComponentProps} from 'react';
import { Story } from '@storybook/react/types-6-0';
import HW7 from '../p2-homeworks/h7/HW7';


// This default export determines where your story goes in the story list
export default {
    title: 'Components',
    component: HW7,
};



const Template: Story<ComponentProps<typeof HW7>> = (args) => (
    <HW7 />
);

export const DefaultHW7 = Template.bind({});
DefaultHW7.args = {
    /* the args you need here will depend on your component */
};