import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

// Screens
import HomeScreen from './screens/HomeScreen';
import ClientSignupScreen from './screens/ClientSignupScreen';
import ProviderSignupScreen from './screens/ProviderSignupScreen';
import ServiceListScreen from './screens/ServiceListScreen';
import ProviderProfileScreen from './screens/ProviderProfileScreen';
import ChatScreen from './screens/ChatScreen';

const Stack = createStackNavigator();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'La Toile' }}
          />
          <Stack.Screen 
            name="ClientSignup" 
            component={ClientSignupScreen} 
            options={{ title: 'Inscription Client' }}
          />
          <Stack.Screen 
            name="ProviderSignup" 
            component={ProviderSignupScreen} 
            options={{ title: 'Devenir Prestataire' }}
          />
          <Stack.Screen 
            name="Services" 
            component={ServiceListScreen} 
            options={{ title: 'Services' }}
          />
          <Stack.Screen 
            name="ProviderProfile" 
            component={ProviderProfileScreen} 
            options={{ title: 'Profile Prestataire' }}
          />
          <Stack.Screen 
            name="Chat" 
            component={ChatScreen} 
            options={{ title: 'Discussion' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;