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
  },
  avatarAndPresentationContainer: {
    marginTop: normalize(25),
    marginBottom: normalize(25),
    marginLeft: normalize(30),
    flexDirection: 'row',
  },
  avatarImage: {
    width: normalize(95),
    height: normalize(95),
    borderTopRightRadius: normalize(98),
    borderTopLeftRadius: normalize(98),
    borderBottomRightRadius: normalize(98),
    borderBottomLeftRadius: normalize(98),
  },
  presentationContainer: {
    marginLeft: normalize(25),
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameText: {
    fontSize: normalize(20),
    color: PaletteColors.$paletteSecondaryLight,
  },
  companyText: {
    fontSize: normalize(16),
    marginTop: normalize(7),
    color: PaletteColors.$paletteGreen500,
  },

  statisticContainer: {
    height: normalize(100),
  },
  tabContainer: {
    paddingLeft: normalize(10),
    paddingRight: normalize(20),
  },
  tabItem: {
    width: normalize(100),
    height: normalize(100),
    backgroundColor: PaletteColors.$paletteGrey10,
    marginLeft: normalize(10),
    borderTopRightRadius: normalize(5),
    borderTopLeftRadius: normalize(5),
    borderBottomRightRadius: normalize(5),
    borderBottomLeftRadius: normalize(5),
    padding: normalize(10),
  },
  tabTitle: {
    fontSize: normalize(15),
    marginTop: normalize(10),
    color: PaletteColors.$paletteSecondaryLight
  },
  tabNumber: {
    fontSize: normalize(20),
    marginTop: normalize(15),
    fontWeight: 'bold',
    color: PaletteColors.$paletteGreen500,
    alignItems: 'center'
  },

  buttonContainer: {
    width: Dimensions.get("window").width,
    marginBottom: normalize(2),
  },
  backIcon: {
    fontSize: normalize(20),
  },
});