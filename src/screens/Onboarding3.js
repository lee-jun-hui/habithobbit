import React from 'react'
import Background from '../components/loginBackground'
import Logo from '../components/loginLogo'
import Header from '../components/loginHeader'
import Button from '../components/loginButton'
import Paragraph from '../components/loginParagraph'
import { Image, StyleSheet } from 'react-native'

export default function Onboarding3({ navigation }) {
  return (
    <Background>
      <Image source={require('../assets/loginonboard3.png')} style={styles.image} resizeMode='contain'
      />
      <Header>Track Progress</Header>
      <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Register')}
      >
        Get Started!
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({
  image: {
        width: 300,
    height: 300,
    marginBottom: 8,
  },
})