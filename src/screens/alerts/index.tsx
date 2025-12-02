// import React from "react";
// import { ScrollView, Text, TouchableOpacity, View } from "react-native";
// import { StackActions } from "@react-navigation/native";
// import Ionicons from "@react-native-vector-icons/ionicons";

// import { useUiStyles } from "@/src/components/ui-styles-provider";
// import LinkWrapper from "@/src/components/link-wrapper";

// const warnings = [
//   {
//     id: 1,
//     teacher: "홍길동",
//     reason: "Didn't follow teacher's direction",
//     score: 3,
//   },
//   {
//     id: 2,
//     teacher: "이순신",
//     reason: "Didn't follow teacher's direction",
//     score: 3,
//   },
//   {
//     id: 3,
//     teacher: "정약용",
//     reason: "Didn't follow teacher's direction",
//     score: 3,
//   },
// ];

// export default function AlertsScreen() {
//   const { commonStyles } = useUiStyles();

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
//       <View>
//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "flex-end",
//             marginVertical: 8,
//           }}
//         >
//           <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
//             <Ionicons name="close-circle-outline" size={20} color="#666" />
//             <Text style={{ marginLeft: 4, color: "#666" }}>Clear All</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       <ScrollView style={{ flex: 1, marginTop: 25 }}>
//         {warnings.map(item => (
//           <View
//             key={item.id}
//             style={{
//               backgroundColor: "#fff",
//               padding: 16,
//               borderRadius: 12,
//               borderWidth: 1,
//               borderColor: "#ccc",
//               marginBottom: 12,
//             }}
//           >
//             <View
//               style={{
//                 flexDirection: "row",
//                 justifyContent: "space-between",
//               }}
//             >
//               <View
//                 style={{
//                   flexDirection: "row",
//                   alignItems: "center",
//                 }}
//               >
//                 <Ionicons name="information-circle-outline" size={18} color="#555" />
//                 <Text
//                   style={{
//                     marginLeft: 6,
//                     fontWeight: "bold",
//                   }}
//                 >
//                   새로운 기소사항
//                 </Text>
//                 {/**이거는 메시지 종류에 따라 달라짐. 수정할 것. */}
//               </View>
//               <TouchableOpacity>
//                 <Ionicons name="close-outline" size={20} color="#333" />
//               </TouchableOpacity>
//             </View>
//             <Text style={{ marginTop: 12, marginBottom: 16 }}>
//               {item.teacher} 선생님 - {item.reason} ({item.score}
//               점)
//             </Text>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

import { Text } from "@react-navigation/elements";

export default function AlertsScreen() {
  return <Text>Hello World</Text>;
}
