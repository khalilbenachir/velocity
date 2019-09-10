import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default class Button extends Component {
  render() {
    const {opacity, full, color, style, children, ...props} = this.props;
    const buttonStyles = [
      styles.button,
      style,
      color && {backgroundColor: color},
      full && styles.full,
    ];
    return (
      <TouchableOpacity opacity={opacity} style={buttonStyles} {...props}>
        {children}
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    borderRadius: 4,
    height: 50,
    paddingVertical: 10,
  },
  full: {
    width: width - 50,
  },
});
