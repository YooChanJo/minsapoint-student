// import React, { useState } from "react";
// // import Ionicons from "@react-native-vector-icons/ionicons";
// import { Text, View } from "react-native";

// import { useUiStyles } from "../../components/ui-styles-provider";
// import { useAuth } from "../../components/auth-provider";

// import UserAPI from "../../api/user";
// import NavigationAPI from "../../api/navigation";

// /* TODO: Perhaps add a loading symbol or somehow --> this applies to all screens */
// export default function HomeScreen() {
//   const { accessToken } = useAuth();

//   const [penaltyPoints, setPenaltyPoints] = useState<number | undefined>(undefined);
//   const [rewardPoints, setRewardPoints] = useState<number | undefined>(undefined);
//   const [hasCourt, setHasCourt] = useState<boolean | undefined>(undefined);

//   NavigationAPI.useCompatibleEffect(() => {
//     async function init() {
//       try {
//         const currentUserInfo = await UserAPI.getCurrentUserInfo(accessToken);
//         setPenaltyPoints(currentUserInfo.penaltyPoints);
//         setRewardPoints(currentUserInfo.rewardPoints);
//         setHasCourt(currentUserInfo.hasCourt);
//       } catch (e) {
//         console.error("Failed to fetch current user info: ", e);
//       }
//     }
//     init();
//   });

//   return (
//     <View style={commonStyles.container}>
//       {/* 상단 바 */}
//       <View style={commonStyles.topBar}>
//         <Text style={commonStyles.appTitle}>MinsaPoint</Text>
//         <View style={commonStyles.rightProfileSection}>
//           <LinkWrapper
//             screen="StudentSettings"
//             style={commonStyles.settingsIcon}
//             touchableOpacity={true}
//           >
//             <Ionicons name="settings-outline" size={30} style={commonStyles.icon} />
//           </LinkWrapper>
//         </View>
//       </View>

//       {/* 알림 아이콘 */}
//       <LinkWrapper screen="StudentAlerts" style={commonStyles.notification} touchableOpacity={true}>
//         <Ionicons name="notifications-outline" size={28} style={commonStyles.icon} />
//         <View style={commonStyles.notificationBadge}>
//           <Text style={commonStyles.notificationText}>3</Text>
//         </View>
//       </LinkWrapper>
//       {/* 중앙 점수 정보 */}
//       <View style={commonStyles.scoreSection}>
//         <Text style={commonStyles.grayLabel}>누계</Text>
//         <Text style={commonStyles.bigScore}>
//           {!penaltyPoints || !rewardPoints || penaltyPoints - rewardPoints}
//         </Text>

//         <View style={commonStyles.subScores}>
//           <View style={commonStyles.scoreItem}>
//             <Text style={commonStyles.label}>벌점</Text>
//             <Text style={commonStyles.value}>{penaltyPoints}</Text>
//           </View>
//           <View style={commonStyles.scoreItem}>
//             <Text style={commonStyles.label}>상점</Text>
//             <Text style={commonStyles.value}>{rewardPoints}</Text>
//           </View>
//         </View>
//         <LinkWrapper
//           screen="StudentHistory"
//           style={commonStyles.homeButton}
//           touchableOpacity={true}
//         >
//           <Text style={commonStyles.buttonText}>History</Text>
//         </LinkWrapper>
//       </View>
//       <View style={commonStyles.infoBoxUserHome}>
//         <Text style={commonStyles.infoBoxUserHomeText}>
//           {hasCourt ? "이번주 법정 대상자입니다" : "이번주 법정 대상자가 아닙니다"}
//         </Text>
//       </View>
//     </View>
//   );
// }


import { Alert, Button, Text, View } from "react-native";
import NavigationAPI from "../../api/navigation";
import UserAPI from "../../api/user";
export default function HomeScreen() {
  const navigation = NavigationAPI.useNavigationWithTS();
  return (
    <View>
      <Text>Hello Home Screen</Text>
      <Button
        onPress={async () => {
          await UserAPI.signUserOut();
          Alert.alert("hey");
        }}
        title="d"
      />
    </View>
  );
}
