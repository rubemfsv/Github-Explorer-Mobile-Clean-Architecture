import { StyleSheet, Dimensions } from "react-native";
import normalize from 'react-native-normalize'
import { PaletteColors } from "../../styles/PalleteColors";

export const styles = StyleSheet.create({
  containerActive: {
    width: Dimensions.get('window').width * 0.7,
    height: normalize(50),
    alignSelf: 'center',
    backgroundColor: PaletteColors.$paletteGrey300,
    paddingLeft: normalize(16),
    paddingRight: normalize(16),
    borderBottomEndRadius: normalize(8),
    borderBottomStartRadius: normalize(8),
    borderTopEndRadius: normalize(8),
    borderTopStartRadius: normalize(8),
    marginBottom: normalize(8),
    borderWidth: 2,
    borderColor: PaletteColors.$paletteGreen500,
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerInactive: {
    width: Dimensions.get('window').width * 0.7,
    height: normalize(50),
    alignSelf: 'center',
    backgroundColor: PaletteColors.$paletteGrey300,
    paddingLeft: normalize(16),
    paddingRight: normalize(16),
    borderBottomEndRadius: normalize(8),
    borderBottomStartRadius: normalize(8),
    borderTopEndRadius: normalize(8),
    borderTopStartRadius: normalize(8),
    marginBottom: normalize(8),
    borderWidth: 1,
    borderColor: PaletteColors.$palettePrimaryMain,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textInput: {
    flex: normalize(1),
    color: PaletteColors.$paletteSecondaryLight,
    fontSize: normalize(16)
  },
  iconActive: {
    marginRight: normalize(16),
    fontSize: normalize(20),
    color: PaletteColors.$paletteGreen500
  },
  iconInactive: {
    marginRight: normalize(16),
    fontSize: normalize(20),
    color: PaletteColors.$palettePrimaryMain
  },
});