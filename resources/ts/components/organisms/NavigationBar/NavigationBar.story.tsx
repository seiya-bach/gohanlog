/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import React from 'react';
import NavigationBar from './presentation';

storiesOf('Common/NavigationBar', module).add('default', () => (
    <NavigationBar />
));
