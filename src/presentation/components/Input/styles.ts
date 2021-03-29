import { StyleSheet, Dimensions } from "react-native";
import normalize from 'react-native-normalize'
import { PaletteColors } from "../../styles/PalleteColors";

export const styles = StyleSheet.create({
  container: {
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
  icon: {
    marginRight: normalize(16),
    fontSize: normalize(20),
  }
});