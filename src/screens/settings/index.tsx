import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { StackActions } from "@react-navigation/native";
import NavigationAPI from "../../api/navigation";
import { colors, borders, typographies } from "../../components/ui-styles-provider";
import { useAuth } from "../../components/auth-provider";
import UserAPI from "../../api/user";

export default function SettingsScreen() {
  const navigation = NavigationAPI.useNavigationWithTS();
  const [name, setName] = useState<string>("");
  const { currentUser, accessToken } = useAuth();

  NavigationAPI.useCompatibleEffect(() => {
    async function init() {
      try {
        const userinfo = await UserAPI.getCurrentUserInfo(accessToken);
        setName(userinfo.name);
      } catch (e) {
        console.error(e);
      }
    }
    init();
  });

  const handleLogout = async () => {
    try {
      await UserAPI.signUserOut();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>이름</Text>
        <Text style={styles.infoText}>{name}</Text>

        <Text style={styles.infoTitle}>이메일</Text>
        <Text style={styles.infoText}>{!!currentUser ? currentUser.email : null}</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>로그아웃</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.dispatch(StackActions.popTo("Home"))}
      >
        <Text style={styles.homeButtonText}>홈화면 돌아가기</Text>
      </TouchableOpacity>
    </View>
  );
}

//
// -------------------- Styles --------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.background,
    paddingVertical: 40,
    paddingHorizontal: 24,
    fontFamily: typographies.fontSans,
  },

  infoBox: {
    backgroundColor: colors.light.surface,
    padding: 20,
    borderRadius: borders.radiusLG,
    marginBottom: 20,
  },

  infoTitle: {
    fontSize: typographies.fontSizeSM,
    fontWeight: typographies.fontWeightBold,
    color: colors.light.textMuted,
    marginTop: 12,
  },

  infoText: {
    fontSize: typographies.fontSizeMD,
    color: colors.light.text,
    marginTop: 4,
  },

  logoutButton: {
    backgroundColor: colors.light.primary,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: borders.radiusLG,
    alignItems: "center",
    marginBottom: 12,
  },

  logoutButtonText: {
    color: "#fff",
    fontSize: typographies.fontSizeMD,
    fontWeight: typographies.fontWeightMedium,
  },

  homeButton: {
    backgroundColor: colors.light.text,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: borders.radiusLG,
    alignItems: "center",
  },

  homeButtonText: {
    color: "#fff",
    fontSize: typographies.fontSizeMD,
    fontWeight: typographies.fontWeightMedium,
  },
});
