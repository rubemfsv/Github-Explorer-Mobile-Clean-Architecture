import { StyleSheet, Dimensions } from "react-native";
import normalize from 'react-native-normalize'
import { PaletteColors } from "../../styles/PalleteColors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: PaletteColors.$paletteErrorRed300
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
  bodyContainer: {
    height: (Dimensions.get('window').height) * 0.76,
    width: Dimensions.get("window").width,
    backgroundColor: PaletteColors.$paletteErrorRed200,
  },
  input: {
    height: 50,
    width: Dimensions.get("window").width * 0.70,
    borderWidth: 1,
    alignSelf: 'center',
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