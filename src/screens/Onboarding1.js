import React from 'react'
import Background from '../components/loginBackground'
import Logo from '../components/loginLogo'
import Header from '../components/loginHeader'
import Button from '../components/loginButton'
import Paragraph from '../components/loginParagraph'
import { Image, StyleSheet } from 'react-native'

export default function Onboarding1({ navigation }) {
  return (
    <Background>
      <Image source={require('../assets/loginonboard1.png')} style={styles.image} resizeMode='contain'
      />
      <Header>Create Habits</Header>
      <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Onboarding2')}
      >
        Next
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