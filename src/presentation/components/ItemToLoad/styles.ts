import { StyleSheet } from "react-native";
import normalize from 'react-native-normalize'
import { PaletteColors } from "../../styles/PalleteColors";

export const styles = StyleSheet.create({
  repositoryContainer: {
    backgroundColor: PaletteColors.$paletteSecondaryGrey,
    marginBottom: normalize(16),
    borderTopEndRadius: normalize(10),
    borderTopStartRadius: normalize(10),
    borderBottomLeftRadius: normalize(10),
    borderBottomRightRadius: normalize(10),
    padding: normalize(5),
    flexDirection: 'row',
    alignItems: 'center'
  },

  recButtonContainer: {
    backgroundColor: PaletteColors.$paletteSecondaryGrey,
    width: '100%',
    padding: normalize(20),
  },

  recButtonText: {
    color: PaletteColors.$paletteSecondaryLight,
    fontSize: normalize(18)
  }
});
