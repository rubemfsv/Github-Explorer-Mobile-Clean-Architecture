import { StyleSheet, Dimensions } from "react-native";
import normalize from 'react-native-normalize'
import { PaletteColors } from "../../styles/PalleteColors";

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: normalize(60),
    alignSelf: 'center',
    backgroundColor: PaletteColors.$paletteGrey300,
    paddingLeft: normalize(16),
    paddingRight: normalize(16),
    borderBottomEndRadius: normalize(10),
    borderBottomStartRadius: normalize(10),
    borderTopEndRadius: normalize(10),
    borderTopStartRadius: normalize(10),
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: PaletteColors.$paletteGreen400,
    fontSize: normalize(20)
  }
});