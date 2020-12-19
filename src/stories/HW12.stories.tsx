import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react/types-6-0';
import HW12 from '../p2-homeworks/h12/HW12';
import {Provider} from 'react-redux';
import store from '../p2-homeworks/h10/bll/store';


// This default export determines where your story goes in the story list
export default {
    title: 'Components',
    component: HW12,
};


const Template: Story<ComponentProps<typeof HW12>> = (args) => (
    <Provider store={store}>
        <HW12/>
    </Provider>

);

export const DefaultHW12 = Template.bind({});
DefaultHW12.args = {
    /* the args you need here will depend on your component */
};