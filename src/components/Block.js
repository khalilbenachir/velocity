import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class Block extends Component {
  render() {
    const {
      flex,
      row,
      column,
      center,
      middle,
      style,
      space,
      children,
      ...props
    } = this.props;
    const blockStyles = [
      styles.block,
      flex && {flex},
      space && {justifyContent: 'space-' + space},
      row && styles.row,
      column && styles.column,
      middle && styles.middle,
      center && styles.center,
      style,
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
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  middle: {
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
  },
});
