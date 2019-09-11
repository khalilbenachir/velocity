import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import Block from './Block';
import Text from './Text';
import Icon from './Icon';
import {colors, sizes, fonts} from '../constants/theme';

import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const {
      shadow,
      title,
      soustitle,
      border,
      style,
      energy,
      children,
      ...props
    } = this.props;
    const cardStyles = [
      styles.card,
      shadow && styles.shadow,
      border && styles.border,
      style,
    ];

    const icon = energy;
    return (
      <Block style={cardStyles} {...props}>
        <Block center style={styles.header}>
          <TouchableOpacity style={styles.iconWrapper}>
            {energy ? <Icon energy /> : <Icon message />}
          </TouchableOpacity>
          <Text center style={[fonts.h4, {margin: 10}]}>
            {title}
          </Text>
          <Text center style={[fonts.captionMedium, {margin: 10}]}>
            {soustitle}
          </Text>
        </Block>
        {children}
      </Block>
    );
  }
}

Card.propTypes = {
  shadow: PropTypes.bool,
  border: PropTypes.bool,
  title: PropTypes.string,
  soustitle: PropTypes.string,
};
const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 25,
    backgroundColor: colors.white,
    overflow: 'hidden',
  },
  header: {
    paddingBottom: 10,
  },
  border: {
    borderColor: colors.card,
    borderWidth: 1,
  },
  shadow: {
    shadowColor: colors.shadow,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 0},
    elevation: 2,
  },
  iconWrapper: {
    backgroundColor: colors.card,
    padding: 10,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
