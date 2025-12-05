/* Vendors */
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, useColorScheme, View } from "react-native";

/* Configs */
import { RootStackParamList } from "./src/config/screen-structure";

/* APIs */
import { navigationRef } from "./src/api/navigation";

/* Screens */
import { AuthProvider, useAuth } from "./src/components/auth-provider";
import { UiStylesProvider } from "./src/components/ui-styles-provider";
import { RouteProtector } from "./src/components/route-protector";

import LoginScreen from "./src/screens/login";
import HomeScreen from "./src/screens/home";
import HistoryScreen from "./src/screens/history";
import AlertsScreen from "./src/screens/alerts";
import SettingsScreen from "./src/screens/settings";

const Stack = createNativeStackNavigator<RootStackParamList>();
function RootStack() {
  const { userLoggedIn } = useAuth()
  return (
    /* Debug screens */
    <Stack.Navigator initialRouteName={userLoggedIn ? "Home" : "Login"} >
      <Stack.Screen name="Home" component={RouteProtector(HomeScreen, "STUDENT")} />
      <Stack.Screen name="History" component={RouteProtector(HistoryScreen, "STUDENT")} />
      <Stack.Screen name="Settings" component={RouteProtector(SettingsScreen, "STUDENT")} />

      <Stack.Screen name="Alerts" component={RouteProtector(AlertsScreen, "STUDENT")} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

/* Manually toggling all of light mode, but would want to use both light & dark mode */
function App() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <NavigationContainer fallback={<Text>Loading...</Text>} ref={navigationRef}>
        <AuthProvider>
          <UiStylesProvider colorScheme={colorScheme}>
            <RootStack />
          </UiStylesProvider>
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

// Need Mobile error handling

// Might need to manually override native SDK in firebase
