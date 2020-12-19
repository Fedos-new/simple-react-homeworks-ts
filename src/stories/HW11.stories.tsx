import React, {ComponentProps} from 'react';
import { Story } from '@storybook/react/types-6-0';
import HW11 from '../p2-homeworks/h11/HW11';


// This default export determines where your story goes in the story list
export default {
    title: 'Components',
    component: HW11,
};



const Template: Story<ComponentProps<typeof HW11>> = (args) => (
    <HW11 />
);

export const DefaultHW11 = Template.bind({});
DefaultHW11.args = {
    /* the args you need here will depend on your component */
};