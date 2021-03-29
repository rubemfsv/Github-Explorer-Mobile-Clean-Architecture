import { StyleSheet, Dimensions } from "react-native";
import normalize from 'react-native-normalize'
import { PaletteColors } from "../../styles/PalleteColors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: PaletteColors.$paletteErrorRed300,
    flex: normalize(1)
  },
  containerHeader: {
    alignItems: 'center',
    paddingBottom: normalize(20),
    width: Dimensions.get("window").width,
    backgroundColor: PaletteColors.$paletteErrorRed300,
    borderBottomWidth: normalize(3),
    marginTop: normalize(45),
    paddingStart: normalize(22)
  },
  screenTitle: {
    color: PaletteColors.$palettePrimaryDark,
    fontSize: normalize(30),
  },
  searchList: {
    backgroundColor: PaletteColors.$paletteErrorRed200,
    paddingLeft: normalize(32),
    paddingRight: normalize(32),
    paddingTop: normalize(24),
    paddingBottom: normalize(16)
  },
  listTitle: {
    fontSize: normalize(24),
    marginBottom: normalize(24),
    color: PaletteColors.$palettePrimaryDark
  },
  listText: {
    color: PaletteColors.$paletteSecondaryLight,
    fontSize: normalize(20),
  },
  buttonContainer: {
    width: Dimensions.get("window").width,
    marginBottom: normalize(2),
  },
  buttonStyles: {
    backgroundColor: PaletteColors.$paletteErrorRedA700,
    alignItems: 'center',
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
