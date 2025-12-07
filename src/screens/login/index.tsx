import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
//import { useAuth } from "../../components/auth-provider";
import NavigationAPI from "../../api/navigation";
import UserAPI from "../../api/user";

// theme 가져오기
import { colors, borders, typographies } from "../../components/ui-styles-provider";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = NavigationAPI.useNavigationWithTS();

  const OnLoginButtenPress = async () => {
    if (loading) return;
    if (!email || !password) return;

    try {
      setLoading(true);
      const result = await UserAPI.signUserIn(email, password);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={{ backgroundColor: colors.light.background }}>
      <View style={styles.container}>
        <View style={styles.illustrationWrapper}>
          <View style={styles.illustrationPlaceholder} />
        </View>

        <Text style={styles.title}>Login</Text>
        <Text style={styles.subText}>Please Sign in to continue.</Text>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={OnLoginButtenPress}
          disabled={loading}
        >
          <Text style={styles.loginButtonText}>{loading ? "Loading..." : "Sign in"}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default LoginScreen;

//
// -------------------- StyleSheet --------------------
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },

  illustrationWrapper: {
    width: "100%",
    height: 180,
    alignItems: "center",
    justifyContent: "center",
  },

  // 일러스트 placeholder (이미지 넣으면 대체)
  illustrationPlaceholder: {
    width: 140,
    height: 140,
    backgroundColor: colors.light.surface,
    borderRadius: borders.radiusLG,
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },

  title: {
    fontSize: typographies.fontSizeXL,
    fontWeight: typographies.fontWeightBold,
    color: colors.light.text,
    marginTop: 10,
  },

  subText: {
    fontSize: typographies.fontSizeSM,
    color: colors.light.textMuted,
    marginBottom: 28,
  },

  inputWrapper: {
    width: "100%",
    gap: 14,
  },

  input: {
    width: "100%",
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: colors.light.surface,
    borderRadius: borders.radiusMD,
    borderWidth: 1,
    borderColor: colors.light.border,
    fontSize: typographies.fontSizeMD,
    color: colors.light.text,
  },

  loginButton: {
    width: "100%",
    paddingVertical: 16,
    backgroundColor: colors.light.primary,
    borderRadius: borders.radiusLG,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
  },

  loginButtonText: {
    color: "#fff",
    fontSize: typographies.fontSizeMD,
    fontWeight: typographies.fontWeightMedium,
  },

  bottomText: {
    marginTop: 16,
    fontSize: typographies.fontSizeSM,
    color: colors.light.textMuted,
  },

  bottomLink: {
    color: colors.light.primary,
    fontWeight: typographies.fontWeightMedium,
  },
});
