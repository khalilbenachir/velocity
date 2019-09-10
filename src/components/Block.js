import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class Block extends Component {
  render() {
    const {flex, center, middle, style, children, ...props} = this.props;
    const blockStyles = [
      styles.block,
      flex && {flex},
      middle && styles.middle,
      center && styles.center,
    ];
    return (
      <View style={blockStyles} {...props}>
        {children}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  middle: {
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
  },
});
