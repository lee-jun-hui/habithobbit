import React from 'react'
import Background from '../components/loginBackground'
import Logo from '../components/loginLogo'
import Header from '../components/loginHeader'
import Button from '../components/loginButton'
import Paragraph from '../components/loginParagraph'

export default function Onboarding1({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Onboarding1</Header>
      <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
