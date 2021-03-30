import { StyleSheet, Dimensions } from "react-native";
import normalize from 'react-native-normalize'
import { PaletteColors } from "../../styles/PalleteColors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: PaletteColors.$paletteGrey300,
    flex: 1
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
  flatListBottom: {
    paddingBottom: normalize(20),
  },
  searchList: {
    backgroundColor: PaletteColors.$paletteGrey200,
    paddingLeft: normalize(32),
    paddingRight: normalize(32),
    paddingTop: normalize(24),
    paddingBottom: normalize(16),
  },
  listTitle: {
    fontSize: normalize(24),
    marginBottom: normalize(24),
    color: PaletteColors.$paletteGreen500
  },
  listText: {
    color: PaletteColors.$paletteSecondaryLight,
    fontSize: normalize(20),
  },
  buttonContainer: {
  },
  backIcon: {
    fontSize: normalize(20),
  },
});
