import { StyleSheet, Dimensions } from "react-native";
import normalize from 'react-native-normalize'
import { PaletteColors } from "../../styles/PalleteColors";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: PaletteColors.$paletteErrorRed200
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(45),
    paddingStart: normalize(22)
  },
  screenTitle: {
    color: PaletteColors.$palettePrimaryDark,
    fontSize: normalize(30),
  },

  buttonContainer: {
    width: Dimensions.get("window").width,
    marginBottom: normalize(2),
  },
  buttonStyles: {
    backgroundColor: PaletteColors.$paletteErrorRedA700,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    marginTop: normalize(12),
    color: PaletteColors.$paletteSecondaryLight,
    textTransform: 'uppercase',
    fontSize: normalize(20),
    lineHeight: normalize(40),
    textAlign: 'center'
  },
});