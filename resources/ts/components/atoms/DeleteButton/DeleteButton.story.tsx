/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import React from 'react';
import DeleteButton from './presentation';

storiesOf('Common/DeleteButton', module).add('default', () => <DeleteButton />);
