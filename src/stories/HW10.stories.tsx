import React, {ComponentProps} from 'react';
import { Story } from '@storybook/react/types-6-0';
import HW10 from '../p2-homeworks/h10/HW10';
import {Provider} from 'react-redux';
import store from '../p2-homeworks/h10/bll/store';



// This default export determines where your story goes in the story list
export default {
    title: 'Components',
    component: HW10,
};



const Template: Story<ComponentProps<typeof HW10>> = (args) => (
   <Provider store={store}>
       <HW10 />
   </Provider>

);

export const DefaultHW10 = Template.bind({});
DefaultHW10.args = {
    /* the args you need here will depend on your component */
};