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
      cadre,
      energy,
      children,
      ...props
    } = this.props;
    const cardStyles = [
      styles.card,
      shadow && styles.shadow,
      border ? styles.border : styles.cadre,
      style,
    ];

    return (
      <Block style={cardStyles} {...props}>
        <Block center middle style={styles.header}>
          {cadre && (
            <Block center middle style={[styles.badge, {padding: 2}]}>
              <Icon check />
            </Block>
          )}
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
    backgroundColor: colors.white,
    position: 'relative',
    marginHorizontal: 15,
  },
  header: {
    paddingBottom: 1,
  },
  border: {
    borderColor: colors.card,
    borderWidth: 1,
    borderRadius: 4,
  },
  cadre: {
    borderColor: colors.lightblue,
    borderWidth: 1,
    borderRadius: 4,
  },
  badge: {
    position: 'absolute',
    top: -12,
    right: -12,
    backgroundColor: colors.blue,
    height: 25,
    width: 25,
    borderRadius: 25,
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
    marginTop: 10,
  },
});
