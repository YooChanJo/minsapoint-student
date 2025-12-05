import React, { useState } from "react";
import {
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from "react-native";
import { StackActions } from "@react-navigation/native";

import { colors, borders, typographies } from "../../components/ui-styles-provider";
import NavigationAPI from "../../api/navigation";
import AccusationAPI, { BackendAccusation } from "../../api/accusation";
import UserAPI from "../../api/user";
import { useAuth } from "../../components/auth-provider";

interface ItemType extends BackendAccusation {
  accuserName: string;
}

export default function HistoryScreen() {
  const { accessToken } = useAuth();
  const [accusations, setAccusations] = useState<ItemType[]>([]);
  const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const navigation = NavigationAPI.useNavigationWithTS();

  NavigationAPI.useCompatibleEffect(() => {
    async function init() {
      try {
        const currentUserAccusations = await AccusationAPI.getCurrentUserAccusations(accessToken);
        const updatedAccusations: ItemType[] = await Promise.all(
          currentUserAccusations.map(async (accusation) => {
            const name = await UserAPI.getUserNameFromID(accusation.accuserId, accessToken);
            return { ...accusation, accuserName: name };
          })
        );
        setAccusations(updatedAccusations);
      } catch (e) {
        console.error("Failed to fetch accusations of current user: ", e);
      }
    }
    init();
  });

  const handleAccusationItemPress = (item: ItemType) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  return (
    <View style={styles.container}>

      {/* 🔵 Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.appTitle}>MinsaPoint</Text>

        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.popTo("StudentHome"))}
        >
          <Text style={styles.textButton}>(홈)</Text>
        </TouchableOpacity>
      </View>

      {/* 🔵 Accusation List */}
      <FlatList
        style={{ marginTop: 20 }}
        data={accusations}
        keyExtractor={(item) => item._id}
        renderItem={({ item }: { item: ItemType }) => (
          <TouchableOpacity
            style={styles.itemCard}
            onPress={() => handleAccusationItemPress(item)}
          >
            <Text style={styles.itemTitle}>{item.article}</Text>
            <Text style={styles.itemSub}>date: {item.date.split("T")[0]}</Text>
            <Text style={styles.itemSub}>penalty points: {item.penaltyPoints}</Text>
            <Text style={styles.itemSub}>accuser: {item.accuserName}</Text>
          </TouchableOpacity>
        )}
      />

      {/* 🔵 Modal */}
      <Modal visible={modalVisible} transparent animationType="fade" onRequestClose={closeModal}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalBackdrop}>
            <TouchableWithoutFeedback>
              <View style={styles.modalBox}>
                <Text style={styles.modalTitle}>{selectedItem?.article}</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

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
    fontWeight: typographies.fontWeightMedium,
    color: colors.light.primary,
  },

  itemCard: {
    backgroundColor: colors.light.surface,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: borders.radiusLG,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },

  itemTitle: {
    fontSize: typographies.fontSizeLG,
    fontWeight: typographies.fontWeightBold,
    color: colors.light.text,
    marginBottom: 4,
  },

  itemSub: {
    fontSize: typographies.fontSizeSM,
    color: colors.light.textMuted,
  },

  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: "80%",
    backgroundColor: colors.light.background,
    padding: 24,
    borderRadius: borders.radiusLG,
    alignItems: "center",
  },

  modalTitle: {
    fontSize: typographies.fontSizeLG,
    fontWeight: typographies.fontWeightBold,
    color: colors.light.text,
  },
});
