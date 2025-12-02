// import React from "react";
// import LinkWrapper from "@/src/components/link-wrapper";
// import { Text, TouchableOpacity, View } from "react-native";
// import { StackActions } from "@react-navigation/native";

// import { useUiStyles } from "@/src/components/ui-styles-provider";

// export default function SettingsScreen() {
//   const { commonStyles } = useUiStyles();

//   const handleLogout = () => {
//     alert("로그아웃 버튼이 눌렸습니다.");
//     // 여기서 실제 로그아웃 처리(ex: 토큰 삭제, 로그인 화면으로 이동 등)를 하면 돼
//   };

//   return (
//     <View style={commonStyles.container}>
//       <View style={commonStyles.infoBox}>
//         <Text style={commonStyles.infoTitle}>이름</Text>
//         <Text style={commonStyles.infoText}>왕두균 선생님</Text>

//         <Text style={commonStyles.infoTitle}>이메일</Text>
//         <Text style={commonStyles.infoText}>wang@example.com</Text>

//         <Text style={commonStyles.infoTitle}>전화번호</Text>
//         <Text style={commonStyles.infoText}>010-1234-5678</Text>
//       </View>

//       {/* 로그아웃 버튼 */}
//       <TouchableOpacity style={commonStyles.logoutButton} onPress={handleLogout}>
//         <Text style={commonStyles.logoutButtonText}>로그아웃</Text>
//       </TouchableOpacity>
//       <LinkWrapper
//         screen="StudentHome"
//         action={StackActions.popTo("StudentHome")}
//         style={commonStyles.homeButton}
//         touchableOpacity={true}
//       >
//         <Text style={commonStyles.logoutButtonText}>홈화면 돌아가기</Text>
//       </LinkWrapper>
//     </View>
//   );
// }

export default function SettingsScreen() {
  return <>Hello World</>;
}
