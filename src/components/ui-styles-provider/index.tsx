import { createContext, ReactNode, useContext } from "react";
import { ColorSchemeName } from "react-native";
import {
  BorderOptionsType,
  ColorOptionsType,
  TypographyOptionsType,
  ShadowOptionsType,
  borders,
  colors,
  shadows,
  typographies,
} from "../../constants/ui-styles";

export interface UiStylesContextType {
  colors: ColorOptionsType;
  borders: BorderOptionsType;
  typographies: TypographyOptionsType;
  shadows: ShadowOptionsType;
}

const UiStylesContext = createContext<UiStylesContextType | undefined>(undefined);

export function useUiStyles() {
  const context = useContext(UiStylesContext);
  if (!context) {
    throw new Error("useAuth must be used within an UiStylesProvider");
  }
  return context;
}

interface UiStylesProviderProps {
  colorScheme: ColorSchemeName;
  children: ReactNode;
}

export function UiStylesProvider({ colorScheme, children }: UiStylesProviderProps) {
  const uiStylesValue: UiStylesContextType | undefined =
    colorScheme === "light" || colorScheme === "dark"
      ? {
          colors: colors[colorScheme],
          borders: borders,
          typographies: typographies,
          shadows: shadows,
        }
      : undefined;

  if (!uiStylesValue) console.error("Ui Styles Provider error: invalid colorScheme");

  return <UiStylesContext.Provider value={uiStylesValue}>{children}</UiStylesContext.Provider>;
}

export { colors, borders, typographies, shadows };
