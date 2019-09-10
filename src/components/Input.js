import React, {Component} from 'react';
import {TextInput, View, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

import Text from './Text';

export default class Input extends Component {
  render() {
    const {
      style,
      full,
      phone,
      email,
      number,
      password,
      label,
      ...props
    } = this.props;
    const InputStyles = [styles.input, full && styles.full, style];

    const inputType = email
      ? 'email-address'
      : number
      ? 'numeric'
      : phone
      ? 'phone-pad'
      : 'default';
    return (
      <View>
        <View style={styles.password}>
          <Text
            spacing={1.12}
            size={12}
            color="#b0bac9"
            height={14}
            weight={'500'}
            style={styles.label}>
            {label}
          </Text>
          {password && (
            <Text
              spacing={1.12}
              size={12}
              color="#b0bac9"
              height={14}
              weight={'500'}
              style={styles.label}>
              Show password
            </Text>
          )}
        </View>
        <TextInput
          keyboardType={inputType}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={password}
          style={InputStyles}
          {...props}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(224, 231, 255, 0.2)',
    borderColor: '#e0e7ff',
    borderRadius: 5,
    borderWidth: 1,
    color: '#2e3840',
    fontSize: 15,
    height: 40,
    paddingVertical: 11,
    paddingHorizontal: 16,
  },
  label: {
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  full: {
    width: width - 50,
  },
  password: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
