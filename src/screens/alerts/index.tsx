import React from "react";
import { ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { StackActions } from "@react-navigation/native";

import { colors, borders, typographies } from "../../components/ui-styles-provider";
import NavigationAPI from "../../api/navigation";

const warnings = [
  { id: 1, teacher: "홍길동", reason: "Didn't follow teacher's direction", score: 3 },
  { id: 2, teacher: "이순신", reason: "Didn't follow teacher's direction", score: 3 },
  { id: 3, teacher: "정약용", reason: "Didn't follow teacher's direction", score: 3 },
];

export default function AlertsScreen() {
  const navigation = NavigationAPI.useNavigationWithTS();
  return (
    <View style={styles.container}>

      <TouchableOpacity
        onPress={() => navigation.dispatch(StackActions.popTo("Home"))}
        style={styles.topBar}
      >
        <Text style={styles.appTitle}>MinsaPoint</Text>
      </TouchableOpacity>

      <View style={styles.clearContainer}>
        <TouchableOpacity style={styles.clearButton}>
          <Text style={styles.iconText}>(아이콘)</Text>
          <Text style={styles.clearText}>Clear All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1, marginTop: 25 }}>
        {warnings.map((item) => (
          <View key={item.id} style={styles.alertCard}>
            <View style={styles.cardHeader}>
              <View style={styles.headerLeft}>
                <Text style={styles.iconText}>(아이콘)</Text>
                <Text style={styles.headerTitle}>새로운 기소사항</Text>
              </View>

              <TouchableOpacity>
                <Text style={styles.iconText}>(아이콘)</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.alertBody}>
              {item.teacher} 선생님 - {item.reason} ({item.score}점)
            </Text>
          </View>
        ))}
      </ScrollView>

    </View>
  );
}

//
// -------------------- Styles --------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.background,
    paddingHorizontal: 24,
    paddingVertical: 40,
  },

  topBar: {
    width: "100%",
    paddingBottom: 10,
  },

  appTitle: {
    fontSize: typographies.fontSizeXL,
    fontWeight: typographies.fontWeightBold,
    color: colors.light.text,
  },

  clearContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginVertical: 8,
  },

  clearButton: {
    flexDirection: "row",
    alignItems: "center",
  },

  clearText: {
    marginLeft: 4,
    color: colors.light.textMuted,
    fontSize: typographies.fontSizeSM,
  },

  iconText: {
    fontSize: typographies.fontSizeMD,
    color: colors.light.textMuted,
  },

  alertCard: {
    backgroundColor: colors.light.surface,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: borders.radiusLG,
    borderWidth: 1,
    borderColor: colors.light.border,
    marginBottom: 12,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerTitle: {
    marginLeft: 6,
    fontSize: typographies.fontSizeMD,
    fontWeight: typographies.fontWeightBold,
    color: colors.light.text,
  },

  alertBody: {
    marginTop: 12,
    marginBottom: 16,
    fontSize: typographies.fontSizeSM,
    color: colors.light.text,
    lineHeight: 20,
  },
});
