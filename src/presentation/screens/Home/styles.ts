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
    color: PaletteColors.$paletteGreen500,
    fontSize: normalize(30),
  },
  bodyContainer: {
    height: (Dimensions.get('window').height) * 0.75,
    width: Dimensions.get("window").width,
    backgroundColor: PaletteColors.$paletteGrey200,
    justifyContent: 'center',
  },
  errorText: {
    alignSelf: 'center',
    fontSize: normalize(16),
    color: PaletteColors.$paletteErrorRed700,
    fontWeight: 'bold'
  },
  buttonContainer: {
    width: Dimensions.get("window").width,
    marginBottom: normalize(2),
  },
  searchIcon: {
    fontSize: normalize(20),
  },
});