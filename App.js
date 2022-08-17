import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './src/screens/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import DashboardTab from './src/routes/DashboardTab'

export default function App() {
  return (
    <NavigationContainer>
      <DashboardTab/>
    </NavigationContainer>
  );
}
