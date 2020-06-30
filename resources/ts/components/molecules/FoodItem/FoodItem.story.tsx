/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { text } from '@storybook/addon-knobs';
import FoodItem from './presentation';

storiesOf('Common/FoodItem', module).add('default', () => (
    <FoodItem
        title={text('title', 'ご飯')}
        description={text('description', '焼肉')}
    />
));
