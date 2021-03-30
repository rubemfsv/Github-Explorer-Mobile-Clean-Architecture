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
  presentationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(25),
    marginBottom: normalize(25),
    marginLeft: normalize(30),
  },
  nameText: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    color: PaletteColors.$paletteSecondaryLight,
  },
  companyText: {
    fontSize: normalize(16),
    marginTop: normalize(7),
    color: PaletteColors.$paletteGreen500,
  },
  descriptionRepositoryContainer: {
    paddingLeft: normalize(20),
    paddingRight: normalize(20),
    marginTop: normalize(10),
    marginBottom: normalize(35)
  },
  descriptionRepositoryText: {
    fontSize: normalize(16),
    color: PaletteColors.$paletteSecondaryLight,
  },
  statisticContainer: {
    height: normalize(100),
    marginTop: normalize(15),
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