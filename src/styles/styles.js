import { StyleSheet, Dimensions } from "react-native";
import { DefaultTheme } from 'react-native-paper'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#FFFFFF',
    primary: '#4E53BA',
    secondary: '#110580',
    tertiary: '#E8E8F7',
    subtext: '#868AE0',
    error: '#f13a59',
  },
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  welcomebg: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    width: windowWidth,
    height: windowHeight,
  },
  welcomecontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
    maxWidth: 340,
    marginTop: '110%'
  },
  welcomeheader: {
    fontSize: 32,
    color: theme.colors.text,
    fontFamily: 'roboto-bold',
    paddingVertical: 12,
  },
  welcometext: {
    fontSize: 12,
    lineHeight: 16,
    color: theme.colors.text,
    textAlign: 'center',
    fontFamily: 'roboto-light',
    marginBottom: '50%'
  },
  button: {
    width: 160,
    paddingVertical: 3,
    borderRadius: 50,
    backgroundColor: theme.colors.primary,
  },
  buttontext: {
    fontFamily: 'roboto-regular',
    fontSize: 16,
    lineHeight: 16,
  },
  onboardcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: windowWidth,
    paddingBottom: '15%',
    height: windowHeight,
    backgroundColor: theme.colors.text
  },
  onboard1: {
    flex: 1,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30%',
  },
  openingheader: {
    fontSize: 32,
    color: theme.colors.secondary,
    fontFamily: 'roboto-bold',
    paddingVertical: 12,
  },
  openingtext: {
    fontSize: 12,
    lineHeight: 16,
    color: theme.colors.subtext,
    textAlign: 'center',
    fontFamily: 'roboto-light',
    marginBottom: '20%',
    paddingHorizontal: 45,
  },
  onboard2: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30%',
  },
  onboard3: {
    flex: 1,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30%',
  },
  roundcontainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '20%'
  },
  darkround: {
    backgroundColor: theme.colors.primary,
    width: 8,
    height: 8,
    borderRadius: 50,
    marginRight: 9
  },  
  lightround: {
    backgroundColor: theme.colors.tertiary,
    width: 8,
    height: 8,
    borderRadius: 50,
    marginRight: 9
  },  
  registercontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: windowWidth,
    paddingTop: '5%',
    paddingBottom: '10%',
    height: windowHeight,
    backgroundColor: theme.colors.text,
  },
  registerrow: {
    flexDirection: 'row',
    paddingTop: '5%'
  },
  link: {
    fontFamily: 'roboto-bold',
    color: theme.colors.primary,
  },
  register: {
    flex: 1,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '70%',
  },
  registertext: {
    fontFamily: 'roboto-regular',
    color: theme.colors.subtext,
  },
  logincontainer: {
    width: '80%',
    height: 50,
    marginVertical: 12,
  },
  reginputcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth,
    paddingBottom: '30%',
    height: windowHeight,
  },
  logininput: {
    backgroundColor: '#FFFFFF',
  },
  logindescription: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  },
  loginerror: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
  backbtncontainer: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    left: 4,
  },
  backbtn: {
    width: 35,
    height: 35,
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  login: {
    flex: 1,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '75%',
  },
  logininputcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth,
    paddingBottom: '45%',
    height: windowHeight,
  },
});
