import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { colors, borders, typographies } from "../../components/ui-styles-provider";
import { useAuth } from "../../components/auth-provider";
import NavigationAPI from "../../api/navigation";
import UserAPI from "../../api/user";

export default function HomeScreen() {
  const { accessToken } = useAuth();

  const [penaltyPoints, setPenaltyPoints] = useState<number | undefined>(undefined);
  const [rewardPoints, setRewardPoints] = useState<number | undefined>(undefined);
  const [hasCourt, setHasCourt] = useState<boolean | undefined>(undefined);

  const navigation = NavigationAPI.useNavigationWithTS();

  NavigationAPI.useCompatibleEffect(() => {
    async function init() {
      try {
        const currentUserInfo = await UserAPI.getCurrentUserInfo(accessToken);
        setPenaltyPoints(currentUserInfo.penaltyPoints);
        setRewardPoints(currentUserInfo.rewardPoints);
        setHasCourt(currentUserInfo.hasCourt);
      } catch (e) {
        console.error("Failed to fetch current user info: ", e);
      }
    }
    init();
  });

  const totalScore =
    penaltyPoints !== undefined && rewardPoints !== undefined
      ? penaltyPoints - rewardPoints
      : "";

  return (
    <View style={styles.container}>
      {/* 🔵 Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.appTitle}>MinsaPoint</Text>

        {/* 설정 버튼 */}
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.textButton}>(설정)</Text>
        </TouchableOpacity>
      </View>

      {/* 🔵 Notification */}
      <TouchableOpacity
        style={styles.notificationWrapper}
        onPress={() => navigation.navigate("Alerts")}
      >
        <Text style={styles.textButton}>(알림)</Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>3</Text>
        </View>
      </TouchableOpacity>

      {/* 🔵 Score Section */}
      <View style={styles.scoreSection}>
        <Text style={styles.grayLabel}>누계</Text>

        <Text style={styles.bigScore}>{totalScore}</Text>

        <View style={styles.subScores}>
          <View style={styles.scoreItem}>
            <Text style={styles.label}>벌점</Text>
            <Text style={styles.value}>{penaltyPoints}</Text>
          </View>
          <View style={styles.scoreItem}>
            <Text style={styles.label}>상점</Text>
            <Text style={styles.value}>{rewardPoints}</Text>
          </View>
        </View>

        {/* History 버튼 */}
        <TouchableOpacity
          style={styles.historyButton}
          onPress={() => navigation.navigate("History")}
        >
          <Text style={styles.historyText}>History</Text>
        </TouchableOpacity>
      </View>

      {/* 🔵 Info Box */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          {hasCourt ? "이번주 법정 대상자입니다" : "이번주 법정 대상자가 아닙니다"}
        </Text>
      </View>
    </View>
  );
}

//
// -------------------- Styles --------------------
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.background,
    paddingVertical: 40,
    paddingHorizontal: 24,
  },

  topBar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  appTitle: {
    fontSize: typographies.fontSizeXL,
    fontWeight: typographies.fontWeightBold,
    color: colors.light.text,
  },

  textButton: {
    fontSize: typographies.fontSizeMD,
    color: colors.light.text,
    fontWeight: typographies.fontWeightMedium,
  },

  /* Notification */
  notificationWrapper: {
    position: "absolute",
    top: 60,
    left: 10,
  },

  badge: {
    position: "absolute",
    top: -6,
    right: -10,
    backgroundColor: colors.light.primary,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },

  /* Score Section */
  scoreSection: {
    marginTop: 80,
    alignItems: "center",
  },

  grayLabel: {
    fontSize: typographies.fontSizeSM,
    color: colors.light.textMuted,
    marginBottom: 6,
  },

  bigScore: {
    fontSize: 100,
    fontWeight: typographies.fontWeightBold,
    color: colors.light.text,
    marginBottom: 12,
  },

  subScores: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 22,
  },

  scoreItem: {
    alignItems: "center",
  },

  label: {
    fontSize: typographies.fontSizeSM,
    color: colors.light.textMuted,
  },

  value: {
    fontSize: typographies.fontSizeLG,
    fontWeight: typographies.fontWeightBold,
    color: colors.light.text,
  },

  historyButton: {
    backgroundColor: colors.light.text,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: borders.radiusLG,
  },

  historyText: {
    fontSize: typographies.fontSizeMD,
    fontWeight: typographies.fontWeightMedium,
    color: "#fff",
  },

  /* Info Box */
  infoBox: {
    marginTop: 40,
    backgroundColor: colors.light.surface,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: borders.radiusLG,
  },

  infoText: {
    fontSize: typographies.fontSizeMD,
    color: colors.light.text,
    textAlign: "center",
  },
});
