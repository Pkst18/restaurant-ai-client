import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RestaurantScreen from './src/screens/RestaurantScreen'
import ChatScreen from './src/screens/ChatScreen'
import HomeScreen from './src/screens/HomeScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
  <Stack.Screen
    name="Home"
    component={HomeScreen}
    options={{ headerShown: false }}
  />
  <Stack.Screen
    name="Restaurant"
    component={RestaurantScreen}
    options={{ headerShown: false }}
  />
  <Stack.Screen
    name="Chat"
    component={ChatScreen}
    options={{ headerShown: false }}
  />
</Stack.Navigator>
    </NavigationContainer>
  )
}