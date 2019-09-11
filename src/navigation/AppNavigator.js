import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Screens from './Screens';
import Auth from './Auth';

export default createAppContainer(
  createSwitchNavigator({
    Auth,
    Screens,
  }),
);
