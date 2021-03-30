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
  },
  userContainer: {
    flexDirection: 'row'
  },
  userAvatar: {
    width: normalize(30),
    height: normalize(30),
    borderTopRightRadius: normalize(98),
    borderTopLeftRadius: normalize(98),
    borderBottomRightRadius: normalize(98),
    borderBottomLeftRadius: normalize(98),
    marginRight: normalize(14)
  },
});
