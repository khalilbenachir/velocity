import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

export default class Typography extends Component {
  render() {
    const {
      color,
      height,
      weight,
      spacing,
      size,
      center,
      style,
      children,
      ...props
    } = this.props;
    const textStyles = [
      styles.text,
      center && styles.center,
      color && {color},
      size && {fontSize: size},
      height && {lineHeight: height},
      weight && {fontWeight: weight},
      spacing && {letterSpacing: spacing},
      style,
    ];
    return (
      <Text style={textStyles} {...props}>
        {children}
      </Text>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  },

  center: {
    textAlign: 'center',
  },
});
