import { StyleSheet, Dimensions } from "react-native";
import normalize from 'react-native-normalize'
import { PaletteColors } from "../../styles/PalleteColors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: PaletteColors.$paletteGrey300
  },
  containerHeader: {
    alignItems: 'center',
    paddingBottom: normalize(20),
    width: Dimensions.get("window").width,
    backgroundColor: PaletteColors.$paletteGrey300,
    borderBottomWidth: normalize(3),
    marginTop: normalize(45),
    paddingStart: normalize(22)
  },
  screenTitle: {
    color: PaletteColors.$paletteSecondaryLight,
    fontSize: normalize(30),
  },
  bodyContainer: {
    height: (Dimensions.get('window').height) * 0.76,
    width: Dimensions.get("window").width,
    backgroundColor: PaletteColors.$paletteGrey200,
    justifyContent: 'center',
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