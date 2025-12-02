import {
  CommonActions,
  createNavigationContainerRef,
  useFocusEffect,
  useNavigation,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback } from "react";
import { RootStackParamList } from "../../config/screen-structure";

export const navigationRef = createNavigationContainerRef();

const NavigationAPI = {
  /* A useEffect tool for all platforms */
  /* eslint-disable react-hooks/exhaustive-deps */
  useCompatibleEffect: (effect: () => void | (() => void), deps: any[] = []) =>
    useFocusEffect(useCallback(effect, deps)),
  /* eslint-enable react-hooks/exhaustive-deps */
  useNavigationWithTS: () => useNavigation<NativeStackNavigationProp<RootStackParamList>>(),
};

export default NavigationAPI;
