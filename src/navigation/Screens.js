import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Analytics from '../screens/Analytics';
import Overview from '../screens/Overview';
import Chat from '../screens/Chat';
import Service from '../screens/Service';
import Settings from '../screens/Settings';
import Map from '../screens/Map';
import Vehicules from '../screens/Vehicules';

export default createDrawerNavigator(
  {
    Analytics,
    Overview,
    Chat,
    Service,
    Settings,
    Map,
    Vehicules,
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);
