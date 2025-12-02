// import React, { useState } from "react";
// import {
//   FlatList,
//   Modal,
//   Text,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   View,
// } from "react-native";
// import { StackActions } from "@react-navigation/native";

// import { useUiStyles } from "@/src/components/ui-styles-provider";
// import LinkWrapper from "@/src/components/link-wrapper";
// import NavigationAPI from "@/src/api/navigation";
// import AccusationAPI, { BackendAccusation } from "@/src/api/accusation";
// import { useAuth } from "@/src/components/auth-provider";
// import UserAPI from "@/src/api/user";

// const sampleData = [
//   {
//     id: "1",
//     title: "Abasent from morning exercise",
//     content: "정창윤 외 10명",
//   },
//   { id: "2", title: "Outdoor Regulation", content: "28조유찬, 28정창윤" },
//   { id: "2", title: "Outdoor Regulation", content: "28조유찬, 28정창윤" },
//   { id: "2", title: "Outdoor Regulation", content: "28조유찬, 28정창윤" },
//   { id: "2", title: "Outdoor Regulation", content: "28조유찬, 28정창윤" },
//   {
//     id: "3",
//     title: "List item",
//     content: "Supporting line text lorem ipsum dolor sit amet",
//   },
// ];

// interface ItemType extends BackendAccusation {
//   accuserName: string;
// }

// export default function HistoryScreen() {
//   const { commonStyles } = useUiStyles();
//   const { accessToken } = useAuth();
//   const [accusations, setAccusations] = useState<ItemType[]>([]);
//   const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);
//   const [modalVisible, setModalVisible] = useState<boolean>(false);

//   NavigationAPI.useCompatibleEffect(() => {
//     async function init() {
//       try {
//         const currentUserAccusations = await AccusationAPI.getCurrentUserAccusations(accessToken);
//         console.log(currentUserAccusations);
//         /* This is supposed to  consume a lot of RAM and time --> perhaps optimize this with id extraction with hash tables */
//         const updatedAccusations: ItemType[] = await Promise.all(
//           currentUserAccusations.map(async accusation => {
//             const name = await UserAPI.getUserNameFromID(accusation.accuserId, accessToken);
//             return { ...accusation, accuserName: name };
//           })
//         );
//         setAccusations(updatedAccusations);
//       } catch (e) {
//         console.error("Failed to fetch accusations of current user: ", e);
//       }
//     }
//     init();
//   });

//   const handleAccusationItemPress = (item: ItemType) => {
//     setSelectedItem(item);
//     setModalVisible(true);
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//     setSelectedItem(null);
//   };

//   return (
//     <View style={commonStyles.container}>
//       <LinkWrapper
//         screen="StudentHome"
//         action={StackActions.popTo("StudentHome")}
//         style={commonStyles.topBar}
//         touchableOpacity={true}
//       >
//         <Text style={commonStyles.appTitle}>MinsaPoint</Text>
//       </LinkWrapper>
//       <FlatList
//         style={{ marginTop: 20 }}
//         data={accusations}
//         keyExtractor={item => item._id}
//         renderItem={({ item }: { item: ItemType }) => (
//           <TouchableOpacity
//             style={commonStyles.itemCard}
//             onPress={() => handleAccusationItemPress(item)}
//           >
//             <Text style={commonStyles.itemTitle}>{item.article}</Text>
//             <Text style={commonStyles.itemSub}>date: {item.date.split("T")[0]}</Text>
//             <Text style={commonStyles.itemSub}>penalty points: {item.penaltyPoints}</Text>
//             <Text style={commonStyles.itemSub}>accuser: {item.accuserName}</Text>
//           </TouchableOpacity>
//         )}
//       />

//       {/* Modal */}
//       <Modal visible={modalVisible} transparent animationType="fade" onRequestClose={closeModal}>
//         <TouchableWithoutFeedback onPress={closeModal}>
//           <View style={commonStyles.modalBackdrop}>
//             <TouchableWithoutFeedback>
//               <View style={commonStyles.modalBox}>
//                 <Text style={commonStyles.modalTitle}>{selectedItem?.article}</Text>
//                 {/* <Text style={commonStyles.modalContent}>{selectedItem?.content || ""}</Text> */}
//               </View>
//             </TouchableWithoutFeedback>
//           </View>
//         </TouchableWithoutFeedback>
//       </Modal>
//     </View>
//   );
// }

import { Text } from "@react-navigation/elements";
export default function HistoryScreen() {
  return <Text>Hello World</Text>;
}
