import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import {Block, Text, Input, Card, Button} from '../components';
import {colors, fonts, sizes} from '../constants/theme';

const {height} = Dimensions.get('window');

export default class Register extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="height"
          keyboardVerticalOffset={height * 0.3199}
          contentContainerStyle={styles.container}
          enabled>
          <Block center middle>
            <Image
              style={styles.logo}
              source={require('../../assets/images/Base/Logo.png')}
            />
          </Block>
          <Block flex={2.5} center>
            <Text
              center
              spacing={0}
              color={colors.black}
              height={32}
              weight={'300'}
              style={[{marginBottom: 6}, fonts.h3]}
              size={sizes.h3}>
              Get started for free
            </Text>
            <Text style={fonts.caption}>
              Free forever.No credit card needed.
            </Text>
            <Block style={{marginTop: 16}} row center>
              <Card
                energy
                shadow={true}
                border={false}
                soustitle="full access to all settings."
                title="Administrator"
              />

              <Card
                shadow={true}
                border={true}
                title=" Operator"
                soustitle="service desck and chat permissions."
              />
            </Block>
            <Block center style={{marginTop: 40}}>
              <Input
                full
                style={[{marginBottom: 20}, fonts.paragraph]}
                email
                label="full name"
              />
              <Input
                full
                style={[{marginBottom: 20}, fonts.paragraph]}
                email
                label="email address"
              />
              <Input
                full
                style={{marginBottom: 26}}
                password
                label="Password"
                navigation={navigation}
              />
              <Button
                onPress={() => navigation.navigate('Overview')}
                style={{marginBottom: 13}}
                full
                color={colors.blue}>
                <Text center style={fonts.button}>
                  create your account
                </Text>
              </Button>
              <Text style={fonts.caption}>
                Already have an account?{' '}
                <Text
                  onPress={() => navigation.navigate('Login')}
                  height={18}
                  color={colors.lightblue}>
                  Sign in
                </Text>
              </Text>
            </Block>
          </Block>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flex: 1,
  },
  logo: {
    height: 28,
    width: 102,
  },
});
