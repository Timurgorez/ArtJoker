import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from '../header';


storiesOf('ArtJoker', module).add('first', () => <MuiThemeProvider><Header /></MuiThemeProvider> );
