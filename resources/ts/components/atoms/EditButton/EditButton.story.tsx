/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import React from 'react';
import EditButton from './presentation';

storiesOf('Common/EditButton', module).add('default', () => <EditButton />);
