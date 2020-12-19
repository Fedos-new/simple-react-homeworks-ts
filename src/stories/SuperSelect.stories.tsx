import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react/types-6-0';
import SuperSelect from '../p2-homeworks/h7/common/c5-SuperSelect/SuperSelect';


// This default export determines where your story goes in the story list
export default {
    title: 'DefaultElements',
    component: SuperSelect,
};


const Template: Story<ComponentProps<typeof SuperSelect>> = (args) => (
    <SuperSelect {...args}/>
);

export const DefaultSuperSelect = Template.bind({});
DefaultSuperSelect.args = {
    options: ['Рик', 'Морти', 'Саммер'] /* the args you need here will depend on your component */
};