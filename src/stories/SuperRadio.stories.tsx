import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react/types-6-0';
import SuperRadio from '../p2-homeworks/h7/common/c6-SuperRadio/SuperRadio';


// This default export determines where your story goes in the story list
export default {
    title: 'DefaultElements',
    component: SuperRadio,
};


const Template: Story<ComponentProps<typeof SuperRadio>> = (args) => (
    <SuperRadio {...args}/>
);

export const DefaultSuperRadio = Template.bind({});
DefaultSuperRadio.args = {
    options: ['Рик', 'Морти', 'Саммер'] /* the args you need here will depend on your component */
};