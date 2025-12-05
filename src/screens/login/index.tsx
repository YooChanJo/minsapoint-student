import { useRef, useState } from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";
import { useAuth } from "../../components/auth-provider";
import NavigationAPI from "../../api/navigation";
import UserAPI from "../../api/user";
import { CommonActions } from "@react-navigation/native";

function LoginScreen() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const { userLoggedIn, accessToken } = useAuth();
  const navigation = NavigationAPI.useNavigationWithTS();

  const OnLoginButtenPress = async () => {
    if(loading) return;
    if(email === "" || password === "") return;
    
    try {
      setLoading(true);

      const result = await UserAPI.signUserIn(email, password);
      if(!!result) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "Home" }],
          })
        );
      }
    } catch (e) {
      e;
    } finally {
      setLoading(false);
    }
  };

  // Wanna definately add a loading screen
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Login screen</Text>
        <View style={{ borderWidth: 1, padding: 20, margin: 10, gap: 10 }}>
          <TextInput
            style={{ borderWidth: 1, padding: 5 }}
            autoCapitalize="none"
            onChangeText={setEmail}
            value={email}
            placeholder="Enter Email"
          />
          <TextInput
            style={{ borderWidth: 1, padding: 5 }}
            onChangeText={setPassword}
            autoCapitalize="none"
            value={password}
            placeholder="Enter Password"
            secureTextEntry={true}
          />
          <Button onPress={OnLoginButtenPress} title={loading ? "Loading..." : "Login Button"} disabled={loading} />
        </View>
      </View>
    </ScrollView>
  );
}

export default LoginScreen;
