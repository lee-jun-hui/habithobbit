import React from 'react'
import Background from '../components/loginBackground'
import Logo from '../components/loginLogo'
import Header from '../components/welcomeHeader'
import Button from '../components/loginButton'
import Paragraph from '../components/welcomeParagraph'

export default function Welcome({ navigation }) {
  return (
    <Background>
      <Header>Habits Tracker</Header>
      <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Onboarding1')}
      >
        Let's go
      </Button>
    </Background>
  )
}
