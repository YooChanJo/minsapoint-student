/*
  The current styles are all a default version, please make sure it matches appropriate color
  if needed you can add an options to type interface and add another style, yet in that case be sure to make it as general as possible
  then with these colors
*/
export interface ColorOptionsType {
  primary: string;
  primaryHover: string;
  primaryActive: string;

  secondary: string;
  secondaryHover: string;
  secondaryActive: string;

  accent: string;
  accentHover: string;
  accentActive: string;

  success: string;
  warning: string;
  error: string;
  info: string;

  text: string;
  textMuted: string;
  textSubtle: string;

  background: string;
  surface: string;
  border: string;
}
export interface ColorStyleOptionsType {
  light: ColorOptionsType;
  dark: ColorOptionsType;
}
export const colors: ColorStyleOptionsType = {
  light: {
    primary: "#1A1A1A",
    primaryHover: "#333333",
    primaryActive: "#000000",

    secondary: "#858e9bff",
    secondaryHover: "#d2dae4ff",
    secondaryActive: "#eaeffbff",

    accent: "#d00909ff",
    accentHover: "#c65555ff",
    accentActive: "#fc0909ff",

    success: "#22c55e",
    warning: "#eab308",
    error: "#ef4444",
    info: "#3b82f6",

    text: "#111111",
    textMuted: "#555555",
    textSubtle: "#777777",

    background: "#e4f4f5ff",
    surface: "#f5f5f5",
    border: "#E6E6E6",
  },

  dark: {
    primary: "#f0f2ffff",
    primaryHover: "#c7cdecff",
    primaryActive: "#ffffffff",

    secondary: "#67e8f9",
    secondaryHover: "#22d3ee",
    secondaryActive: "#0e7490",

    accent: "#fc0909ff",
    accentHover: "#c65555ff",
    accentActive: "#d00909ff",

    success: "#4ade80",
    warning: "#facc15",
    error: "#f87171",
    info: "#60a5fa",

    text: "#f5f5f5",
    textMuted: "#c1c1c1",
    textSubtle: "#9ca3af",

    background: "#111111",
    surface: "#1e1e1e",
    border: "#2d2d2d",
  },
};

/*
  Can use numbers instead of px in case change type to number and change entry to wanted number
*/
export interface BorderOptionsType {
  radiusSM: number; // small rounding
  radiusMD: number; // middle default
  radiusLG: number; // large rounding
  radiusFull: number; // full rounding
}
export const borders: BorderOptionsType = {
  radiusSM: 4,
  radiusMD: 8,
  radiusLG: 16,
  radiusFull: 9999,
};

export interface TypographyOptionsType {
  fontSans: string; // main font stack
  fontSizeXS: number; // extra small text labels, tooltips, chips, captions
  fontSizeSM: number; // small text subtexts, secondary descriptions, table text
  fontSizeMD: number; // default body text, paragraphs, inputs, buttons
  fontSizeLG: number; // large text, section titles, medium headers
  fontSizeXL: number; // extra large text, headlines, modal titles

  fontWeightRegular:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";

  fontWeightMedium:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";

  fontWeightBold:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
}
export const typographies: TypographyOptionsType = {
  fontSans: `"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`,
  fontSizeXS: 12,
  fontSizeSM: 14,
  fontSizeMD: 16,
  fontSizeLG: 18,
  fontSizeXL: 24,

  fontWeightRegular: "400",
  fontWeightMedium: "500",
  fontWeightBold: "700",
};

export interface ShadowOptionsType {
  shadowSM: string;
  shadowMD: string;
  shadowLG: string;
}

export const shadows: ShadowOptionsType = {
  shadowSM: "0 1px 2px rgba(0, 0, 0, 0.08)",
  shadowMD: "0 2px 4px rgba(0, 0, 0, 0.10)",
  shadowLG: "0 4px 12px rgba(0, 0, 0, 0.12)",
};

// All depreciated past styles are below

// /*
//   ToDo: Currently all color styles are inconsistent, and dark mode is not correctly configured
//   ToDo: Currently fonts are inconsistent, please match all fonts
//   ToDo: Currently comments aren't fully applied, fill in all the blank comments

//   Advice: I believe the colors are too bright, consider downgrading it.
//   Advice: Consider making a color theme idea before configuring.
// */

// /* All ui-themes are specified here */
// import { ImageStyle, TextStyle, ViewStyle } from "react-native";

// /* Colors */
// export interface ColorStyleType {
//   text: string;
//   background: string;
//   tint: string;
//   icon: string;
//   tabIconDefault: string;
//   tabIconSelected: string;
//   border: string;
//   card: string;
//   button: string;
//   buttonText: string;
//   success: string;
//   error: string;
//   notificationBadge: string;
//   notificationText: string;
//   menuItemBottomColor: string;
//   warning: string;
//   inputBackground: string;
//   inputText: string;
// }

// export interface ColorStyleSetType {
//   light: ColorStyleType;
//   dark: ColorStyleType;
// }

// const tintColorLight = "#000000";
// const tintColorDark = "#FFFFFF";
// export const Colors: ColorStyleSetType = {
//   light: {
//     text: "#11181C",
//     background: "#F7F8FA", // Softer off-white background
//     tint: tintColorLight,
//     icon: "#687076",
//     tabIconDefault: "#687076",
//     tabIconSelected: tintColorLight,
//     border: "#DDDDDD",
//     card: "#FFFFFF", // Keep cards pure white for contrast
//     button: "#000000",
//     buttonText: "#FFFFFF",
//     success: "#2ECC71",
//     error: "#E74C3C",
//     notificationBadge: "#E74C3C",
//     notificationText: "#FFFFFF",
//     menuItemBottomColor: "#F0F0F0", // Slightly lighter divider
//     warning: "#F39C12",
//     inputBackground: "#ffffffff", // Light input field background
//     inputText: "#11181C", // Dark text on light input
//   },
//   dark: {
//     text: "#F7F8FA",
//     background: "#2c2a2aff", // Deep gray background (OLED-friendly but less harsh than pure black)
//     tint: tintColorDark,
//     icon: "#CCCCCC", // Light gray icons for visibility
//     tabIconDefault: "#888888", // Medium gray for unselected tabs
//     tabIconSelected: "#FFFFFF", // White for selected tab highlight
//     border: "#2E2F31",
//     card: "#1E1E1E", // Slightly lighter gray for cards
//     button: "#FFFFFF",
//     buttonText: "#2e2d2dff",
//     success: "#2ECC71",
//     error: "#E74C3C",
//     notificationBadge: "#E74C3C",
//     notificationText: "#FFFFFF",
//     menuItemBottomColor: "#1A1A1A", // Slight divider gray
//     warning: "#F39C12",
//     inputBackground: "#2c2a2aff", // Dark gray input background
//     inputText: "#ECEDEE", // Light text on dark input
//   },
// };

// /* Fonts */
// export interface FontStyleType {
//   fontFamily: string;
//   fontSize: number;
// }

// export interface FontStyleSetType {
//   regular: FontStyleType;
//   bold: FontStyleType;
//   heading: FontStyleType;
// }

// export const Fonts: FontStyleSetType = {
//   regular: {
//     fontFamily: "Poppins-Regular",
//     fontSize: 16,
//   },
//   bold: {
//     fontFamily: "Poppins-Bold",
//     fontSize: 16,
//   },
//   heading: {
//     fontFamily: "Poppins-SemiBold",
//     fontSize: 24,
//   },
// };

// /* element styles */
// export interface CommonStylesType {
//   container: ViewStyle;
//   inputWrapper: ViewStyle;
//   input: TextStyle;
//   togglebutton: ViewStyle;
//   topBar: ViewStyle;
//   appTitle: TextStyle;
//   rightProfileSection: ViewStyle;
//   notification: ViewStyle;
//   notificationBadge: ViewStyle;
//   notificationText: TextStyle;
//   shadowBox: ViewStyle;
//   titleText: TextStyle;
//   subtitleText: TextStyle;
//   labelText: TextStyle;
//   button: ViewStyle;
//   buttonText: TextStyle;
//   profileRow: ViewStyle;
//   profileImage: ImageStyle;
//   profileTextContainer: ViewStyle;
//   profileName: TextStyle;
//   settingsIcon: ViewStyle;
//   summaryBox: ViewStyle;
//   smallGrayText: TextStyle;
//   boldBlackText: TextStyle;
//   menuWrapper: ViewStyle;
//   menuItem: ViewStyle;
//   iconWithText: ViewStyle;
//   menuTitle: TextStyle;
//   menuSubtitle: TextStyle;
//   scoreSection: ViewStyle;
//   grayLabel: TextStyle;
//   bigScore: TextStyle;
//   subScores: ViewStyle;
//   scoreItem: ViewStyle;
//   label: TextStyle;
//   value: TextStyle;
//   modalBackdrop: ViewStyle;
//   modalBox: ViewStyle;
//   modalTitle: TextStyle;
//   modalClose: TextStyle;
//   modalContent: TextStyle;
//   cancelButton: ViewStyle;
//   closeButton: ViewStyle;
//   itemCard: ViewStyle;
//   itemTitle: TextStyle;
//   itemSub: TextStyle;
//   infoBox: ViewStyle;
//   infoTitle: TextStyle;
//   infoText: TextStyle;
//   logoutButton: ViewStyle;
//   homeButton: ViewStyle;
//   logoutButtonText: TextStyle;
//   header: ViewStyle;
//   headerLeft: ViewStyle;
//   headerRight: ViewStyle;
//   formBox: ViewStyle;
//   infoBoxUserHome: ViewStyle;
//   infoBoxUserHomeText: TextStyle;
//   icon: TextStyle;
//   modalHeader: ViewStyle;
//   iconButton: TextStyle;
// }

// function createCommonStyles(colors: typeof Colors.light): CommonStylesType {
//   return {
//     /* Entire wrapper of screen */
//     container: {
//       flex: 1,
//       backgroundColor: colors.background,
//       paddingHorizontal: 24,
//     },
//     icon: {
//       backgroundColor: colors.background,
//       color: colors.icon,
//     },
//     /* A View element wrapping input element */
//     inputWrapper: {
//       backgroundColor: colors.inputBackground,
//       borderRadius: 12,
//       borderWidth: 1,
//       borderColor: colors.border,
//       paddingHorizontal: 16,
//       paddingVertical: 12,
//       marginBottom: 12,
//     },
//     /* Text input element */
//     input: {
//       backgroundColor: colors.inputBackground,
//       color: colors.inputText,
//     },
//     /* Toggling button for checking */
//     togglebutton: {
//       flexDirection: "row",
//       justifyContent: "flex-end",
//       alignItems: "center",
//       marginTop: 20,
//     },
//     /* Used for the top bar containing app name and navigation in student page */
//     topBar: {
//       flexDirection: "row",
//       justifyContent: "space-between",
//       alignItems: "center",
//     },
//     /* Used inside top bar marking the app name: Minsapoint */
//     appTitle: {
//       fontSize: 22,
//       fontWeight: "bold",
//       color: colors.text,
//     },
//     /* A View element that contains a setting icon pointing to account settings in student */
//     rightProfileSection: {
//       flexDirection: "row",
//       alignItems: "center",
//     },
//     /* A TouchableOpacity element in student screen containing notification icon */
//     notification: {
//       position: "absolute",
//       top: 60,
//       left: 24,
//     },
//     /* A small icon indicating how much alerts there are currently, stuck right above notification icon */
//     notificationBadge: {
//       position: "absolute",
//       top: -6,
//       right: -6,
//       backgroundColor: colors.notificationBadge,
//       borderRadius: 8,
//       paddingHorizontal: 4,
//       paddingVertical: 1,
//     },
//     /* The text indicating the number of alerts inside notification Badge */
//     notificationText: {
//       color: colors.notificationText,
//       fontSize: 10,
//       fontWeight: "bold",
//     },
//     /* Currently not used */
//     shadowBox: {
//       backgroundColor: colors.card,
//       paddingVertical: 24,
//       borderRadius: 12,
//       alignItems: "center",
//     },
//     /* Somehow resembles app title, but i do not know the point of this element */
//     titleText: {
//       ...Fonts.heading,
//       color: colors.text,
//       fontSize: 26,
//       textAlign: "left",
//       marginTop: 16,
//       marginBottom: 16,
//     },
//     subtitleText: {
//       ...Fonts.bold,
//       color: colors.text,
//       fontSize: 30,
//       textAlign: "center",
//     },
//     labelText: {
//       ...Fonts.regular,
//       color: colors.text,
//       alignItems: "center",
//     },
//     /* Button background */
//     button: {
//       flexDirection: "row", // 아이콘 + 텍스트
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundColor: colors.button,
//       paddingVertical: 16,
//       borderRadius: 12,
//       marginTop: 16,
//       shadowColor: "#000",
//       shadowOffset: { width: 0, height: 4 },
//       shadowOpacity: 0.1,
//       shadowRadius: 6,
//       elevation: 2,
//     },
//     infoBoxUserHome: {
//       backgroundColor: colors.background,
//       borderRadius: 8,

//       minHeight: 80, // enforce a box height
//       alignItems: "center", // horizontal center
//       justifyContent: "center", // vertical center
//     },

//     infoBoxUserHomeText: {
//       textAlign: "center", // center align text
//       fontWeight: "bold", // make text bold
//       fontSize: 16, // optional: adjust size
//       marginTop: 30,
//       color: colors.text, // use theme text color
//     },

//     /* Text inside button */
//     buttonText: {
//       ...Fonts.bold,
//       color: colors.buttonText,
//       fontSize: 16,
//       marginLeft: 8, // 아이콘과 간격
//     },
//     /* A View element containing teacher profile */
//     profileRow: {
//       flexDirection: "row-reverse",
//       alignItems: "center",
//       marginBottom: 20,
//     },
//     /* Teacher pofile elements*/
//     profileImage: {
//       width: 40,
//       height: 40,
//       borderRadius: 20,
//       marginLeft: 8,
//     },
//     profileTextContainer: {
//       flexDirection: "column",
//       alignItems: "flex-end",
//     },
//     profileName: {
//       ...Fonts.bold,
//       fontSize: 16,
//       color: colors.text,
//     },
//     /*****************Please fill in the rest comments too*******************/
//     settingsIcon: {
//       marginLeft: 8,
//       marginTop: 20,
//       backgroundColor: colors.background,
//       padding: 6,
//     },
//     modalHeader: {
//       flexDirection: "row",
//       justifyContent: "space-between",
//       alignItems: "center",
//       marginBottom: 16, // optional spacing
//     },
//     modalClose: {
//       position: "absolute", // absolute positioning
//       right: 12, // right offset inside modal box
//       zIndex: 30, // ensure it's above other content
//     },

//     summaryBox: {
//       marginBottom: 24,
//     },
//     smallGrayText: {
//       ...Fonts.regular,
//       fontSize: 14,
//       color: colors.tint,
//     },
//     boldBlackText: {
//       ...Fonts.bold,
//       fontSize: 16,
//       color: colors.text,
//     },
//     menuWrapper: {
//       borderTopWidth: 1,
//       borderTopColor: colors.border,
//     },
//     menuItem: {
//       flexDirection: "row",
//       alignItems: "center",
//       paddingVertical: 18,
//       justifyContent: "space-between",
//       borderBottomWidth: 1,
//       borderBottomColor: colors.icon,
//     },
//     iconWithText: {
//       flexDirection: "row",
//       alignItems: "center",
//     },
//     menuTitle: {
//       ...Fonts.bold,
//       fontSize: 16,
//       color: colors.text,
//     },
//     menuSubtitle: {
//       ...Fonts.regular,
//       fontSize: 12,
//       color: colors.tint,
//     },
//     scoreSection: {
//       alignItems: "center",
//       marginTop: 100,
//     },
//     grayLabel: {
//       color: colors.icon,
//       fontSize: 18,
//       marginBottom: 8,
//     },
//     bigScore: {
//       fontSize: 64,
//       fontWeight: "bold",
//       color: colors.text,
//     },
//     subScores: {
//       marginTop: 32,
//       gap: 16,
//     },
//     scoreItem: {
//       flexDirection: "row",
//       justifyContent: "space-between",
//       width: 120,
//     },
//     label: {
//       fontSize: 20,
//       color: colors.text,
//     },
//     value: {
//       fontSize: 20,
//       fontWeight: "bold",
//       color: colors.text,
//     },
//     modalBackdrop: {
//       flex: 1,
//       backgroundColor: "rgba(0,0,0,0.2)",
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     modalBox: {
//       backgroundColor: colors.card,
//       borderRadius: 16,
//       padding: 20,
//       width: "85%",
//       elevation: 4,
//       shadowColor: "#000",
//       shadowOpacity: 0.2,
//       shadowOffset: { width: 0, height: 2 },
//     },
//     modalTitle: {
//       fontSize: 20,
//       fontWeight: "bold",
//       marginBottom: 20,
//       color: colors.text,
//     },
//     modalContent: {
//       fontSize: 16,
//       marginBottom: 15,
//       color: colors.text,
//     },
//     iconButton: {
//       size: 24, // 기본 아이콘 크기
//       color: colors.buttonText, // 버튼 텍스트 색상과 동일
//     },
//     cancelButton: {
//       backgroundColor: colors.tint,
//       paddingVertical: 4,
//       paddingHorizontal: 14,
//       borderRadius: 6,
//       marginRight: 8,
//     },
//     closeButton: {
//       backgroundColor: colors.card,
//       paddingVertical: 8,
//       paddingHorizontal: 14,
//       borderRadius: 6,
//     },
//     itemCard: {
//       padding: 16,
//       backgroundColor: colors.card,
//       borderRadius: 12,
//       marginBottom: 12,
//     },
//     itemTitle: {
//       fontWeight: "bold",
//       fontSize: 16,
//       color: colors.text,
//     },
//     itemSub: {
//       color: colors.tint,
//       marginTop: 4,
//     },
//     infoBox: {
//       marginTop: 60,
//       backgroundColor: colors.card,
//       padding: 20,
//       borderRadius: 12,
//       gap: 12,
//     },
//     infoTitle: {
//       fontSize: 14,
//       color: colors.tint,
//       fontWeight: "bold",
//     },
//     infoText: {
//       fontSize: 16,
//       color: colors.text,
//       marginBottom: 8,
//     },
//     logoutButton: {
//       backgroundColor: "#FF3B30",
//       paddingVertical: 14,
//       borderRadius: 10,
//       marginTop: 30,
//     },
//     homeButton: {
//       backgroundColor: colors.button,
//       paddingVertical: 14,
//       borderRadius: 10,
//       marginTop: 30,
//     },
//     logoutButtonText: {
//       color: colors.buttonText,
//       fontSize: 16,
//       textAlign: "center",
//       fontWeight: "bold",
//     },
//     header: {
//       flexDirection: "row",
//       justifyContent: "space-between",
//       alignItems: "center",
//     },
//     headerLeft: {
//       flexDirection: "row",
//       alignItems: "center",
//     },
//     headerRight: {
//       flexDirection: "row",
//       alignItems: "center",
//     },
//     formBox: {
//       backgroundColor: colors.card, // 카드 느낌
//       borderRadius: 16, // 부드러운 모서리
//       padding: 24, // 충분한 패딩
//       gap: 16, // 아이템 간 간격
//       shadowColor: "#000", // 그림자
//       shadowOffset: { width: 0, height: 4 },
//       shadowOpacity: 0.1,
//       shadowRadius: 8,
//       elevation: 3, // Android 그림자
//     },
//   };
// }

// export interface CommonStylesSetType {
//   light: CommonStylesType;
//   dark: CommonStylesType;
// }

// export const CommonStyles = {
//   light: createCommonStyles(Colors.light),
//   dark: createCommonStyles(Colors.dark),
// };
