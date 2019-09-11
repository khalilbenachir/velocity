import React, {PureComponent} from 'react';
import {Image} from 'react-native';
import {colors} from '../constants/theme';

const menuIcon = (
  <Image
    source={require('../../assets/images/icons/menu.png')}
    style={{height: 14, width: 18}}
  />
);

const notificationIcon = (
  <Image
    source={require('../../assets/images/icons/notifications.png')}
    style={{height: 22, width: 21}}
  />
);
const messageIcon = (
  <Image
    source={require('../../assets/images/icons/message.png')}
    style={{height: 22, width: 21}}
  />
);

const vehicleIcon = (
  <Image
    source={require('../../assets/images/icons/vehicle.png')}
    style={{height: 22, width: 21}}
  />
);

const energyIcon = (
  <Image
    source={require('../../assets/images/icons/energy.png')}
    style={{height: 22, width: 21}}
  />
);

const distanceIcon = (
  <Image
    source={require('../../assets/images/icons/distance.png')}
    style={{height: 50, width: 50}}
  />
);

const optionsIcon = (
  <Image
    source={require('../../assets/images/icons/options.png')}
    style={{height: 16, width: 16}}
  />
);

export default class Icon extends PureComponent {
  render() {
    const {
      menu,
      notification,
      vehicle,
      distance,
      energy,
      options,
      children,
      message,
    } = this.props;

    if (menu) return menuIcon;
    if (notification) return notificationIcon;
    if (vehicle) return vehicleIcon;
    if (distance) return distanceIcon;
    if (options) return optionsIcon;
    if (energy) return energyIcon;
    if (message) return messageIcon;

    return children || null;
  }
}
