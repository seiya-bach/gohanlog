/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { object } from '@storybook/addon-knobs';
import FoodItem from './presentation';

storiesOf('Common/FoodItem', module).add('default', () => (
    <FoodItem
    //foodTitle={object('foodTitle', foodTitle)}
    //foodDescription={object('foodDescription', foodDescription)}
    />
));
