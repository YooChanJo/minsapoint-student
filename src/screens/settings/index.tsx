import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { StackActions } from "@react-navigation/native";
import NavigationAPI from "../../api/navigation";
import { colors, borders, typographies } from "../../components/ui-styles-provider";

export default function SettingsScreen() {
  const navigation = NavigationAPI.useNavigationWithTS();

  const handleLogout = () => {
    //alert("로그아웃 버튼이 눌렸습니다.");
    // 실제 로그아웃 처리(ex: 토큰 삭제, 로그인 화면 이동 등)를 여기서 수행
  };

  return (
    <View style={styles.container}>
      {/* 🔵 정보 박스 */}
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>이름</Text>
        <Text style={styles.infoText}>왕두균 선생님</Text>

        <Text style={styles.infoTitle}>이메일</Text>
        <Text style={styles.infoText}>wang@example.com</Text>

        <Text style={styles.infoTitle}>전화번호</Text>
        <Text style={styles.infoText}>010-1234-5678</Text>
      </View>

      {/* 🔵 로그아웃 버튼 */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>로그아웃</Text>
      </TouchableOpacity>

      {/* 🔵 홈 화면 돌아가기 버튼 */}
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.dispatch(StackActions.popTo("StudentHome"))}
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
